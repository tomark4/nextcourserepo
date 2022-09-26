import React from "react";
import Navbar from "../ui/Navbar";

const Layout = ({ children }: any) => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main style={{ padding: "20px 50px" }}>{children}</main>
    </>
  );
};

export default Layout;
