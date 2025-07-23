import { PrismaClient } from "@prisma/client";
import { config } from "dotenv";

config(); // Load environment variables

const prisma = new PrismaClient();

async function main() {
  // Create providers
  const anwardataco = await prisma.provider.findUnique({
    where: { name: "anwardataco" },
  });

  const alrahuzdata = await prisma.provider.findUnique({
    where: { name: "alrahuzdata" },
  });

  const dataplus = await prisma.provider.findUnique({
    where: { name: "dataplus" },
  });

  const ameentaccetelecom = await prisma.provider.findUnique({
    where: { name: "ameentaccetelecom" },
  });

  if (!anwardataco || !alrahuzdata || !dataplus || !ameentaccetelecom) {
    throw new Error("One or more providers not found");
  }

  // Add cable plans for ameentaccetelecom
  await prisma.cablePlan.createMany({
    data: [
      {
        planId: 17,
        name: "GOtv Supa 9700 monthly",
        amount: 9700,
        decoder: "GOTV",
      },
      {
        planId: 18,
        name: "GOtv Smallie - Yearly",
        amount: 12400,
        decoder: "GOTV",
      },
      {
        planId: 19,
        name: "GOtv Smallie - Quarterly",
        amount: 4200,
        decoder: "GOTV",
      },
      {
        planId: 20,
        name: "GOtv Smallie - Monthly",
        amount: 1600,
        decoder: "GOTV",
      },
      { planId: 21, name: "GOtv Jolli", amount: 4900, decoder: "GOTV" },
      { planId: 22, name: "GOtv Jinja", amount: 3310, decoder: "GOTV" },
      { planId: 23, name: "GOtv Max", amount: 7210, decoder: "GOTV" },
      {
        planId: 24,
        name: "ExtraView Access",
        amount: 4000,
        decoder: "DSTV",
      },
      {
        planId: 26,
        name: "DStv Compact Plus + Extra View",
        amount: 30050,
        decoder: "DSTV",
      },
      {
        planId: 27,
        name: "DStv Premium + Extra View",
        amount: 42050,
        decoder: "DSTV",
      },
      {
        planId: 28,
        name: "DStv Compact + Extra View",
        amount: 20750,
        decoder: "DSTV",
      },
      {
        planId: 29,
        name: "DStv Padi + ExtraView",
        amount: 6950,
        decoder: "DSTV",
      },
      {
        planId: 30,
        name: "DStv Yanga + ExtraView",
        amount: 8200,
        decoder: "DSTV",
      },
      {
        planId: 31,
        name: "DStv Confam + ExtraView",
        amount: 14350,
        decoder: "DSTV",
      },
      {
        planId: 32,
        name: "DStv Premium Asia",
        amount: 42050,
        decoder: "DSTV",
      },
      {
        planId: 33,
        name: "DStv Premium French",
        amount: 57550,
        decoder: "DSTV",
      },
      { planId: 34, name: "DStv Asia", amount: 12450, decoder: "DSTV" },
      { planId: 35, name: "DStv Padi", amount: 3650, decoder: "DSTV" },
      { planId: 36, name: "DStv Confam", amount: 9350, decoder: "DSTV" },
      { planId: 37, name: "DStv Premium", amount: 37050, decoder: "DSTV" },
      {
        planId: 38,
        name: "DStv Compact Plus",
        amount: 25050,
        decoder: "DSTV",
      },
      { planId: 39, name: "DStv Compact", amount: 15750, decoder: "DSTV" },
      { planId: 40, name: "DStv Yanga", amount: 5150, decoder: "DSTV" },
      {
        planId: 7,
        name: "Super - 3100 Naira - 1 Week",
        amount: 3100,
        decoder: "STARTIMES",
      },
      {
        planId: 8,
        name: "Classic - 2000 Naira - 1 Week",
        amount: 2000,
        decoder: "STARTIMES",
      },
      {
        planId: 9,
        name: "Smart - 1600 Naira - 1 Week",
        amount: 1600,
        decoder: "STARTIMES",
      },
      {
        planId: 10,
        name: "Basic - 1300 Naira - 1 Week",
        amount: 1300,
        decoder: "STARTIMES",
      },
      {
        planId: 11,
        name: "Nova - 700 Naira - 1 Week",
        amount: 700,
        decoder: "STARTIMES",
      },
      {
        planId: 12,
        name: "Super - 9,100 Naira - 1 Month",
        amount: 9100,
        decoder: "STARTIMES",
      },
      {
        planId: 14,
        name: "Smart - 4,800 Naira - 1 Month",
        amount: 4800,
        decoder: "STARTIMES",
      },
      {
        planId: 15,
        name: "Basic - 3800 Naira - 1 Month",
        amount: 3800,
        decoder: "STARTIMES",
      },
      {
        planId: 16,
        name: "Classic - 5600 Naira - 1 Month",
        amount: 5600,
        decoder: "STARTIMES",
      },
      {
        planId: 41,
        name: "Nova 1700 monthly",
        amount: 1700,
        decoder: "STARTIMES",
      },
      {
        planId: 42,
        name: "Nova (Antenna) - 1,900 Naira - 1 Month",
        amount: 1900,
        decoder: "STARTIMES",
      },
      {
        planId: 43,
        name: "Super (Antenna) - 3,000 Naira - 1 Week",
        amount: 3100,
        decoder: "STARTIMES",
      },
    ].map((plan) => ({ ...plan, providerId: ameentaccetelecom.id })),
  });

  // Add cable plans for anwardataco
  await prisma.cablePlan.createMany({
    data: [
      { planId: 2, name: "GOtv Max", amount: 8500, decoder: "GOTV" },
      { planId: 5, name: "Asian Bouqet", amount: 24250, decoder: "DSTV" },
      { planId: 6, name: "DStv Yanga", amount: 6000, decoder: "DSTV" },
      { planId: 7, name: "DStv Compact", amount: 19000, decoder: "DSTV" },
      {
        planId: 8,
        name: "DStv Compact Plus",
        amount: 30000,
        decoder: "DSTV",
      },
      { planId: 9, name: "DStv Premium", amount: 44000, decoder: "DSTV" },
      { planId: 10, name: "NOVA", amount: 1700, decoder: "STARTIMES" },
      {
        planId: 11,
        name: "Classic - 5000Naira - 1 Month",
        amount: 5500,
        decoder: "STARTIMES",
      },
      {
        planId: 12,
        name: "Basic - 3300Naira - 1 Month",
        amount: 3700,
        decoder: "STARTIMES",
      },
      {
        planId: 13,
        name: "Smart - 3800Naira - 1 Month",
        amount: 4700,
        decoder: "STARTIMES",
      },
      {
        planId: 14,
        name: "Nova - 1700Naira - 1 Month",
        amount: 1900,
        decoder: "STARTIMES",
      },
      {
        planId: 15,
        name: "Super - 7000 Naira - 1 Month",
        amount: 9000,
        decoder: "STARTIMES",
      },
      { planId: 16, name: "GOtv Jinja", amount: 3900, decoder: "GOTV" },
      { planId: 17, name: "GOtv Jolli", amount: 5800, decoder: "GOTV" },
      { planId: 18, name: "GOtv Smallie", amount: 1575, decoder: "GOTV" },
      { planId: 19, name: "DStv Confam", amount: 11000, decoder: "DSTV" },
      { planId: 20, name: "DStv Padi", amount: 4400, decoder: "DSTV" },
      {
        planId: 21,
        name: "DStv Great Wall Standalone",
        amount: 1725,
        decoder: "DSTV",
      },
      { planId: 23, name: "DStv Asia", amount: 12400, decoder: "DSTV" },
      {
        planId: 24,
        name: "DStv Premium French",
        amount: 57000,
        decoder: "DSTV",
      },
      {
        planId: 25,
        name: "DStv Premium Asia",
        amount: 42000,
        decoder: "DSTV",
      },
      {
        planId: 26,
        name: "DStv Confam + ExtraView",
        amount: 14400,
        decoder: "DSTV",
      },
      {
        planId: 27,
        name: "DStv Yanga + ExtraView",
        amount: 10100,
        decoder: "DSTV",
      },
      {
        planId: 28,
        name: "DStv Padi + ExtraView",
        amount: 6950,
        decoder: "DSTV",
      },
      {
        planId: 29,
        name: "DStv Compact + Extra View",
        amount: 20700,
        decoder: "DSTV",
      },
      {
        planId: 30,
        name: "DStv Premium + Extra View",
        amount: 42000,
        decoder: "DSTV",
      },
      {
        planId: 31,
        name: "DStv Compact Plus - Extra View",
        amount: 37400,
        decoder: "DSTV",
      },
      {
        planId: 32,
        name: "DStv HDPVR Access Service",
        amount: 2900,
        decoder: "DSTV",
      },
      {
        planId: 33,
        name: "ExtraView Access",
        amount: 5000,
        decoder: "DSTV",
      },
      {
        planId: 34,
        name: "GOtv Smallie - Monthly",
        amount: 1900,
        decoder: "GOTV",
      },
      {
        planId: 35,
        name: "GOtv Smallie - Quarterly",
        amount: 4175,
        decoder: "GOTV",
      },
      {
        planId: 36,
        name: "GOtv Smallie - Yearly",
        amount: 12300,
        decoder: "GOTV",
      },
      {
        planId: 37,
        name: "Nova - 600 Naira - 1 Week",
        amount: 600,
        decoder: "STARTIMES",
      },
      {
        planId: 38,
        name: "Basic - 1100 Naira - 1 Week",
        amount: 1250,
        decoder: "STARTIMES",
      },
      {
        planId: 39,
        name: "Smart - 1300Naira - 1 Week",
        amount: 1550,
        decoder: "STARTIMES",
      },
      {
        planId: 40,
        name: "Classic - 1700Naira - 1 Week",
        amount: 1900,
        decoder: "STARTIMES",
      },
      {
        planId: 41,
        name: "Super - 2700Naira - 1 Week",
        amount: 3000,
        decoder: "STARTIMES",
      },
      { planId: 47, name: "Supa monthly", amount: 15700, decoder: "GOTV" },
    ].map((plan) => ({ ...plan, providerId: anwardataco.id })),
  });

  // Add cable plans for alrahuzdata
  await prisma.cablePlan.createMany({
    data: [
      { planId: 2, name: "GOtv Max", amount: 8500, decoder: "GOTV" },
      { planId: 6, name: "DStv Yanga", amount: 7750, decoder: "DSTV" },
      { planId: 7, name: "DStv Compact", amount: 20750, decoder: "DSTV" },
      {
        planId: 8,
        name: "DStv Compact Plus",
        amount: 31750,
        decoder: "DSTV",
      },
      { planId: 9, name: "DStv Premium", amount: 44500, decoder: "DSTV" },
      {
        planId: 11,
        name: "Classic - 5500 Naira - 1 Mont",
        amount: 5500,
        decoder: "STARTIMES",
      },
      {
        planId: 12,
        name: "Basic - 3700 Naira - 1 Month",
        amount: 3700,
        decoder: "STARTIMES",
      },
      {
        planId: 13,
        name: "Smart - 4700 Naira - 1 Month",
        amount: 4700,
        decoder: "STARTIMES",
      },
      {
        planId: 14,
        name: "Nova - 1900 Naira - 1 Month",
        amount: 1900,
        decoder: "STARTIMES",
      },
      {
        planId: 15,
        name: "Super - 9000 Naira - 1 Month",
        amount: 9000,
        decoder: "STARTIMES",
      },
      { planId: 16, name: "GOtv Jinja", amount: 3900, decoder: "GOTV" },
      { planId: 17, name: "GOtv Jolli", amount: 5800, decoder: "GOTV" },
      { planId: 19, name: "DStv Confam", amount: 12750, decoder: "DSTV" },
      { planId: 20, name: "DStv Padi", amount: 7900, decoder: "DSTV" },
      { planId: 23, name: "DStv Asia", amount: 14900, decoder: "DSTV" },
      {
        planId: 24,
        name: "DStv Premium French",
        amount: 69000,
        decoder: "DSTV",
      },
      {
        planId: 25,
        name: "DStv Premium Asia",
        amount: 50500,
        decoder: "DSTV",
      },
      {
        planId: 26,
        name: "DStv Confam + ExtraView",
        amount: 17000,
        decoder: "DSTV",
      },
      {
        planId: 27,
        name: "DStv Yanga + ExtraView",
        amount: 12000,
        decoder: "DSTV",
      },
      {
        planId: 28,
        name: "DStv Padi + ExtraView",
        amount: 9750,
        decoder: "DSTV",
      },
      {
        planId: 29,
        name: "DStv Compact + Extra View",
        amount: 25000,
        decoder: "DSTV",
      },
      {
        planId: 30,
        name: "DStv Premium + Extra View",
        amount: 42000,
        decoder: "DSTV",
      },
      {
        planId: 31,
        name: "DStv Compact Plus - Extra View",
        amount: 42000,
        decoder: "DSTV",
      },
      {
        planId: 33,
        name: "ExtraView Access",
        amount: 6000,
        decoder: "DSTV",
      },
      {
        planId: 34,
        name: "GOtv Smallie - Monthly",
        amount: 1900,
        decoder: "GOTV",
      },
      {
        planId: 35,
        name: "GOtv Smallie - Quarterly",
        amount: 4175,
        decoder: "GOTV",
      },
      {
        planId: 36,
        name: "GOtv Smallie - Yearly",
        amount: 12300,
        decoder: "GOTV",
      },
      {
        planId: 37,
        name: "Nova - 600 Naira - 1 Week",
        amount: 600,
        decoder: "STARTIMES",
      },
      {
        planId: 38,
        name: "Basic - 1250 Naira - 1 Week",
        amount: 1250,
        decoder: "STARTIMES",
      },
      {
        planId: 39,
        name: "Smart - 1550 Naira - 1 Week",
        amount: 1550,
        decoder: "STARTIMES",
      },
      {
        planId: 40,
        name: "Classic - 1900 Naira - 1 Week",
        amount: 1900,
        decoder: "STARTIMES",
      },
      {
        planId: 41,
        name: "Super - 3000 Naira - 1 Week",
        amount: 3000,
        decoder: "STARTIMES",
      },
      { planId: 47, name: "GOTv SUPA", amount: 11400, decoder: "GOTV" },
      {
        planId: 48,
        name: "Super - 9000 Naira - 1 Month",
        amount: 9000,
        decoder: "STARTIMES",
      },
      {
        planId: 49,
        name: "GOTv SUPA PLUS",
        amount: 16800,
        decoder: "GOTV",
      },
    ].map((plan) => ({ ...plan, providerId: alrahuzdata.id })),
  });

  // Add cable plans for dataplus
  await prisma.cablePlan.createMany({
    data: [
      { planId: 2, name: "GOtv Max", amount: 8500, decoder: "GOTV" },
      { planId: 6, name: "DStv Yanga", amount: 6000, decoder: "DSTV" },
      { planId: 7, name: "DStv Compact", amount: 19000, decoder: "DSTV" },
      {
        planId: 8,
        name: "DStv Compact Plus",
        amount: 30000,
        decoder: "DSTV",
      },
      { planId: 9, name: "DStv Premium", amount: 44500, decoder: "DSTV" },
      {
        planId: 11,
        name: "Classic - 6000 Naira - 1 Month",
        amount: 6000,
        decoder: "STARTIMES",
      },
      {
        planId: 12,
        name: "Basic - 4000 Naira - 1 Month",
        amount: 4000,
        decoder: "STARTIMES",
      },
      {
        planId: 13,
        name: "Smart - 5100 Naira - 1 Month",
        amount: 5100,
        decoder: "STARTIMES",
      },
      {
        planId: 14,
        name: "Nova - 2100 Naira - 1 Month",
        amount: 2100,
        decoder: "STARTIMES",
      },
      {
        planId: 15,
        name: "Super - 9800 Naira - 1 Month",
        amount: 9800,
        decoder: "STARTIMES",
      },
      { planId: 16, name: "GOtv Jinja", amount: 3900, decoder: "GOTV" },
      { planId: 17, name: "GOtv Jolli", amount: 5800, decoder: "GOTV" },
      { planId: 19, name: "DStv Confam", amount: 11000, decoder: "DSTV" },
      { planId: 20, name: "DStv Padi", amount: 4400, decoder: "DSTV" },
      {
        planId: 29,
        name: "DStv Compact + Extra View",
        amount: 25000,
        decoder: "DSTV",
      },
      {
        planId: 30,
        name: "DStv Premium + Extra View",
        amount: 42000,
        decoder: "DSTV",
      },
      {
        planId: 31,
        name: "DStv Compact Plus + Extra View",
        amount: 30000,
        decoder: "DSTV",
      },
      {
        planId: 34,
        name: "GOtv Smallie - Monthly",
        amount: 1900,
        decoder: "GOTV",
      },
      {
        planId: 35,
        name: "GOtv Smallie - Quarterly",
        amount: 5100,
        decoder: "GOTV",
      },
      {
        planId: 36,
        name: "GOtv Smallie - Yearly",
        amount: 15000,
        decoder: "GOTV",
      },
      {
        planId: 37,
        name: "Nova - 700 Naira - 1 Week (antenna)",
        amount: 700,
        decoder: "STARTIMES",
      },
      {
        planId: 38,
        name: "Basic - 1400 Naira - 1 Week",
        amount: 1400,
        decoder: "STARTIMES",
      },
      {
        planId: 39,
        name: "Smart -1700 Naira - 1 Week",
        amount: 1700,
        decoder: "STARTIMES",
      },
      {
        planId: 40,
        name: "Classic - 2000 Naira - 1 Week",
        amount: 2000,
        decoder: "STARTIMES",
      },
      {
        planId: 41,
        name: "Super - 3300 Naira - 1 Week",
        amount: 3300,
        decoder: "STARTIMES",
      },
      {
        planId: 47,
        name: "DStv Confam + ExtraView",
        amount: 17000,
        decoder: "DSTV",
      },
      { planId: 48, name: "GOtv Supa", amount: 11400, decoder: "GOTV" },
      {
        planId: 49,
        name: "Nova - 700 Naira - 1 Week (Dish)",
        amount: 700,
        decoder: "STARTIMES",
      },
    ].map((plan) => ({ ...plan, providerId: dataplus.id })),
  });
}

main()
  .then(() => console.log("Cable plans seeded successfully"))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
