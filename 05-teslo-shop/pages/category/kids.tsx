import { Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts";
import { ProductList } from "../../components/products";
import { FullScreenLoading } from "../../components/ui";
import { useProducts } from "../../hooks";

const KidsPage = () => {
  const { products, isLoading } = useProducts("/products/?gender=kid");

  return (
    <ShopLayout title="Kids clothes" pageDescription="Kids clothes">
      <Typography variant="h2" sx={{ mb: 1 }}>
        Kids products
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default KidsPage;
