-- CreateTable
CREATE TABLE `Todo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `todo` VARCHAR(191) NOT NULL,
    `status` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
