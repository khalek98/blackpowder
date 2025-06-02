import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import cn from "classnames";

import styles from "./Contact.module.scss";
import { useAppContext } from "@/context/AppContext";

interface IForm {
  firstName: "";
  lastName: "";
  email: "";
  phone?: "";
  message: "";
  termsCheckbox: boolean;
}

const Contact = () => {
  const { setFormStatus } = useAppContext();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm<IForm>();

  const onSubmit = useCallback(async (data: IForm) => {
    setFormStatus("loading");

    try {
      await fetch("/mailer/smart.php", {
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((res) => {
          if (!res.ok) {
            return setFormStatus("error");
          }
          setFormStatus("success");
          reset();
        })
        .catch(() => {
          setFormStatus("error");
        });
    } catch (error) {
      setFormStatus("error");
    }
  }, []);

  return (
    <section id="contacts" className={styles.section}>
      <div className={cn("container", styles.container)}>
        <h2 className={styles.title}>How Can We Help You?</h2>

        <div className={styles.descriptionWrapper}>
          <p className={styles.description}>
            Whether you're exploring a specific solution, need expert insight,
            or want to learn more about how we can support your operations —
            we're here to help.Fill out the form, and our team will reach out to
            discuss your needs in detail and guide you through the next steps.
          </p>
          <p className={styles.description}>
            Fill out the form, and our team will reach out to discuss your needs
            in detail and guide you through the next steps.
          </p>
        </div>

        <form className={styles.form}>
          <div className={styles.formGroup}>
            <input
              className={styles.input}
              type="text"
              placeholder="*First name"
              {...register("firstName", {
                required: "First name is required",
                onChange: () => trigger("firstName"),
              })}
            />
            {errors.firstName && (
              <p className={styles.error}>{errors.firstName.message}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <input
              className={styles.input}
              type="text"
              placeholder="Last Name"
              {...register("lastName", {
                required: "Last name is required",
                onChange: () => trigger("lastName"),
              })}
            />
            {errors.lastName && (
              <p className={styles.error}>{errors.lastName.message}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <input
              className={styles.input}
              type="text"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
                onChange: () => trigger("email"),
              })}
            />
            {errors.email && (
              <p className={styles.error}>{errors.email.message}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <input
              className={styles.input}
              type="tel"
              placeholder="Phone number"
              {...register("phone", {
                validate: (value) => {
                  if (!value) return true;
                  const phoneRegex = /^\+?[0-9\s-()]+$/;
                  return phoneRegex.test(value) || "Invalid phone number";
                },
                onChange: () => trigger("phone"),
              })}
            />
            {errors.phone && (
              <p className={styles.error}>{errors.phone.message}</p>
            )}
          </div>

          <div className={cn(styles.formGroup, styles.textareaGroup)}>
            <textarea
              rows={2}
              maxLength={300}
              className={cn(styles.textarea)}
              placeholder="Message"
              {...register("message", {
                required: "Message is required",
                onChange: () => trigger("message"),
              })}
            />
            {errors.message && (
              <p className={styles.error}>{errors.message.message}</p>
            )}
          </div>

          <label className={styles.checkboxLabel}>
            <input
              className={styles.checkbox}
              type="checkbox"
              {...register("termsCheckbox", { required: true })}
            />
            <span className={styles.checkmark}></span>
            By submitting this form, you consent to Black Powder Ltd and its
            subsidiaries processing your data.
          </label>

          <button
            onClick={handleSubmit(onSubmit)}
            className={styles.submitBtn}
            disabled={!watch("termsCheckbox")}
            type="submit"
          >
            Contact Us
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
