import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import cn from "classnames";

import MailIcon from "@icons/mail.svg";
import LocationIcon from "@icons/location.svg";
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
}

const ContactForm = () => {
  const { setShowForm, setFormStatus, showForm } = useAppContext();

  const {
    register,
    handleSubmit,
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
      await fetch("/mail.php", {
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
              {/* <li className={styles.contactItem}>
                <PhoneIcon className={styles.icon} />
                <a className={styles.contact} href="tel:+972547447133">
                  +972-54-7447133
                </a>
              </li> */}
              <li className={styles.contactItem}>
                <MailIcon className={styles.icon} />
                <a className={styles.contact} href="mailto:info@click-ora.com">
                  info@click-ora.com
                </a>
              </li>
              <li className={styles.contactItem}>
                <LocationIcon className={styles.icon} />
                <address className={styles.contact}>
                  Flat/Rm A 12/F Zj 300, Lockhart Road, Wan Chai, Hong Kong,
                  China
                </address>
              </li>
            </ul>
          </div>

          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="firstName">
                First Name
              </label>
              <input
                className={styles.input}
                id="firstName"
                type="text"
                placeholder="Your first name"
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
              <label className={styles.label} htmlFor="firstName">
                Last Name
              </label>
              <input
                className={styles.input}
                id="lastName"
                type="text"
                placeholder="Your last name"
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
              <label className={styles.label} htmlFor="email">
                Email
              </label>
              <input
                className={styles.input}
                id="email"
                type="text"
                placeholder="Your email"
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
              <label className={styles.label} htmlFor="phone">
                Phone
              </label>
              <input
                className={styles.input}
                id="phone"
                type="tel"
                placeholder="Your phone number"
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
              <label className={styles.label} htmlFor="message">
                Message
              </label>
              <textarea
                rows={2}
                maxLength={300}
                className={cn(styles.input, styles.textarea)}
                id="message"
                placeholder="Write your message.."
                {...register("message", {
                  required: "Message is required",
                  onChange: () => trigger("message"),
                })}
              />
              {errors.message && (
                <p className={styles.error}>{errors.message.message}</p>
              )}
            </div>

            <button
              onClick={handleSubmit(onSubmit)}
              className={styles.submitBtn}
              type="submit"
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
