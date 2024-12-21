/*
  Warnings:

  - You are about to drop the column `userType` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `userType`,
    ADD COLUMN `userRole` VARCHAR(191) NOT NULL DEFAULT 'user';
