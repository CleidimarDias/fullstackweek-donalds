import { PrismaClient } from "@prisma/client";

declare global {
  var cachePrisma: PrismaClient;
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachePrisma) {
    global.cachePrisma = new PrismaClient();
  }
  prisma = global.cachePrisma;
}

// usado para chamar o banco de dados

export const db = prisma;
