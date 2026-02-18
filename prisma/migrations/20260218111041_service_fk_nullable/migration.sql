/*
  Warnings:

  - You are about to drop the column `serviceType` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `serviceType` on the `Short` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Property" DROP COLUMN "serviceType",
ADD COLUMN     "serviceId" TEXT;

-- AlterTable
ALTER TABLE "Short" DROP COLUMN "serviceType",
ADD COLUMN     "serviceId" TEXT;

-- DropEnum
DROP TYPE "ServiceType";

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Short" ADD CONSTRAINT "Short_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE SET NULL ON UPDATE CASCADE;
