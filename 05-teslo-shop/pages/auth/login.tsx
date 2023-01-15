import { AuthLayout } from "../../components/layouts";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Link,
  Chip,
} from "@mui/material";
import NextLink from "next/link";
import { useForm } from "react-hook-form";
import validator from "validator";
import tesloApi from "../../api/teslo-api";
import { ErrorOutline } from "@mui/icons-material";
import { useState } from "react";

type Inputs = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onLoginUser = async ({ email, password }: Inputs) => {
    try {
      setError(false);
      const { data } = await tesloApi.post("/user/login", { email, password });
      const { token, user } = data;
      console.log(token, user);
      // TODO: navigate to user screen previous
    } catch (e) {
      setError(true);
      console.error("Error en las credenciales", e);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
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
              {error && (
                <Box mt={2}>
                  <Chip
                    label="User or password invalid"
                    color="error"
                    icon={<ErrorOutline />}
                    className="fadeIn"
                  />
                </Box>
              )}
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
