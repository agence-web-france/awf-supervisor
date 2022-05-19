-- CreateTable
CREATE TABLE "Customer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "email" TEXT,
    "telephone" TEXT,
    "url" TEXT,
    "adminUrl" TEXT,
    "credentialsUrl" TEXT,
    "deployUrl" TEXT,
    "status" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_slug_key" ON "Customer"("slug");
