import { Router } from "express";
import { login, register, validateToken , logout} from "../controllers/authController";
import { verifyToken } from "../middlewares";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/validate-token", verifyToken, validateToken);
router.post("/logout", logout);

export default router;
