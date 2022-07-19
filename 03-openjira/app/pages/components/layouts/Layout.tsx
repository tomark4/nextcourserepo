import { Box } from "@mui/material";
import Head from "next/head";
import React, { FC, ReactNode } from "react";
import Navbar from "../ui/Navbar";
import Sidebar from "../ui/Sidebar";

type LayoutProps = {
  title?: String;
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ title = "OpenJira", children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar />
      <Sidebar />
      <Box sx={{ padding: 10 }}>{children}</Box>
    </Box>
  );
};

export default Layout;
