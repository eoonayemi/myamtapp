import { Request, Response } from "express";
import {
  queryCablePlans,
  payCableSubscription as payCableSub,
} from "../services/cableSubcriptionServices";
import CustomError from "../classes";

export const fetchCablePlans = async (req: Request, res: Response) => {
  try {
    const data = await queryCablePlans("ameentaccetelecom");
    res.status(200).json(data);
  } catch (error) {
    if (error instanceof CustomError) {
      res.status(error.statusCode).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

export const payCableSubscription = async (req: Request, res: Response) => {
  try {
    const { network, dataId, phoneNo } = req.body;
    const { status } = await payCableSub({
      userId: req.userId,
      network,
      dataId,
      phoneNo,
    });

    if (status == "successful") {
      res.status(200).json({
        // newTransaction,
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
