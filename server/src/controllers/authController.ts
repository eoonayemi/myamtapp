import { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { loginUser, registerUser } from "../services/authService";

const register = async (req: Request, res: Response): Promise<void> => {
  await body("email").isEmail().withMessage("Invalid email").run(req);
  await body("username")
    .notEmpty()
    .withMessage("Username is required")
    .run(req);
  await body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long")
    .run(req);
  await body("phoneNo")
    .isMobilePhone("any")
    .withMessage("Invalid phone number")
    .run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  try {
    const { email, username, password, phoneNo: phoneNumber, referrerId, userRole } =
      req.body;

    const { message, user, error } = await registerUser({
      email,
      username,
      password,
      phoneNumber,
      referrerId,
      userRole: userRole ? userRole : "user",
    });

    if (error) {
      res.status(400).json({ message });
      return;
    }

    res.status(201).json({ message, user });
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const login = async (req: Request, res: Response): Promise<void> => {
  await body("email").isEmail().withMessage("Invalid email").run(req);
  await body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long")
    .run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  try {
    const { email, password } = req.body;
    const { message, error, token, user } = await loginUser({ email, password });

    if (error) {
      res.status(400).json({ message });
      return;
    }

    res.cookie("jwt_user_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600000,
    });

    res.status(200).json({ message, user });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

const validateToken = async (req: Request, res: Response): Promise<void> => {
  try {
    res.status(200).json({ userId: req.userId, message: "Token is valid" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

const logout = async (req: Request, res: Response): Promise<void> => {
  try {
    res.clearCookie("jwt_user_token");
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

export { login, register, validateToken, logout };
