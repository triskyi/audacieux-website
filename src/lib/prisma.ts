import { PrismaClient } from "@/generated/prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };






let prismaInstance: PrismaClient;
if (process.env.PRISMA_ACCELERATE_URL) {
  prismaInstance = globalForPrisma.prisma ?? new PrismaClient({ accelerateUrl: process.env.PRISMA_ACCELERATE_URL });
} else {
  throw new Error(
    'PrismaClient requires PRISMA_ACCELERATE_URL or adapter. Please set PRISMA_ACCELERATE_URL in your .env file.'
  );
}

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prismaInstance;

export { prismaInstance as prisma };
