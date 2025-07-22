import { customFetch } from "../api";
import CustomError from "../classes";
import { networks, vtuAPIs } from "../constants";
import { toJSON } from "../utils";
import { buyDataPops } from "./../types/index";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export const queryDataPlans = async (providerName: string) => {
  try {
    const provider = await prisma.provider.findUnique({
      where: {
        name: providerName,
      },
      include: {
        dataPlans: true,
      },
    });

    if (!provider) {
      console.log(`Provider ${providerName} not found`);
      throw new CustomError(`Provider ${providerName} not found`, 404);
    }
    return provider;
  } catch (error) {
  if (error instanceof CustomError) {
    throw error; // preserve original status/message
  }
  throw new CustomError(
    error instanceof Error ? error.message : String(error),
    500
  );
}
};

export const buyData = async ({
  userId,
  network,
  dataId: plan_id,
  phoneNo: mobile_number,
}: buyDataPops) => {
  try {
    const configuration = await prisma.configuration.findUnique({
      where: {
        key: "provider",
      },
    });
    const resBody = await customFetch("buy-data", "POST", {
      headers: {
        Authorization: `Token ${
          vtuAPIs.find(
            ({ name }) => name == (configuration?.value || "anwardataco")
          )?.authToken
        }`,
        "Content-Type": "application/json",
      },
      body: toJSON({
        network_id: networks.find(({ name }) => name == network)?.id,
        plan_id,
        mobile_number,
        Ported_number: true,
      }),
    });

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { walletBalance: true },
    });

    if ((resBody.Status = "successful")) {
      await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          walletBalance: 345,
        },
      });
    }

    if (!user) {
      throw new Error("User not found");
    }

    // Check if the user has enough balance
    if (user.walletBalance < amount) {
      throw new Error("Insufficient balance");
    }

    // Decrement the wallet balance
    const newBalance = user.walletBalance - amount;

    // Update the wallet balance in the database
    await prisma.user.update({
      where: { id: userId },
      data: { walletBalance: newBalance },
    });

    // const newTransaction = await prisma.transaction.create({
    //   data: {
    //     type: "data-purchase",
    //     status: resBody.Status,
    //     details: {
    //       network: resBody.plan_network,
    //       plan_id: resBody.plan,
    //       amount: resBody.plan_amount,
    //       mobile_number: resBody.mobile_number,
    //     },
    //   },
    // });

    return {
      status: resBody.Status,
      // newTransaction,
    };
  } catch (error) {
    throw new CustomError(
      error instanceof Error ? error.message : String(error),
      500
    );
  }
};
