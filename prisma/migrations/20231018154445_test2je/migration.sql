/*
  Warnings:

  - You are about to drop the column `prodId` on the `StockMovementDetail` table. All the data in the column will be lost.
  - Added the required column `prodName` to the `StockMovementDetail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "StockMovementDetail" DROP COLUMN "prodId",
ADD COLUMN     "prodName" TEXT NOT NULL;
