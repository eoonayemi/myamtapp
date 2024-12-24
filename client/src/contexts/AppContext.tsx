import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { AppContextType, ToastType } from "../types";
import { Toast } from "../components";
import { useQuery } from "@tanstack/react-query";
import { validateToken } from "../api/auth";

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<ToastType | undefined>(undefined);
  const { isError } = useQuery({
    queryKey: ["validate-token"],
    queryFn: validateToken,
  });
  const lsIsLoggedIn =
    JSON.parse(localStorage.getItem("isLoggedIn") as string)?.isLoggedIn ||
    false;
  const [isLoggedIn, setIsLoggedIn] = useState(lsIsLoggedIn || false);

  const showToast = (message: string, type: string) =>
    setToast({ message, type, open: true });

  // console.log({
  //   isLoggedIn,
  // });

  useEffect(() => {
    if (isError) {
      setIsLoggedIn(false);
      localStorage.removeItem("isLoggedIn");
    }
  }, [isError]);

  return (
    <AppContext.Provider
      value={{
        showToast,
        isLoggedIn,
        setIsLoggedIn: (val: boolean) => {
          setIsLoggedIn(val);
          localStorage.setItem(
            "isLoggedIn",
            JSON.stringify({ isLoggedIn: val })
          );
        },
      }}
    >
      {toast && <Toast {...toast} close={() => setToast(undefined)} />}
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as AppContextType;
};
