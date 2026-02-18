import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const shorts = await prisma.short.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(shorts);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  // Map frontend fields to Prisma model
  const short = await prisma.short.create({
    data: {
      title: data.title,
      type: data.type || null,
      location: data.location || null,
      price: typeof data.price === 'number' ? data.price : data.price ? parseInt(data.price) : null,
      size: data.size || null,
      video: data.video,
      featured: !!data.featured,
      description: data.description || null,
    },
  });
  return NextResponse.json(short);
}
