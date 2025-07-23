// providers.ts
import { PrismaClient } from "@prisma/client";
import { config } from "dotenv";

config(); // Load environment variables

const prisma = new PrismaClient();

async function seedProviders() {
    await prisma.provider.upsert({
      where: { name: "anwardataco" },
      create: { name: "anwardataco" },
      update: {},
    });

    await prisma.provider.upsert({
      where: { name: "alrahuzdata" },
      create: { name: "alrahuzdata" },
      update: {},
    });

    await prisma.provider.upsert({
      where: { name: "dataplus" },
      create: { name: "dataplus" },
      update: {},
    });

    await prisma.provider.upsert({
      where: { name: "ameentaccetelecom" },
      create: { name: "ameentaccetelecom" },
      update: {},
    });
}

seedProviders();
