import React, { useEffect, useState } from "react";
import Head from "next/head";

import { CookieBar, Footer, Header, Notification } from "@/components";

import { info } from "@/info";
import { useAppContext } from "@/context/AppContext";
import ContactForm from "@/components/ContactForm";

const MainLayout = ({
  children,
  darkBG = false,
}: {
  children: React.ReactNode;
  darkBG?: boolean;
}) => {
  const [cookiesAccept, setCookiesAccept] = useState<boolean>(false);
  const [showCookieBar, setShowCookieBar] = useState<boolean>(false);

  const { descr, menuList } = info;

  const { formStatus } = useAppContext();

  const closeCookiePopup = () => {
    setCookiesAccept(true);
    window.localStorage.setItem("cookiesAccept", "true");
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowCookieBar(true);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const lsCookieValue = window.localStorage.getItem("cookiesAccept");

    if (!lsCookieValue) {
      window.localStorage.setItem("cookiesAccept", "false");
    } else if (lsCookieValue && lsCookieValue === "true") {
      setCookiesAccept(true);
    }
  }, [cookiesAccept]);

  return (
    <>
      <Head>
        <meta name="description" content={descr} />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="favicons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="favicons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="favicons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="favicons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="favicons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="favicons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="favicons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="favicons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="favicons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="favicons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicons/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/ico"
          sizes="16x16"
          href="favicons/favicon.ico"
        />

        <link rel="manifest" href="favicons/manifest.json" />
        <link rel="icon" href="favicons/favicon.svg" type="image/svg+xml" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="favicons/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header menuList={menuList} darkBG={darkBG} />
      <main>{children}</main>
      <Footer />

      {formStatus === "error" && (
        <Notification
          status={formStatus}
          message="Somethig went wrong... Try again!"
        />
      )}

      {!cookiesAccept && showCookieBar && (
        <CookieBar setCookies={closeCookiePopup} />
      )}

      <ContactForm />
    </>
  );
};

export default MainLayout;
