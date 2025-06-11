import { FC, useEffect, useState } from "react";
import Link from "next/link";
import cn from "classnames";

import { HeaderInterface } from "@/info/info.types";

import styles from "./Header.module.scss";
import { info } from "@/info";
import { useAppContext } from "@/context/AppContext";
import LogoIcon from "@/assets/icons/LogoIcon";

const Header: FC<HeaderInterface> = ({ darkBG }) => {
  const { setShowForm } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [fixMenu, setFixMenu] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setFixMenu(true);
      } else {
        setFixMenu(false);
      }
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onCloseMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={cn(
          styles.Header,
          { [styles.fixed]: fixMenu },
          { [styles.FiledBg]: darkBG },
          {
            [styles.open]: isMenuOpen,
          }
        )}
      >
        <div className="container">
          <div className={styles.Inner}>
            <Link onClick={onCloseMenu} href="/" className={styles.LogoWrapper}>
              <LogoIcon
                className={cn(styles.Logo, { [styles.open]: isMenuOpen })}
              />
            </Link>

            <nav className={styles.Nav}>
              <ul role="navigation" className={styles.Menu}>
                {info.menuList.map((item) => (
                  <li key={item.anchor} className={styles.MenuItem}>
                    <a className={styles.MenuLink} href={`/#${item.anchor}`}>
                      {item.menuName}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              onClick={() => {
                setShowForm(true);
              }}
              className={styles.buttonContact}
            >
              Contact Us
            </button>

            <button
              onClick={toggleMenu}
              className={cn(styles.Burger, { [styles.open]: isMenuOpen })}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          <nav
            className={cn(styles.Nav, styles.Mobile, {
              [styles.open]: isMenuOpen,
            })}
          >
            <ul role="navigation" className={styles.Menu}>
              {info.menuList.map((item) => (
                <li key={item.anchor} className={styles.MenuItem}>
                  <a
                    onClick={onCloseMenu}
                    className={styles.MenuLink}
                    href={`/#${item.anchor}`}
                  >
                    {item.menuName}
                  </a>
                </li>
              ))}
            </ul>

            <button
              onClick={() => {
                setShowForm(true);
                onCloseMenu();
              }}
              className={cn(styles.buttonContact, styles.mobile)}
            >
              Contact Us
            </button>
          </nav>
        </div>
      </header>
      <div
        onClick={onCloseMenu}
        className={cn(styles.overlay, { [styles.open]: isMenuOpen })}
      ></div>
    </>
  );
};

export default Header;
