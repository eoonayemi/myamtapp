import { Router } from "express";
import { buyData, fetchDataPlans } from "../controllers/dataController";
import { verifyToken } from "../middlewares";

const router = Router();

router.get("/plans", fetchDataPlans);
router.post("/buy", verifyToken, buyData);

export default router;
