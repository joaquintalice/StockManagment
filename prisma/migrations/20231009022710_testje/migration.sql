/*
  Warnings:

  - Added the required column `buyPrice` to the `StockMovementDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `StockMovementDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sellPrice` to the `StockMovementDetail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "StockMovementDetail" ADD COLUMN     "buyPrice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "quantity" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "sellPrice" DOUBLE PRECISION NOT NULL;
