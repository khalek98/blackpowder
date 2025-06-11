import { SendFormType } from "@/@types/ContextTypes";

export type NotificationProps = {
  message: string;
  autoCloseTimeout?: number;
  status: SendFormType;
};
