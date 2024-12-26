const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Create providers
  const anwardataco = await prisma.cableProvider.create({
    data: {
      name: "anwardataco",
    },
  });

  const alrahuzdata = await prisma.cableProvider.create({
    data: {
      name: "alrahuzdata",
    },
  });

  const dataplus = await prisma.cableProvider.create({
    data: {
      name: "dataplus",
    },
  });

  // Add cable plans for anwardataco
  await prisma.cablePlan.createMany({
    data: [
      { plan_id: 18, plan_name: "GOtv Smallie", amount: 1575 },
      { plan_id: 34, plan_name: "GOtv Smallie - Monthly", amount: 1575 },
      { plan_id: 16, plan_name: "GOtv Jinja", amount: 3300 },
      { plan_id: 17, plan_name: "GOtv Jolli", amount: 4850 },
      { plan_id: 2, plan_name: "GOtv Max", amount: 7200 },
      { plan_id: 35, plan_name: "GOtv Smallie - Quarterly", amount: 4172 },
      { plan_id: 36, plan_name: "GOtv Smallie - Yearly", amount: 12300 },
      { plan_id: 47, plan_name: "GOtv Supa monthly", amount: 15700 },
      { plan_id: 21, plan_name: "DStv Great Wall Standalone", amount: 1725 },
      { plan_id: 20, plan_name: "DStv Padi", amount: 3600 },
      { plan_id: 6, plan_name: "DStv Yanga", amount: 5100 },
      { plan_id: 26, plan_name: "DStv Confam + ExtraView", amount: 8200 },
      { plan_id: 27, plan_name: "DStv Yanga + ExtraView", amount: 8200 },
      { plan_id: 19, plan_name: "DStv Confam", amount: 9300 },
      { plan_id: 23, plan_name: "DStv Asia", amount: 7100 },
      { plan_id: 7, plan_name: "DStv Compact", amount: 15700 },
      { plan_id: 29, plan_name: "DStv Compact + Extra View", amount: 16500 },
      {
        plan_id: 31,
        plan_name: "DStv Compact Plus - Extra View",
        amount: 17150,
      },
      { plan_id: 8, plan_name: "DStv Compact Plus", amount: 25000 },
      { plan_id: 30, plan_name: "DStv Premium + Extra View", amount: 33500 },
      { plan_id: 25, plan_name: "DStv Premium Asia", amount: 33000 },
      { plan_id: 9, plan_name: "DStv Premium", amount: 37000 },
      { plan_id: 24, plan_name: "DStv Premium French", amount: 45600 },
      { plan_id: 5, plan_name: "DStv Asian Bouqet", amount: 24250 },
      { plan_id: 32, plan_name: "DStv HDPVR Access Service", amount: 2900 },
      { plan_id: 28, plan_name: "DStv Padi + ExtraView", amount: 6950 },
      {
        plan_id: 37,
        plan_name: "Startime Nova - 600 Naira - 1 Week",
        amount: 600,
      },
      { plan_id: 10, plan_name: "Startime NOVA", amount: 1700 },
      {
        plan_id: 14,
        plan_name: "Startime Nova - 1700Naira - 1 Month",
        amount: 1700,
      },
      {
        plan_id: 40,
        plan_name: "Startime Classic - 1700Naira - 1 Week",
        amount: 1700,
      },
      {
        plan_id: 12,
        plan_name: "Startime Basic - 3300Naira - 1 Month",
        amount: 3300,
      },
      {
        plan_id: 38,
        plan_name: "Startime Basic - 1100 Naira - 1 Week",
        amount: 1100,
      },
      {
        plan_id: 39,
        plan_name: "Startime Smart - 1300Naira - 1 Week",
        amount: 1300,
      },
      {
        plan_id: 13,
        plan_name: "Startime Smart - 3800Naira - 1 Month",
        amount: 3800,
      },
      { plan_id: 33, plan_name: "Startime ExtraView Access", amount: 4000 },
      {
        plan_id: 11,
        plan_name: "Startime Classic - 5000Naira - 1 Month",
        amount: 5000,
      },
      {
        plan_id: 15,
        plan_name: "Startime Super - 7000 Naira - 1 Month",
        amount: 7000,
      },
      {
        plan_id: 41,
        plan_name: "Startime Super - 2700Naira - 1 Week",
        amount: 2700,
      },
    ].map((plan) => ({ ...plan, cableProviderId: anwardataco.id })),
  });

  // Add cable plans for alrahuzdata
  await prisma.cablePlan.createMany({
    data: [
      { plan_id: 34, plan_name: "GOtv Smallie - Monthly", amount: 1575 },
      { plan_id: 37, plan_name: "Nova - 600 Naira - 1 Week", amount: 600 },
      { plan_id: 38, plan_name: "Basic - 1250 Naira - 1 Week", amount: 1250 },
      { plan_id: 39, plan_name: "Smart - 1550 Naira - 1 Week", amount: 1550 },
      { plan_id: 16, plan_name: "GOtv Jinja", amount: 3300 },
      { plan_id: 17, plan_name: "GOtv Jolli", amount: 4850 },
      { plan_id: 2, plan_name: "GOtv Max", amount: 7200 },
      { plan_id: 47, plan_name: "GOTv SUPA", amount: 9600 },
      { plan_id: 49, plan_name: "GOTv SUPA PLUS", amount: 15700 },
      { plan_id: 35, plan_name: "GOtv Smallie - Quarterly", amount: 4175 },
      { plan_id: 36, plan_name: "GOtv Smallie - Yearly", amount: 12300 },
      { plan_id: 6, plan_name: "DStv Yanga", amount: 5100 },
      { plan_id: 20, plan_name: "DStv Padi", amount: 2950 },
      { plan_id: 19, plan_name: "DStv Confam", amount: 9300 },
      { plan_id: 26, plan_name: "DStv Confam + ExtraView", amount: 14300 },
      { plan_id: 27, plan_name: "DStv Yanga + ExtraView", amount: 10100 },
      { plan_id: 28, plan_name: "DStv Padi + ExtraView", amount: 8600 },
      { plan_id: 7, plan_name: "DStv Compact", amount: 15700 },
      { plan_id: 29, plan_name: "DStv Compact + Extra View", amount: 20700 },
      { plan_id: 8, plan_name: "DStv Compact Plus", amount: 25000 },
      {
        plan_id: 31,
        plan_name: "DStv Compact Plus - Extra View",
        amount: 37400,
      },
      { plan_id: 9, plan_name: "DStv Premium", amount: 37000 },
      { plan_id: 30, plan_name: "DStv Premium + Extra View", amount: 42000 },
      { plan_id: 23, plan_name: "DStv Asia", amount: 12400 },
      { plan_id: 24, plan_name: "DStv Premium French", amount: 57500 },
      { plan_id: 25, plan_name: "DStv Premium Asia", amount: 42000 },
      { plan_id: 33, plan_name: "DStv ExtraView Access", amount: 5000 },
      {
        plan_id: 11,
        plan_name: "Startime Classic - 5500 Naira - 1 Mont",
        amount: 5500,
      },
      {
        plan_id: 12,
        plan_name: "Startime Basic - 3700 Naira - 1 Month",
        amount: 3700,
      },
      {
        plan_id: 13,
        plan_name: "Startime Smart - 4700 Naira - 1 Month",
        amount: 4700,
      },
      {
        plan_id: 14,
        plan_name: "Startime Nova - 1900 Naira - 1 Month",
        amount: 1900,
      },
      {
        plan_id: 15,
        plan_name: "Startime Super - 9000 Naira - 1 Month",
        amount: 9000,
      },
      {
        plan_id: 48,
        plan_name: "Startime Super - 9000 Naira - 1 Month",
        amount: 9000,
      },
      {
        plan_id: 40,
        plan_name: "Startime Classic - 1900 Naira - 1 Week",
        amount: 1900,
      },
      {
        plan_id: 41,
        plan_name: "Startime Super - 3000 Naira - 1 Week",
        amount: 3000,
      },
    ].map((plan) => ({ ...plan, cableProviderId: alrahuzdata.id })),
  });

  // Add cable plans for dataplus
  await prisma.cablePlan.createMany({
    data: [
      { plan_id: 34, plan_name: "GOtv Smallie - Monthly", amount: 1575 },
      { plan_id: 35, plan_name: "GOtv Smallie - Quarterly", amount: 4175 },
      { plan_id: 36, plan_name: "GOtv Smallie - Yearly", amount: 12300 },
      { plan_id: 16, plan_name: "GOtv Jinja", amount: 3300 },
      { plan_id: 17, plan_name: "GOtv Jolli", amount: 4850 },
      { plan_id: 2, plan_name: "GOtv Max", amount: 7200 },
      { plan_id: 48, plan_name: "GOtv Supa", amount: 9600 },
      { plan_id: 20, plan_name: "DStv Padi", amount: 3600 },
      { plan_id: 6, plan_name: "DStv Yanga", amount: 5100 },
      { plan_id: 19, plan_name: "DStv Confam", amount: 9300 },
      { plan_id: 47, plan_name: "DStv Confam + ExtraView", amount: 14300 },
      { plan_id: 7, plan_name: "DStv Compact", amount: 15700 },
      { plan_id: 29, plan_name: "DStv Compact + Extra View", amount: 20700 },
      {
        plan_id: 31,
        plan_name: "DStv Compact Plus + Extra View",
        amount: 30000,
      },
      { plan_id: 8, plan_name: "DStv Compact Plus", amount: 25000 },
      { plan_id: 9, plan_name: "DStv Premium", amount: 37000 },
      { plan_id: 30, plan_name: "DStv Premium + Extra View", amount: 42000 },
      {
        plan_id: 11,
        plan_name: "Startime Classic - 5000 Naira - 1 Month",
        amount: 5000,
      },
      {
        plan_id: 12,
        plan_name: "Startime Basic - 3300 Naira - 1 Month",
        amount: 3300,
      },
      {
        plan_id: 13,
        plan_name: "Startime Smart - 4200 Naira - 1 Month",
        amount: 4200,
      },
      {
        plan_id: 14,
        plan_name: "Startime Nova - 1700 Naira - 1 Month",
        amount: 1700,
      },
      {
        plan_id: 15,
        plan_name: "Startime Super - 8200 Naira - 1 Month",
        amount: 8200,
      },
      {
        plan_id: 37,
        plan_name: "Startime Nova - 500 Naira - 1 Week (antenna)",
        amount: 500,
      },
      {
        plan_id: 49,
        plan_name: "Startime Nova - 600 Naira - 1 Week (Dish)",
        amount: 600,
      },
      {
        plan_id: 38,
        plan_name: "Startime Basic - 1400 Naira - 1 Week",
        amount: 1400,
      },
      {
        plan_id: 39,
        plan_name: "Startime Smart -1400 Naira - 1 Week",
        amount: 1400,
      },
      {
        plan_id: 40,
        plan_name: "Startime Classic - 2100 Naira - 1 Week",
        amount: 2100,
      },
      {
        plan_id: 41,
        plan_name: "Startime Super - 2800 Naira - 1 Week",
        amount: 2800,
      },
    ].map((plan) => ({ ...plan, cableProviderId: dataplus.id })),
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
