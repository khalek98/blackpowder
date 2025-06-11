import React, { FC } from "react";

import styles from "./CookieBar.module.scss";

interface CookiesProps {
  setCookies: () => void;
}

const CookieBar: FC<CookiesProps> = ({ setCookies }) => {
  return (
    <div className={styles.CookieBar}>
      <div className={styles.Inner}>
        <span className={styles.Message}>
          We use cookies to provide our services. By using this website, you agree to this.
        </span>
        <span className={styles.Buttons}>
          <button onClick={() => setCookies()} className={styles.Button}>
            OK
          </button>
          <a href="cookies" target="_blank" className={styles.Link}>
            More information
          </a>
        </span>
      </div>
    </div>
  );
};

export default CookieBar;
