-- CreateTable
CREATE TABLE `CablePlan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `plan_id` INTEGER NOT NULL,
    `plan_name` VARCHAR(191) NOT NULL,
    `amount` INTEGER NOT NULL,
    `cableProviderId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CableProvider` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `CableProvider_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CablePlan` ADD CONSTRAINT `CablePlan_cableProviderId_fkey` FOREIGN KEY (`cableProviderId`) REFERENCES `CableProvider`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
