import Head from "next/head";
import React, { PropsWithChildren, FC, ReactNode } from "react";
import Navbar from "../ui/Navbar";

type Props = {
  title?: string;
  children?: ReactNode;
};

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<PropsWithChildren<Props>> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokedex"}</title>
        <meta name="author" content="Jose" />
        <meta name="description" content="Poke app" />
        <meta name="keywords" content="nextjs, poke, pokedex" />
        <meta property="og:title" content={`Info ${title}`} />
        <meta property="og:description" content="Pokemon app info." />
        <meta property="og:image" content={`${origin}/banner.png`} />
      </Head>

      <Navbar />

      <main className="content">{children}</main>

      <footer></footer>
    </>
  );
};
