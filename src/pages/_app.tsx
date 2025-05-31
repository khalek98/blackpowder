import type { AppProps } from "next/app";
import { AppContextProvider } from "../context/AppContext";

import "@/styles/index.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}
