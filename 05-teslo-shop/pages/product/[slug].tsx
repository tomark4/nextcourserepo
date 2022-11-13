import { Button, Chip, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { GetStaticProps, NextPage } from "next";
import React, { useContext, useState } from "react";
import { ShopLayout } from "../../components/layouts";
import { ProductSlideShow, SizeSelector } from "../../components/products/";
import { ItemCounter } from "../../components/ui";
import { dbProducts } from "../../database";
import { Product, ValidSize } from "../../interfaces";
import { ICartProduct } from "../../interfaces/cart";
import { useRouter } from "next/router";
import { CartContext } from "../../context";

interface Props {
  product: Product;
}

const ProductDetailPage: NextPage<Props> = ({ product }) => {
  const router = useRouter();
  const { addProductToCart } = useContext(CartContext);

  const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({
    _id: product._id,
    image: product.images[0],
    price: product.price,
    size: undefined,
    slug: product.slug,
    title: product.title,
    qty: 1,
    gender: product.gender,
  });

  const handleSizeSelect = (size: ValidSize) => {
    setTempCartProduct({ ...tempCartProduct, size });
  };

  const handleChangeQty = (value: number) => {
    setTempCartProduct({ ...tempCartProduct, qty: value });
  };

  const handleAddToCart = () => {
    if (!tempCartProduct.size) return;

    addProductToCart(tempCartProduct);
    //router.push("/cart");
  };

  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ProductSlideShow images={product.images} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box display="flex" flexDirection="column">
            <Typography variant="h1" component="h1">
              {product.title}
            </Typography>
            <Typography variant="subtitle1" component="h2">
              {`$ ${product.price}`}
            </Typography>
            <Box sx={{ my: 2 }}>
              <Typography variant="subtitle2">Cantidad</Typography>
              <ItemCounter
                currentValue={tempCartProduct.qty}
                maxValue={product.inStock}
                onChangeValue={handleChangeQty}
              />
              <SizeSelector
                sizes={product.sizes}
                selectedSize={tempCartProduct.size}
                onSelectedSize={handleSizeSelect}
              />
            </Box>

            {product.inStock === 0 ? (
              <Chip
                label="No hay disponibles"
                color="error"
                variant="outlined"
              />
            ) : (
              <Button
                className="circular-btn"
                color="secondary"
                onClick={handleAddToCart}
              >
                {tempCartProduct?.size
                  ? "Agregar al carrito"
                  : "Seleccione una talla"}
              </Button>
            )}

            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2" fontWeight={700}>
                Descripción
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                {product.description}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const { slug } = params as { slug: string };

//   const product = await dbProducts.getProductBySlug(slug);

//   if (!product) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       product,
//     },
//   };
// };

export const getStaticPaths = async (ctx: any) => {
  const productsSlugs = await dbProducts.getAllProductsSlugs();

  return {
    paths: productsSlugs.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params as { slug: string };
  const product = await dbProducts.getProductBySlug(slug);

  if (!product) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default ProductDetailPage;
