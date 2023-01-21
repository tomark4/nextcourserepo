import React, { useContext } from "react";
import { ShopLayout } from "../../components/layouts";
import {
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  Box,
  Button,
  Link,
} from "@mui/material";
import { CartList, OrderSummary } from "../../components/cart";
import NextLink from "next/link";
import { CartContext } from "../../context";

const SummaryPage = () => {
  const { shippingAddress, numberOfItems } = useContext(CartContext);

  if (!shippingAddress) {
    return <></>;
  }

  return (
    <ShopLayout title="Carrito - 3" pageDescription="Carrito de compras">
      <Typography variant="h1" component="h1">
        Resumen de la orden
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList editable={false} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h1">
                Resumen ({numberOfItems} Producto{numberOfItems > 1 ? "s" : ""})
              </Typography>
              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="space-between" sx={{ mb: 2 }}>
                <Typography variant="subtitle1">
                  Dirección de entrega
                </Typography>
                <NextLink href="/checkout/address" passHref>
                  <Link underline="always">Editar</Link>
                </NextLink>
              </Box>

              {shippingAddress && (
                <Box mt={1}>
                  <Typography>
                    {shippingAddress.name} {shippingAddress.lastName}
                  </Typography>
                  <Typography>
                    {shippingAddress.address} {shippingAddress.address2}
                  </Typography>
                  <Typography>
                    {shippingAddress.city} {shippingAddress.country}
                  </Typography>
                  <Typography>{shippingAddress.zipCode}</Typography>
                  <Typography>{shippingAddress.phone}</Typography>
                </Box>
              )}

              <Divider sx={{ mt: 1 }} />

              <Box display="flex" justifyContent="end" sx={{ mb: 2 }}>
                <NextLink href="/cart" passHref>
                  <Link underline="always">Editar</Link>
                </NextLink>
              </Box>

              <OrderSummary />

              <Box sx={{ mt: 3 }}>
                <Button color="secondary" className="circular-btn" fullWidth>
                  Confirmar orden
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default SummaryPage;
