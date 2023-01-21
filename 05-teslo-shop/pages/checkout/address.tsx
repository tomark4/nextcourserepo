import { ShopLayout } from "../../components/layouts";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { FormControl, MenuItem, Button, Box } from "@mui/material";
import { countries } from "../../database/countries";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

interface FormValue {
  name: string;
  lastName: string;
  phone: string;
  address: string;
  address2?: string;
  country: string;
  city: string;
  zipCode: string;
}

const getAddresFromCookies = (): FormValue => {
  const data = JSON.parse(Cookies.get("shippingAddress") || "{}");
  return (
    data || {
      name: "",
      lastName: "",
      phone: "",
      address: "",
      address2: "",
      country: countries[0].code,
      city: "",
      zipCode: "",
    }
  );
};

const AddressPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({
    defaultValues: getAddresFromCookies(),
  });

  const handleSubmitForm = (values: FormValue) => {
    console.log(values);
    Cookies.set("shippingAddress", JSON.stringify(values));
    router.push("/checkout/summary");
  };

  return (
    <ShopLayout
      title="Dirección"
      pageDescription="Confirmar dirección de destino"
    >
      <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
        Dirección
      </Typography>
      <form onSubmit={handleSubmit(handleSubmitForm)} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nombre"
              variant="filled"
              fullWidth
              error={!!errors.name}
              helperText={errors.name?.message}
              {...register("name", {
                required: "Name is required",
                minLength: { value: 2, message: "Name too short" },
              })}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Apellido"
              variant="filled"
              fullWidth
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
              {...register("lastName", {
                required: "Last name is required",
              })}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Dirección"
              variant="filled"
              fullWidth
              error={!!errors.address}
              helperText={errors.address?.message}
              {...register("address", {
                required: "Address is required",
              })}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Dirección 2 (opcional)"
              variant="filled"
              fullWidth
              {...register("address2")}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Código postal"
              variant="filled"
              fullWidth
              error={!!errors.zipCode}
              helperText={errors.zipCode?.message}
              {...register("zipCode", {
                required: "Zip code is required",
              })}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Ciudad"
              variant="filled"
              fullWidth
              error={!!errors.city}
              helperText={errors.city?.message}
              {...register("city", {
                required: "City is required",
              })}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                select
                variant="filled"
                label="Pais"
                defaultValue={countries[0].code}
                error={!!errors.country}
                {...register("country", {
                  required: "Country is required",
                })}
                helperText={errors.city?.message}
              >
                {countries.map(({ code, name }) => (
                  <MenuItem value={code} key={code}>
                    {name}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Telefono"
              variant="filled"
              fullWidth
              error={!!errors.phone}
              helperText={errors.phone?.message}
              {...register("phone", {
                required: "Phone is required",
              })}
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: 5 }} justifyContent="center" display="flex">
          <Button
            className="circular-btn"
            color="secondary"
            size="large"
            type="submit"
          >
            Revisar pedido
          </Button>
        </Box>
      </form>
    </ShopLayout>
  );
};

// export const getServerSideProps: GetServerSideProps = async ({ req }) => {
//   const { token = "" } = req.cookies;
//   let tokenValid = false;

//   try {
//     await isValidToken(token);
//     tokenValid = true;
//   } catch (e) {
//     tokenValid = false;
//   }

//   if (!tokenValid) {
//     return {
//       redirect: {
//         destination: "/auth/login?page=/checkout/address",
//         permanent: false,
//       },
//     };
//   }

//   return { props: {} };
// };

export default AddressPage;
