import { ShopLayout } from "../../components/layouts";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { FormControl, MenuItem, Select, Button, Box } from "@mui/material";
import { GetServerSideProps } from "next";
import { isValidToken } from "../../utils/jwt";

const AddressPage = () => {
  return (
    <ShopLayout
      title="Dirección"
      pageDescription="Confirmar dirección de destino"
    >
      <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
        Dirección
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label="Nombre" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Apellido" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Dirección" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Dirección 2 (opcional)"
            variant="filled"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Código postal" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Ciudad" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <Select variant="filled" label="Pais" value={1}>
              <MenuItem value={1}>Venezuela</MenuItem>
              <MenuItem value={2}>Colombia</MenuItem>
              <MenuItem value={3}>Ecuador</MenuItem>
              <MenuItem value={4}>Peru</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Telefono" variant="filled" fullWidth />
        </Grid>
      </Grid>
      <Box sx={{ mt: 5 }} justifyContent="center" display="flex">
        <Button className="circular-btn" color="secondary" size="large">
          Revisar pedido
        </Button>
      </Box>
    </ShopLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { token = "" } = req.cookies;
  let tokenValid = false;

  try {
    await isValidToken(token);
    tokenValid = true;
  } catch (e) {
    tokenValid = false;
  }

  if (!tokenValid) {
    return {
      redirect: {
        destination: "/auth/login?page=/checkout/address",
        permanent: false,
      },
    };
  }

  return { props: {} };
};

export default AddressPage;
