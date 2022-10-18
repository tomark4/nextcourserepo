import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import { ShopLayout } from "../components/layouts";
import { ProductList } from "../components/products/";
import { useProducts } from "../hooks/";

const Home: NextPage = () => {
  const { products, isError, isLoading } = useProducts("/products");

  return (
    <ShopLayout title="lorem ipsum" pageDescription="lorem ipsum">
      <Typography variant="h1" component="h1"></Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Todos los productos
      </Typography>

      {isLoading ? <h1>Cargando...</h1> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default Home;
