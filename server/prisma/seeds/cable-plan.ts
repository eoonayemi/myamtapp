import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create providers
  const anwardataco = await prisma.provider.upsert({
    where: { name: "anwardataco" },
    update: {},
    create: {
      name: "anwardataco",
    },
  });

  const alrahuzdata = await prisma.provider.upsert({
    where: { name: "alrahuzdata" },
    update: {},
    create: {
      name: "alrahuzdata",
    },
  });

  const dataplus = await prisma.provider.upsert({
    where: { name: "dataplus" },
    update: {},
    create: {
      name: "dataplus",
    },
  });

  // Add cable plans for anwardataco
  await prisma.cablePlan.createMany({
    data: [
      { planId: 18, planName: "GOtv Smallie", amount: 1575 },
      { planId: 34, planName: "GOtv Smallie - Monthly", amount: 1575 },
      { planId: 16, planName: "GOtv Jinja", amount: 3300 },
      { planId: 17, planName: "GOtv Jolli", amount: 4850 },
      { planId: 2, planName: "GOtv Max", amount: 7200 },
      { planId: 35, planName: "GOtv Smallie - Quarterly", amount: 4172 },
      { planId: 36, planName: "GOtv Smallie - Yearly", amount: 12300 },
      { planId: 47, planName: "GOtv Supa monthly", amount: 15700 },
      { planId: 21, planName: "DStv Great Wall Standalone", amount: 1725 },
      { planId: 20, planName: "DStv Padi", amount: 3600 },
      { planId: 6, planName: "DStv Yanga", amount: 5100 },
      { planId: 26, planName: "DStv Confam + ExtraView", amount: 8200 },
      { planId: 27, planName: "DStv Yanga + ExtraView", amount: 8200 },
      { planId: 19, planName: "DStv Confam", amount: 9300 },
      { planId: 23, planName: "DStv Asia", amount: 7100 },
      { planId: 7, planName: "DStv Compact", amount: 15700 },
      { planId: 29, planName: "DStv Compact + Extra View", amount: 16500 },
      {
        planId: 31,
        planName: "DStv Compact Plus - Extra View",
        amount: 17150,
      },
      { planId: 8, planName: "DStv Compact Plus", amount: 25000 },
      { planId: 30, planName: "DStv Premium + Extra View", amount: 33500 },
      { planId: 25, planName: "DStv Premium Asia", amount: 33000 },
      { planId: 9, planName: "DStv Premium", amount: 37000 },
      { planId: 24, planName: "DStv Premium French", amount: 45600 },
      { planId: 5, planName: "DStv Asian Bouqet", amount: 24250 },
      { planId: 32, planName: "DStv HDPVR Access Service", amount: 2900 },
      { planId: 28, planName: "DStv Padi + ExtraView", amount: 6950 },
      {
        planId: 37,
        planName: "Startime Nova - 600 Naira - 1 Week",
        amount: 600,
      },
      { planId: 10, planName: "Startime NOVA", amount: 1700 },
      {
        planId: 14,
        planName: "Startime Nova - 1700Naira - 1 Month",
        amount: 1700,
      },
      {
        planId: 40,
        planName: "Startime Classic - 1700Naira - 1 Week",
        amount: 1700,
      },
      {
        planId: 12,
        planName: "Startime Basic - 3300Naira - 1 Month",
        amount: 3300,
      },
      {
        planId: 38,
        planName: "Startime Basic - 1100 Naira - 1 Week",
        amount: 1100,
      },
      {
        planId: 39,
        planName: "Startime Smart - 1300Naira - 1 Week",
        amount: 1300,
      },
      {
        planId: 13,
        planName: "Startime Smart - 3800Naira - 1 Month",
        amount: 3800,
      },
      { planId: 33, planName: "Startime ExtraView Access", amount: 4000 },
      {
        planId: 11,
        planName: "Startime Classic - 5000Naira - 1 Month",
        amount: 5000,
      },
      {
        planId: 15,
        planName: "Startime Super - 7000 Naira - 1 Month",
        amount: 7000,
      },
      {
        planId: 41,
        planName: "Startime Super - 2700Naira - 1 Week",
        amount: 2700,
      },
    ].map((plan) => ({ ...plan, providerId: anwardataco.id })),
  });

  // Add cable plans for alrahuzdata
  await prisma.cablePlan.createMany({
    data: [
      { planId: 34, planName: "GOtv Smallie - Monthly", amount: 1575 },
      { planId: 37, planName: "Nova - 600 Naira - 1 Week", amount: 600 },
      { planId: 38, planName: "Basic - 1250 Naira - 1 Week", amount: 1250 },
      { planId: 39, planName: "Smart - 1550 Naira - 1 Week", amount: 1550 },
      { planId: 16, planName: "GOtv Jinja", amount: 3300 },
      { planId: 17, planName: "GOtv Jolli", amount: 4850 },
      { planId: 2, planName: "GOtv Max", amount: 7200 },
      { planId: 47, planName: "GOTv SUPA", amount: 9600 },
      { planId: 49, planName: "GOTv SUPA PLUS", amount: 15700 },
      { planId: 35, planName: "GOtv Smallie - Quarterly", amount: 4175 },
      { planId: 36, planName: "GOtv Smallie - Yearly", amount: 12300 },
      { planId: 6, planName: "DStv Yanga", amount: 5100 },
      { planId: 20, planName: "DStv Padi", amount: 2950 },
      { planId: 19, planName: "DStv Confam", amount: 9300 },
      { planId: 26, planName: "DStv Confam + ExtraView", amount: 14300 },
      { planId: 27, planName: "DStv Yanga + ExtraView", amount: 10100 },
      { planId: 28, planName: "DStv Padi + ExtraView", amount: 8600 },
      { planId: 7, planName: "DStv Compact", amount: 15700 },
      { planId: 29, planName: "DStv Compact + Extra View", amount: 20700 },
      { planId: 8, planName: "DStv Compact Plus", amount: 25000 },
      {
        planId: 31,
        planName: "DStv Compact Plus - Extra View",
        amount: 37400,
      },
      { planId: 9, planName: "DStv Premium", amount: 37000 },
      { planId: 30, planName: "DStv Premium + Extra View", amount: 42000 },
      { planId: 23, planName: "DStv Asia", amount: 12400 },
      { planId: 24, planName: "DStv Premium French", amount: 57500 },
      { planId: 25, planName: "DStv Premium Asia", amount: 42000 },
      { planId: 33, planName: "DStv ExtraView Access", amount: 5000 },
      {
        planId: 11,
        planName: "Startime Classic - 5500 Naira - 1 Mont",
        amount: 5500,
      },
      {
        planId: 12,
        planName: "Startime Basic - 3700 Naira - 1 Month",
        amount: 3700,
      },
      {
        planId: 13,
        planName: "Startime Smart - 4700 Naira - 1 Month",
        amount: 4700,
      },
      {
        planId: 14,
        planName: "Startime Nova - 1900 Naira - 1 Month",
        amount: 1900,
      },
      {
        planId: 15,
        planName: "Startime Super - 9000 Naira - 1 Month",
        amount: 9000,
      },
      {
        planId: 48,
        planName: "Startime Super - 9000 Naira - 1 Month",
        amount: 9000,
      },
      {
        planId: 40,
        planName: "Startime Classic - 1900 Naira - 1 Week",
        amount: 1900,
      },
      {
        planId: 41,
        planName: "Startime Super - 3000 Naira - 1 Week",
        amount: 3000,
      },
    ].map((plan) => ({ ...plan, providerId: alrahuzdata.id })),
  });

  // Add cable plans for dataplus
  await prisma.cablePlan.createMany({
    data: [
      { planId: 34, planName: "GOtv Smallie - Monthly", amount: 1575 },
      { planId: 35, planName: "GOtv Smallie - Quarterly", amount: 4175 },
      { planId: 36, planName: "GOtv Smallie - Yearly", amount: 12300 },
      { planId: 16, planName: "GOtv Jinja", amount: 3300 },
      { planId: 17, planName: "GOtv Jolli", amount: 4850 },
      { planId: 2, planName: "GOtv Max", amount: 7200 },
      { planId: 48, planName: "GOtv Supa", amount: 9600 },
      { planId: 20, planName: "DStv Padi", amount: 3600 },
      { planId: 6, planName: "DStv Yanga", amount: 5100 },
      { planId: 19, planName: "DStv Confam", amount: 9300 },
      { planId: 47, planName: "DStv Confam + ExtraView", amount: 14300 },
      { planId: 7, planName: "DStv Compact", amount: 15700 },
      { planId: 29, planName: "DStv Compact + Extra View", amount: 20700 },
      {
        planId: 31,
        planName: "DStv Compact Plus + Extra View",
        amount: 30000,
      },
      { planId: 8, planName: "DStv Compact Plus", amount: 25000 },
      { planId: 9, planName: "DStv Premium", amount: 37000 },
      { planId: 30, planName: "DStv Premium + Extra View", amount: 42000 },
      {
        planId: 11,
        planName: "Startime Classic - 5000 Naira - 1 Month",
        amount: 5000,
      },
      {
        planId: 12,
        planName: "Startime Basic - 3300 Naira - 1 Month",
        amount: 3300,
      },
      {
        planId: 13,
        planName: "Startime Smart - 4200 Naira - 1 Month",
        amount: 4200,
      },
      {
        planId: 14,
        planName: "Startime Nova - 1700 Naira - 1 Month",
        amount: 1700,
      },
      {
        planId: 15,
        planName: "Startime Super - 8200 Naira - 1 Month",
        amount: 8200,
      },
      {
        planId: 37,
        planName: "Startime Nova - 500 Naira - 1 Week (antenna)",
        amount: 500,
      },
      {
        planId: 49,
        planName: "Startime Nova - 600 Naira - 1 Week (Dish)",
        amount: 600,
      },
      {
        planId: 38,
        planName: "Startime Basic - 1400 Naira - 1 Week",
        amount: 1400,
      },
      {
        planId: 39,
        planName: "Startime Smart -1400 Naira - 1 Week",
        amount: 1400,
      },
      {
        planId: 40,
        planName: "Startime Classic - 2100 Naira - 1 Week",
        amount: 2100,
      },
      {
        planId: 41,
        planName: "Startime Super - 2800 Naira - 1 Week",
        amount: 2800,
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
