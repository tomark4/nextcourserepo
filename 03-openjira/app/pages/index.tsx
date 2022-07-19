import { Typography } from "@mui/material";
import type { NextPage } from "next";
import Layout from "./components/layouts/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Typography variant="h1" color="primary">
        Hello world
      </Typography>
    </Layout>
  );
};

export default Home;
