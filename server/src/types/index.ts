export interface registerUserProps {
  email: string;
  username: string;
  password: string;
  phoneNumber: string;
  referrerId?: number;
  userRole: string;
}

export interface buyDataPops {
  userId: number;
  network: string;
  dataId: string;
  phoneNo: string;
}

export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  phoneNo: string;
  userRole: string;
  emailVerified: boolean;
  walletBalance: number;
  totalFunds: number;
  totalSpent: number;
  referrerId?: number;
  referrer?: User;
  referredUsers: User[];
  joinedAt: Date;
  updatedAt: Date;
}

export interface CustomError extends Error {
  statusCode: number;
}
