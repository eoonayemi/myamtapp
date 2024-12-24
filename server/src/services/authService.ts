import { registerUserProps } from "../types";
import { PrismaClient } from "@prisma/client";
import { hashPassword, verifyPassword } from "../utils";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

const registerUser = async ({
  email,
  username,
  password,
  phoneNo,
  referrerId,
  userRole,
}: registerUserProps) => {
  const userExists = await prisma.user.findFirst({
    where: {
      OR: [
        {
          email,
        },
        {
          username,
        },
      ],
    },
  });

  if (userExists) {
    return { message: "User already exists", error: true };
  }

  const hashedPassword = await hashPassword(password);

  const data: any = {
    email,
    username,
    password: hashedPassword,
    phoneNo,
    userRole,
  };
  if (referrerId !== undefined) {
    data.referrerId = referrerId;
  }

  const user = await prisma.user.create({ data });
  return { message: "User created successfully", user, error: false };
};

const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!user) {
    return { message: "User not found", error: true };
  }

  const isMatch = await verifyPassword(password, user.password);

  if (!isMatch) {
    return { message: "Invalid credentials", error: true };
  }

  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "1h",
    }
  );

  const { password: _, ...userWithoutPassword } = user;

  return {
    message: "Login successful",
    token,
    error: false,
    user: userWithoutPassword,
  };
};

export { registerUser, loginUser };
