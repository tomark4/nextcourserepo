import Head from "next/head";
import React from "react";
import { Navbar } from "../ui/";

interface Props {
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
  children: React.ReactNode;
}

const ShopLayout = ({
  title,
  pageDescription,
  imageFullUrl,
  children,
}: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
        {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
      </Head>

      <nav>
        <Navbar />
      </nav>

      {/* TODO: sidebar  */}

      <main
        style={{ margin: "80px auto", maxWidth: "1440px", padding: "0 30px" }}
      >
        {children}
      </main>

      <footer>{/* TODO: custom footer */}</footer>
    </>
  );
};

export default ShopLayout;
