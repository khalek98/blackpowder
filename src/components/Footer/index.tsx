import cn from 'classnames';
import Link from 'next/link';
import { animateScroll } from 'react-scroll';

import styles from './footer.module.scss';
import ArrowIcon from './icons/ArrowIcon';
import LogoIcon from '@/assets/icons/LogoIcon';
import { info } from '@/info';

const Footer = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop({
      smooth: true,
    });
  };

  return (
    <footer id="footer" className={styles.Footer}>
      <div className={cn('container', styles.Container)}>
        <div className={styles.FooterContent}>
          <Link href="/">
            <LogoIcon className={styles.Logo} />
          </Link>

          <div className={styles.Info}>
            <div className={styles.InfoItem}>
              <div className={styles.InfoTitle}>Contacts:</div>
              <a className={styles.InfoValue} href="mailto:info@blackpowderglobal.com">
                info@blackpowderglobal.com
              </a>
              <a className={styles.InfoValue} href="tel:+355688080040">
                + 355 68 808 0040
              </a>
            </div>
            <div className={styles.InfoItem}>
              <div className={styles.InfoTitle}>Address:</div>

              <address className={styles.InfoValue}>
                Str. Kavaja, Delijorgj,
                <br />
                Tirana, Albania
              </address>
            </div>
          </div>

          <button className={styles.ArrowWrapper} onClick={scrollToTop}>
            <ArrowIcon className={styles.ArrowIcon} />
          </button>
        </div>

        <div className={styles.Divider}></div>

        <div className={styles.FooterBottom}>
          <p className={styles.Copyright}>
            © {new Date().getFullYear()} {info.fullname}, All Right Reserved.
          </p>

          <div className={styles.Links}>
            <Link className={styles.Link} href="/cookies">
              Cookies Policy
            </Link>
            <Link className={styles.Link} href="/policy">
              Privacy Policy
            </Link>
            <Link className={styles.Link} href="/terms">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
