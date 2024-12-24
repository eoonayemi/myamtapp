import { create } from "zustand";
import { persist, combine } from "zustand/middleware";
import { User } from "../types";

interface userState {
  user: User | null;
}

interface userActions {
  setUser: (user: User | null) => void;
}

const useUserStore = create(
  persist(
    combine<userState, userActions>({ user: null }, (set) => ({
      setUser: (user: User | null) => set({ user }),
    })),
    {
      name: "user-storage",
    }
  )
);

export default useUserStore;
