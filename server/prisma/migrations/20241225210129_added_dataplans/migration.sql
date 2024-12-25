-- CreateTable
CREATE TABLE `DataPlan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data_id` INTEGER NOT NULL,
    `network` VARCHAR(191) NOT NULL,
    `plan_type` VARCHAR(191) NOT NULL,
    `amount` INTEGER NOT NULL,
    `size` VARCHAR(191) NOT NULL,
    `validity` VARCHAR(191) NOT NULL,
    `dataProviderId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DataProvider` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `DataProvider_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DataPlan` ADD CONSTRAINT `DataPlan_dataProviderId_fkey` FOREIGN KEY (`dataProviderId`) REFERENCES `DataProvider`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
