-- CreateTable
CREATE TABLE "FavoritesOnUsers" (
    "homeId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "FavoritesOnUsers_pkey" PRIMARY KEY ("homeId","userId")
);

-- AddForeignKey
ALTER TABLE "FavoritesOnUsers" ADD CONSTRAINT "FavoritesOnUsers_homeId_fkey" FOREIGN KEY ("homeId") REFERENCES "Home"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoritesOnUsers" ADD CONSTRAINT "FavoritesOnUsers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
