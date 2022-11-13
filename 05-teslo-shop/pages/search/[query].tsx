import { GetServerSideProps } from "next";
import Typography from "@mui/material/Typography";
import { ProductList } from "../../components/products";
import { ShopLayout } from "../../components/layouts";
import { dbProducts } from "../../database";
import { Product as IProduct } from "../../interfaces";
import { Box } from "@mui/material";

interface Props {
  products: IProduct[];
  foundProducts: boolean;
  query: string;
}

const SearchPage = ({ products, foundProducts, query }: Props) => {
  return (
    <ShopLayout title="Teslo shop" pageDescription="Busqueda de productos">
      <Typography variant="h1" component="h1" sx={{ mb: 3 }}>
        Buscar
      </Typography>
      {foundProducts ? (
        <Typography variant="h2" sx={{ mb: 3 }}>
          Se encontraron {query.length} productos para {query}
        </Typography>
      ) : (
        <Typography variant="h2" sx={{ mb: 3 }}>
          No hay productos productos encontrados para {query}
        </Typography>
      )}

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

  const foundProducts = products.length > 0;

  if (!foundProducts) {
    products = await dbProducts.getAllProducts();
  }

  return {
    props: {
      products,
      foundProducts,
      query,
    },
  };
};

export default SearchPage;
