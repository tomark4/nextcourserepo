import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { lightTheme } from "../themes/light-theme";
import UiProvider from "./context/ui/UiProvider";
import EntriesProvider from "./context/entries/EntriesProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EntriesProvider>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <UiProvider>
          <Component {...pageProps} />
        </UiProvider>
      </ThemeProvider>
    </EntriesProvider>
  );
}

export default MyApp;
