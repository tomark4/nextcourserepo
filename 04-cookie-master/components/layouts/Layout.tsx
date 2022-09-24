import Head from "next/head";
import React from "react";
import Navbar from "../ui/Navbar";

const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <nav>
          <Navbar />
        </nav>
        <main style={{ padding: "20px 50px" }}>{children}</main>
      </Head>
    </>
  );
};

export default Layout;
