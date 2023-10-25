/*
  Warnings:

  - Added the required column `unit` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unit` to the `StockMovementDetail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "unit" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "StockMovementDetail" ADD COLUMN     "unit" TEXT NOT NULL;
