import { Dispatch, ReactNode, SetStateAction } from "react";

export type AppContextType = {
  innerWidth: number | undefined;
  formStatus: SendFormType;
  setFormStatus: Dispatch<SetStateAction<SendFormType>>;
  pagePath: string;
  showForm: boolean;
  setShowForm: Dispatch<SetStateAction<boolean>>;
};

export type AppContextProps = {
  children: ReactNode;
};

export type SendFormType = "hold" | "loading" | "success" | "error";
