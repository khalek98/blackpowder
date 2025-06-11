import { FC, useState, useEffect } from "react";
import cn from "classnames";

import styles from "./Notification.module.scss";
import { NotificationProps } from "./Notification.props";
import { useAppContext } from "@/context/AppContext";

const Notification: FC<NotificationProps> = ({
  message,
  autoCloseTimeout = 5000,
  status = "hold",
}) => {
  const { formStatus, setFormStatus } = useAppContext();

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (formStatus === "error") {
      timer = setTimeout(() => {
        setFormStatus("hold");
      }, autoCloseTimeout);
    }

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setFormStatus("hold");
  };

  return (
    <>
      {formStatus && (
        <div
          className={cn(
            styles.Notification,
            { [styles.success]: status === "success" },
            { [styles.error]: status === "error" }
          )}
        >
          <p className={styles.Message}>{message}</p>
          <button
            className={cn(
              styles.Button,
              { [styles.success]: status === "success" },
              { [styles.error]: status === "error" }
            )}
            onClick={handleClose}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      )}
    </>
  );
};

export default Notification;
