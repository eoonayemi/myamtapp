import { Router } from "express";
import {
  payCableSubscription,
  fetchCablePlans,
} from "../controllers/cableSubscriptionController";
import { verifyToken } from "../middlewares";

const router = Router();

router.get("/plans", fetchCablePlans);
router.post("/pay", verifyToken, payCableSubscription);

export default router;
