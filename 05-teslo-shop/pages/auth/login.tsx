import { AuthLayout } from "../../components/layouts";
import { Box, Grid, TextField, Typography, Button, Link } from "@mui/material";
import NextLink from "next/link";
import { useForm } from "react-hook-form";
import validator from "validator";

type Inputs = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  console.log(errors);

  const onLoginUser = (values: Inputs) => {
    console.log(values);
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={handleSubmit(onLoginUser)} noValidate>
        <Box sx={{ width: 350, padding: "10px 20px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h1" component="h1">
                Login
              </Typography>
            </Grid>
            <Grid item xs={12} mt={2}>
              <TextField
                type="email"
                label="Correo"
                id="email"
                variant="filled"
                fullWidth
                {...register("email", {
                  required: "This field is required",
                  validate: {
                    isEmail: (value) =>
                      validator.isEmail(value) || "Invalid email",
                  },
                })}
                error={!!errors?.email}
                helperText={errors.email?.message}
              />
            </Grid>
            <Grid item xs={12} mt={2}>
              <TextField
                label="Password"
                type="password"
                id="password"
                variant="filled"
                fullWidth
                {...register("password", {
                  required: "This field is required",
                  minLength: { value: 6, message: "Password too short" },
                })}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </Grid>
            <Grid item xs={12} mt={2}>
              <Button
                className="circular-btn"
                size="large"
                color="secondary"
                fullWidth
                type="submit"
              >
                Ingresar
              </Button>
            </Grid>
            <Grid item xs={12} mt={2} display="flex" justifyContent="end">
              <NextLink href="/auth/register" passHref>
                <Link underline="always">Crear cuenta</Link>
              </NextLink>
            </Grid>
          </Grid>
        </Box>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
