import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import cn from "classnames";

import CloseIcon from "./close.svg";
import { useAppContext } from "@/context/AppContext";

import styles from "./ContactForm.module.scss";
import LogoIcon from "@/assets/icons/LogoIcon";

interface IForm {
  firstName: "";
  lastName: "";
  email: "";
  phone?: "";
  message: "";
  termsCheckbox: boolean;
}

const ContactForm = () => {
  const { setShowForm, setFormStatus, showForm } = useAppContext();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors },
    clearErrors,
  } = useForm<IForm>();

  const onCloseForm = () => {
    setShowForm(false);
    clearErrors();
  };

  useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCloseForm();
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const onSubmit = async (data: IForm) => {
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
  };

  return (
    <>
      <div
        className={cn(styles.overlay, { [styles.show]: showForm })}
        onClick={onCloseForm}
      ></div>

      <div className={cn(styles.formWrapper, { [styles.show]: showForm })}>
        <div className={styles.formContainer}>
          <div className={styles.closeBtn}>
            <CloseIcon className={styles.closeIcon} onClick={onCloseForm} />
          </div>
          <div className={styles.content}>
            <LogoIcon className={styles.logo} />

            <h3 className={styles.title}>Contact Us</h3>
            <p className={styles.description}>
              Any question or remarks? <br />
              Just write us a message!
            </p>

            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <h4 className={styles.contactTitle}>Email:</h4>
                <a
                  className={styles.contact}
                  href="mailto:info@blackpowderglobal.com"
                >
                  info@blackpowderglobal.com
                </a>
              </li>
              <li className={styles.contactItem}>
                <h4 className={styles.contactTitle}>Address:</h4>
                <address className={styles.contact}>
                  Str. Kavaja, Delijorgj, Tirana, Albania
                </address>
              </li>
            </ul>
          </div>

          <form className={styles.form}>
            <h3 className={styles.formTitle}>Let's Talk</h3>
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
                placeholder="*Last Name"
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
                placeholder="*Email"
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
                className={cn(styles.input, styles.textarea)}
                placeholder="*Message"
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
              type="submit"
              disabled={!watch("termsCheckbox")}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
