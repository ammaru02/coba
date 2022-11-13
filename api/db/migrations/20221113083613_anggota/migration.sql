-- CreateTable
CREATE TABLE "Anggota" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "noReg" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "jk" TEXT NOT NULL,
    "alamat" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Anggota_noReg_key" ON "Anggota"("noReg");
