/*
  Warnings:

  - You are about to drop the column `cableProviderId` on the `CablePlan` table. All the data in the column will be lost.
  - You are about to drop the column `plan_id` on the `CablePlan` table. All the data in the column will be lost.
  - You are about to drop the column `plan_name` on the `CablePlan` table. All the data in the column will be lost.
  - You are about to drop the column `dataProviderId` on the `DataPlan` table. All the data in the column will be lost.
  - You are about to drop the column `data_id` on the `DataPlan` table. All the data in the column will be lost.
  - You are about to drop the column `plan_type` on the `DataPlan` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNo` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `CableProvider` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DataProvider` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `planId` to the `CablePlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `planName` to the `CablePlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `providerId` to the `CablePlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataId` to the `DataPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `planType` to the `DataPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `providerId` to the `DataPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `CablePlan` DROP FOREIGN KEY `CablePlan_cableProviderId_fkey`;

-- DropForeignKey
ALTER TABLE `DataPlan` DROP FOREIGN KEY `DataPlan_dataProviderId_fkey`;

-- DropIndex
DROP INDEX `CablePlan_cableProviderId_fkey` ON `CablePlan`;

-- DropIndex
DROP INDEX `DataPlan_dataProviderId_fkey` ON `DataPlan`;

-- AlterTable
ALTER TABLE `CablePlan` DROP COLUMN `cableProviderId`,
    DROP COLUMN `plan_id`,
    DROP COLUMN `plan_name`,
    ADD COLUMN `planId` INTEGER NOT NULL,
    ADD COLUMN `planName` VARCHAR(191) NOT NULL,
    ADD COLUMN `providerId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `DataPlan` DROP COLUMN `dataProviderId`,
    DROP COLUMN `data_id`,
    DROP COLUMN `plan_type`,
    ADD COLUMN `dataId` INTEGER NOT NULL,
    ADD COLUMN `planType` VARCHAR(191) NOT NULL,
    ADD COLUMN `providerId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `phoneNo`,
    ADD COLUMN `phoneNumber` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `CableProvider`;

-- DropTable
DROP TABLE `DataProvider`;

-- CreateTable
CREATE TABLE `Provider` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Provider_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transaction` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `amount` DOUBLE NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `providerId` INTEGER NOT NULL,
    `dataPlanId` INTEGER NULL,
    `cablePlanId` INTEGER NULL,
    `ninVerificationId` INTEGER NULL,
    `bvnVerificationId` INTEGER NULL,
    `mobileNumber` VARCHAR(191) NULL,
    `iucNumber` VARCHAR(191) NULL,
    `meterNumber` VARCHAR(191) NULL,
    `customerPhoneNumber` VARCHAR(191) NULL,
    `nin` VARCHAR(191) NULL,
    `bvn` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NINVerification` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `slipLayout` VARCHAR(191) NOT NULL,
    `verifyWith` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BVNVerification` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `price` INTEGER NOT NULL,
    `detailsType` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DataPlan` ADD CONSTRAINT `DataPlan_providerId_fkey` FOREIGN KEY (`providerId`) REFERENCES `Provider`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CablePlan` ADD CONSTRAINT `CablePlan_providerId_fkey` FOREIGN KEY (`providerId`) REFERENCES `Provider`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_providerId_fkey` FOREIGN KEY (`providerId`) REFERENCES `Provider`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_dataPlanId_fkey` FOREIGN KEY (`dataPlanId`) REFERENCES `DataPlan`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_cablePlanId_fkey` FOREIGN KEY (`cablePlanId`) REFERENCES `CablePlan`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_ninVerificationId_fkey` FOREIGN KEY (`ninVerificationId`) REFERENCES `NINVerification`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_bvnVerificationId_fkey` FOREIGN KEY (`bvnVerificationId`) REFERENCES `BVNVerification`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
