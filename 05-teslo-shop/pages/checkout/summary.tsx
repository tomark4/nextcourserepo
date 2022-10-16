import React from "react";
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

const SummaryPage = () => {
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
              <Typography variant="h1">Resumen (3 Productos)</Typography>
              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="space-between" sx={{ mb: 2 }}>
                <Typography variant="subtitle1">
                  Dirección de entrega
                </Typography>
                <NextLink href="/checkout/address" passHref>
                  <Link underline="always">Editar</Link>
                </NextLink>
              </Box>

              <Typography>Jose Quintero</Typography>
              <Typography>Caracas</Typography>
              <Typography>Miranda</Typography>
              <Typography>Venezuela</Typography>
              <Typography>+581235654654</Typography>

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
