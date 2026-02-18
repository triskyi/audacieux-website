import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { writeFile } from "fs/promises";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const title = formData.get("title") as string;
  const type = formData.get("type") as string;
  const location = formData.get("location") as string;
  const price = formData.get("price") as string;
  const size = formData.get("size") as string;
  const featured = formData.get("featured") === "on";
  const description = formData.get("description") as string;
  const file = formData.get("video") as File;

  let videoPath = "";
  if (file && file.size > 0) {
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    await writeFile(
      path.join(uploadDir, file.name),
      Buffer.from(await file.arrayBuffer())
    );
    videoPath = `/uploads/${file.name}`;
  }

  const short = await prisma.short.create({
    data: {
      title,
      type,
      location,
      price: price ? parseInt(price) : null,
      size,
      video: videoPath,
      featured,
      description,
    },
  });
  return NextResponse.json(short);
}
