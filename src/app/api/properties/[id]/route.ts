import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { promises as fs } from "fs";
import path from "path";
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  if (!id || id === 'undefined') {
    return NextResponse.json({ error: "Missing or invalid id" }, { status: 400 });
  }

  // Check if multipart/form-data (file upload)
  const contentType = req.headers.get("content-type") || "";
  let data: any = {};
  let imagePath: string | undefined;
  if (contentType.includes("multipart/form-data")) {
    const formData = await req.formData();
    for (const [key, value] of formData.entries()) {
      if (key === "image" && value instanceof File && value.size > 0) {
        const buffer = Buffer.from(await value.arrayBuffer());
        const uploadDir = path.join(process.cwd(), "public", "uploads");
        await fs.mkdir(uploadDir, { recursive: true });
        const fileName = `${Date.now()}-${value.name}`;
        const filePath = path.join(uploadDir, fileName);
        await fs.writeFile(filePath, buffer);
        imagePath = `/uploads/${fileName}`;
      } else {
        data[key] = value;
      }
    }
    if (imagePath) data.image = imagePath;
    // Convert booleans
    if (data.featured !== undefined) data.featured = data.featured === 'true' || data.featured === true;
  } else {
    data = await req.json();
  }

  try {
    // Only allow fields that exist in the model
    const allowedFields = [
      "title", "location", "price", "image", "type", "size", "featured"
    ];
    const updateData: any = {};
    for (const key of allowedFields) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        updateData[key] = data[key];
      }
    }
    // Handle serviceId foreign key if serviceType is provided
    if (Object.prototype.hasOwnProperty.call(data, "serviceType") && data.serviceType && data.serviceType !== 'undefined') {
      const service = await prisma.service.findFirst({
        where: { name: data.serviceType },
      });
      if (service) {
        updateData.serviceId = service.id;
      }
    }
    if (Object.keys(updateData).length === 0) {
      return NextResponse.json({ error: "No valid fields provided for update." }, { status: 400 });
    }
    const updated = await prisma.property.update({
      where: { id },
      data: updateData,
    });
    return NextResponse.json(updated);
  } catch (e: any) {
    console.error("Property update error:", e);
    return NextResponse.json({ error: "Update failed", details: e?.message || String(e) }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  if (!id || id === 'undefined') {
    return NextResponse.json({ error: "Missing or invalid id" }, { status: 400 });
  }
  try {
    await prisma.property.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (e: any) {
    return NextResponse.json({ error: "Delete failed", details: e?.message }, { status: 500 });
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  if (!id || id === 'undefined') {
    return NextResponse.json({ error: "Missing or invalid id" }, { status: 400 });
  }
  const property = await prisma.property.findUnique({
    where: { id },
  });
  if (!property) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(property);
}
