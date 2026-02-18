import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const title = formData.get("title") as string;
  const location = formData.get("location") as string;
  const price = formData.get("price") as string;
  const type = formData.get("type") as string;
  const size = formData.get("size") as string;
  const featured = formData.get("featured") === "true" || formData.get("featured") === "on";
  const file = formData.get("image") as File;

  let imagePath = "";
  if (file && file.size > 0) {
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    await mkdir(uploadDir, { recursive: true });
    const filePath = path.join(uploadDir, file.name);
    await writeFile(filePath, Buffer.from(await file.arrayBuffer()));
    imagePath = `/uploads/${file.name}`;
  }

  const property = await prisma.property.create({
    data: {
      title,
      location,
      price,
      image: imagePath,
      type,
      size,
      featured,
    },
  });
  return NextResponse.json(property);
}
