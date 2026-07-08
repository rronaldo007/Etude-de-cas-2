-- CreateTable
CREATE TABLE `colonne` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `intitule` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tache` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(100) NOT NULL,
    `couleur` CHAR(6) NOT NULL,
    `colonneId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tache` ADD CONSTRAINT `tache_colonneId_fkey` FOREIGN KEY (`colonneId`) REFERENCES `colonne`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
