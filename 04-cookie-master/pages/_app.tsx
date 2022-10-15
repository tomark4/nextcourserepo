import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme, customTheme } from "../themes/";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

// interface Props extends AppProps {
//   theme: string;
// }

function MyApp({ Component, pageProps }: AppProps) {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  useEffect(() => {
    const cookieTheme = Cookies.get("themeSelected");

    const selectedTheme =
      cookieTheme === "light"
        ? lightTheme
        : cookieTheme === "dark"
        ? darkTheme
        : customTheme;

    setCurrentTheme(selectedTheme);
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

// MyApp.getInitialProps = async (appContext: AppContext) => {
//   const { themeSelected = "light" } = appContext.ctx.req
//     ? (appContext.ctx.req as any).cookies
//     : { themeSelected: "light" };

//   const validThemes = ["light", "dark", "custom"];

//   return {
//     theme: validThemes.includes(themeSelected) ? themeSelected : "light",
//   };
// };

export default MyApp;
