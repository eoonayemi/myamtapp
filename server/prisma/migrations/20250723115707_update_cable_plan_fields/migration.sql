/*
  Warnings:

  - You are about to drop the column `planName` on the `cableplan` table. All the data in the column will be lost.
  - Added the required column `decoder` to the `CablePlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `CablePlan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cableplan` DROP COLUMN `planName`,
    ADD COLUMN `decoder` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;
