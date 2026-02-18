/*
  Warnings:

  - You are about to drop the column `videoUrl` on the `Short` table. All the data in the column will be lost.
  - Added the required column `video` to the `Short` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Short" DROP COLUMN "videoUrl",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "featured" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "location" TEXT,
ADD COLUMN     "price" INTEGER,
ADD COLUMN     "size" TEXT,
ADD COLUMN     "type" TEXT,
ADD COLUMN     "video" TEXT NOT NULL;
