-- AlterTable
ALTER TABLE `tache` ADD COLUMN `assigne` VARCHAR(60) NULL,
    ADD COLUMN `echeance` DATE NULL,
    ADD COLUMN `priorite` VARCHAR(10) NULL,
    ADD COLUMN `quantite` INTEGER NULL,
    ADD COLUMN `reference` VARCHAR(30) NULL;
