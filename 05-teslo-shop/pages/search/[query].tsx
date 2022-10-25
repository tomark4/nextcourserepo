import { NextPage, GetServerSideProps } from "next";
import Typography from "@mui/material/Typography";
import { ProductList } from "../../components/products";
import { ShopLayout } from "../../components/layouts";
import { dbProducts } from "../../database";
import { Product as IProduct } from "../../interfaces";

interface Props {
  products: IProduct[];
}

const SearchPage = ({ products }: Props) => {
  return (
    <ShopLayout title="Teslo shop" pageDescription="Busqueda de productos">
      <Typography variant="h1" component="h1" sx={{ mb: 3 }}>
        Buscar
      </Typography>
      <Typography variant="h2" sx={{ mb: 3 }}>
        ABC - 123
      </Typography>

      <ProductList products={products} />
    </ShopLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { query = "" } = params as { query: string };

  if (query.length === 0) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }

  let products = await dbProducts.getProductsByTerm(query);

  // TODO: return recomendations

  return {
    props: {
      products,
    },
  };
};

export default SearchPage;
