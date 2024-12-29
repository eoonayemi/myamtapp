import { Request, Response } from "express";
import {
  queryDataPlans,
  buyData as purchaseData,
} from "../services/dataService";

export const fetchDataPlans = async (req: Request, res: Response) => {
  try {
    const data = await queryDataPlans("anwardataco");
    res.status(200).json(data);
  } catch (error) {
    if (error instanceof CustomError) {
      res.status(error.statusCode).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

export const buyData = async (req: Request, res: Response) => {
  try {
    const { network, dataId, phoneNo } = req.body;
    const { status, newTransaction } = await purchaseData({
      userId: req.userId,
      network,
      dataId,
      phoneNo,
    });

    if (status == "successful") {
      res.status(200).json({
        newTransaction,
        message: "Data purchased successfully",
      });
    }
  } catch (error) {
    if (error instanceof CustomError) {
      res.status(error.statusCode).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};
