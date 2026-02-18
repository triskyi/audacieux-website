import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const properties = await prisma.property.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(properties);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const property = await prisma.property.create({ data });
  return NextResponse.json(property);
}
