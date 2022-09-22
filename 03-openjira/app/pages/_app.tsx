import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { lightTheme } from "../themes/light-theme";
import UiProvider from "../context/ui/UiProvider";
import EntriesProvider from "../context/entries/EntriesProvider";
import { SnackbarProvider } from "notistack";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider maxSnack={3}>
      <EntriesProvider>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <UiProvider>
            <Component {...pageProps} />
          </UiProvider>
        </ThemeProvider>
      </EntriesProvider>
    </SnackbarProvider>
  );
}

export default MyApp;
