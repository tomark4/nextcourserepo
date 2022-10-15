import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import { ShopLayout } from "../components/layouts";

const Home: NextPage = () => {
  return (
    <ShopLayout title="lorem ipsum" pageDescription="lorem ipsum">
      <Typography variant="h1" component="h1">
        Tienda
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Todos los productos
      </Typography>
    </ShopLayout>
  );
};

export default Home;
