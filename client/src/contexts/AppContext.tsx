import { createContext, ReactNode, useContext, useState } from "react";
import { AppContextType, ToastType } from "../types";
import { Toast } from "../components";

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<ToastType | undefined>(undefined);

  const showToast = (message: string, type: string) =>
    setToast({ message, type, open: true });

  return (
    <AppContext.Provider value={{ showToast }}>
      {toast && <Toast {...toast} close={() => setToast(undefined)} />}
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as AppContextType;
};
