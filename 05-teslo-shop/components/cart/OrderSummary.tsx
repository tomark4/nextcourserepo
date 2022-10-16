import { Divider, Grid, Typography } from "@mui/material";
import React from "react";

const OrderSummary = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography>No. productos</Typography>
      </Grid>

      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>3</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>Subtotal</Typography>
      </Grid>

      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>$ 305.00</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>Impuesto</Typography>
      </Grid>

      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>$ 30.00</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography variant="subtitle1">Total</Typography>
      </Grid>

      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>$ 335.00</Typography>
      </Grid>
    </Grid>
  );
};

export default OrderSummary;
