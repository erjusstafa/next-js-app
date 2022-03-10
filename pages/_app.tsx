import "../styles/globals.css";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { Provider } from "react-redux";
import { store } from "redux/store";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistor = persistStore(store);

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Nav />
        <Component {...pageProps} />
        <Footer title="binschonda Hauptstadt-Pflegedienst GmbH" />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
