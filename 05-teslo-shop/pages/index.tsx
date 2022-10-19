import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import { ShopLayout } from "../components/layouts";
import { ProductList } from "../components/products/";
import { useProducts } from "../hooks/";
import { FullScreenLoading } from "../components/ui";

const Home: NextPage = () => {
  const { products, isLoading } = useProducts("/products");

  return (
    <ShopLayout title="lorem ipsum" pageDescription="lorem ipsum">
      <Typography variant="h2" sx={{ mb: 1 }}>
        Todos los productos
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default Home;
