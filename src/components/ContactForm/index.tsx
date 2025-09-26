import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import cn from 'classnames';

import CloseIcon from './close.svg';
import { useAppContext } from '@/context/AppContext';

import styles from './ContactForm.module.scss';
import LogoIcon from '@/assets/icons/LogoIcon';
import MailSentIcon from '@/assets/icons/MailSentIcon';
import AttentionIcon from '@/assets/icons/AttentionIcon';
import { useRouter } from 'next/router';
import LoadingIcon from '@/assets/icons/LoadingIcon';

export interface IForm {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
  termsCheckbox: boolean;
}

const ContactForm = () => {
  const { setShowForm, setFormStatus, showForm, formStatus } = useAppContext();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    trigger,
    formState: { errors },
    clearErrors,
  } = useForm<IForm>();

  const onCloseForm = () => {
    setShowForm(false);
    setFormStatus('hold');
    clearErrors();
  };

  useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCloseForm();
      }
    };

    window.addEventListener('keydown', closeOnEscape);

    return () => {
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  const onSubmit = async (data: IForm) => {
    setFormStatus('loading');

    try {
      await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          if (!res.ok) {
            return setFormStatus('error');
          }
          setFormStatus('success');
          reset();
        })
        .catch(() => {
          setFormStatus('error');
        });
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <>
      <div className={cn(styles.overlay, { [styles.show]: showForm })} onClick={onCloseForm}></div>

      <div
        className={cn(
          styles.formWrapper,
          { [styles.show]: showForm },
          { [styles.errorState]: formStatus === 'error' },
          { [styles.successState]: formStatus === 'success' }
        )}
      >
        <div
          className={cn(
            styles.formContainer,
            { [styles.errorState]: formStatus === 'error' },
            { [styles.successState]: formStatus === 'success' }
          )}
        >
          <div
            className={cn(
              styles.closeBtn,
              { [styles.errorState]: formStatus === 'error' },
              { [styles.successState]: formStatus === 'success' }
            )}
          >
            <CloseIcon className={styles.closeIcon} onClick={onCloseForm} />
          </div>
          {(formStatus === 'hold' || formStatus === 'loading') && (
            <>
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
                    <a className={styles.contact} href="mailto:info@blackpowderglobal.com">
                      info@blackpowderglobal.com
                    </a>
                  </li>
                  <li className={styles.contactItem}>
                    <h4 className={styles.contactTitle}>Phone:</h4>

                    <a className={styles.contact} href="tel:+355688080040">
                      + 355 68 808 0040
                    </a>
                  </li>
                  <li className={styles.contactItem}>
                    <h4 className={styles.contactTitle}>Address:</h4>
                    <address className={styles.contact}>Str. Kavaja, Delijorgj, Tirana, Albania</address>
                  </li>
                </ul>
              </div>
              <form className={styles.form}>
                <div className={cn(styles.loadingIconWrapper, { [styles.active]: formStatus === 'loading' })}>
                  <LoadingIcon className={styles.loadingIcon} />
                </div>
                <h3 className={styles.formTitle}>Let's Talk</h3>
                <div className={cn(styles.formGroup, { [styles.disabled]: formStatus === 'loading' })}>
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="*First name"
                    {...register('firstName', {
                      required: 'First name is required',
                      disabled: formStatus === 'loading',
                      onChange: () => trigger('firstName'),
                    })}
                  />
                  {errors.firstName && <p className={styles.error}>{errors.firstName.message}</p>}
                </div>

                <div className={cn(styles.formGroup, { [styles.disabled]: formStatus === 'loading' })}>
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="*Last Name"
                    {...register('lastName', {
                      required: 'Last name is required',
                      disabled: formStatus === 'loading',
                      onChange: () => trigger('lastName'),
                    })}
                  />
                  {errors.lastName && <p className={styles.error}>{errors.lastName.message}</p>}
                </div>

                <div className={cn(styles.formGroup, { [styles.disabled]: formStatus === 'loading' })}>
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="*Email"
                    {...register('email', {
                      required: 'Email is required',
                      disabled: formStatus === 'loading',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                      onChange: () => trigger('email'),
                    })}
                  />
                  {errors.email && <p className={styles.error}>{errors.email.message}</p>}
                </div>

                <div className={cn(styles.formGroup, { [styles.disabled]: formStatus === 'loading' })}>
                  <input
                    className={styles.input}
                    type="tel"
                    placeholder="Phone number"
                    {...register('phone', {
                      disabled: formStatus === 'loading',
                      validate: (value) => {
                        if (!value) return true;
                        const phoneRegex = /^\+?[0-9\s-()]+$/;
                        return phoneRegex.test(value) || 'Invalid phone number';
                      },
                      onChange: () => trigger('phone'),
                    })}
                  />
                  {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
                </div>

                <div
                  className={cn(
                    styles.formGroup,
                    { [styles.disabled]: formStatus === 'loading' },
                    styles.textareaGroup
                  )}
                >
                  <textarea
                    rows={2}
                    maxLength={300}
                    className={cn(styles.input, styles.textarea)}
                    placeholder="*Message"
                    {...register('message', {
                      disabled: formStatus === 'loading',
                      required: 'Message is required',
                      onChange: () => trigger('message'),
                    })}
                  />
                  {errors.message && <p className={styles.error}>{errors.message.message}</p>}
                </div>

                <label className={cn(styles.checkboxLabel, { [styles.disabled]: formStatus === 'loading' })}>
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    {...register('termsCheckbox', { required: true, disabled: formStatus === 'loading' })}
                  />
                  <span
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.code === 'Enter' || e.code === 'Space') {
                        setValue('termsCheckbox', !watch('termsCheckbox'));
                      }
                    }}
                    className={styles.checkmark}
                  ></span>
                  By submitting this form, you consent to BPG Albania Ltd and its subsidiaries processing your data.
                </label>

                <button
                  onClick={handleSubmit(onSubmit)}
                  className={styles.submitBtn}
                  tabIndex={0}
                  disabled={!watch('termsCheckbox') || formStatus === 'loading'}
                >
                  Send Message
                </button>
              </form>{' '}
            </>
          )}

          {formStatus === 'success' && (
            <div className={styles.successWrapper}>
              <div className={styles.successContent}>
                <MailSentIcon className={styles.mailSentIcon} />
                <h4 className={styles.successTitle}>
                  Thank you!
                  <br />
                  Your message has been sent successfully
                </h4>

                <button
                  onClick={() => {
                    if (router.pathname !== '/') {
                      router.push('/');
                    }

                    setShowForm(false);
                    setFormStatus('hold');
                  }}
                  className={styles.submitBtn}
                >
                  Go to home page
                </button>
              </div>
            </div>
          )}

          {formStatus === 'error' && (
            <div className={styles.errorWrapper}>
              <div className={styles.errorContent}>
                <AttentionIcon className={styles.attentionIcon} />
                <h4 className={styles.errorTitle}>Something go wrong...</h4>

                <button onClick={() => setFormStatus('hold')} className={styles.submitBtn}>
                  Try again
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactForm;
