import {
  AppContextProps,
  AppContextType,
  SendFormType,
} from "@/@types/ContextTypes";
import { useRouter } from "next/router";
import { createContext, FC, useContext, useEffect, useState } from "react";

export const AppContext = createContext<AppContextType | null>(null);

export function useAppContext() {
  return useContext(AppContext) as AppContextType;
}

export const AppContextProvider: FC<AppContextProps> = ({ children }) => {
  const [innerWidth, setInnerWidth] = useState<number>();
  const [formStatus, setFormStatus] = useState<SendFormType>("success");
  const [pagePath, setPagePath] = useState<string>("/");
  const [showForm, setShowForm] = useState<boolean>(false);
  const router = useRouter();

  const handleSetInnerWidth = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    handleSetInnerWidth();
    setPagePath(router.pathname);
  }, [router.pathname]);

  useEffect(() => {
    window.addEventListener("resize", handleSetInnerWidth);

    return () => {
      window.removeEventListener("resize", handleSetInnerWidth);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        innerWidth,
        formStatus,
        setFormStatus,
        pagePath,
        showForm,
        setShowForm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
