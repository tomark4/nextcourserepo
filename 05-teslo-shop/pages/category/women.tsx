import { Typography } from "@mui/material";
import { NextPage } from "next";
import { ShopLayout } from "../../components/layouts";
import { ProductList } from "../../components/products";
import { FullScreenLoading } from "../../components/ui";
import { useProducts } from "../../hooks";

const WomenPage: NextPage = () => {
  const { products, isLoading } = useProducts("/products/?gender=women");

  return (
    <ShopLayout title="Women clothes" pageDescription="Women clothes">
      <Typography variant="h2" sx={{ mb: 1 }}>
        Women products
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default WomenPage;
