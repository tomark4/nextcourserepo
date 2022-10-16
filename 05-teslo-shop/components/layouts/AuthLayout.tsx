import { Box } from "@mui/material";
import Head from "next/head";

interface Props {
  title: string;
  children?: React.ReactNode;
}

const AuthLayout = ({ title, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="calc(100vh - 200px)"
        >
          {children}
        </Box>
      </main>
    </>
  );
};

export default AuthLayout;
