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
import { ErrorOutline } from "@mui/icons-material";
import { useContext, useState } from "react";
import { AuthContext } from "../../context";
import { useRouter } from "next/router";

type Inputs = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [error, setError] = useState(false);
  const { loginUser } = useContext(AuthContext);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onLoginUser = async ({ email, password }: Inputs) => {
    setError(false);
    const resp = await loginUser(email, password);
    if (!resp) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }
    const destination = router.query.page?.toString() || "/";
    router.replace(destination);
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
              <NextLink
                href={
                  router.query.page
                    ? `/auth/register?page=${router.query.page}`
                    : "/auth/register"
                }
                passHref
              >
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
