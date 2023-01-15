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
import { useContext, useState } from "react";
import { ErrorOutline } from "@mui/icons-material";
import { useRouter } from "next/router";
import { AuthContext } from "../../context";

type FormData = {
  name: string;
  email: string;
  password: string;
};

const RegisterPage = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const { registerUser } = useContext(AuthContext);

  const onRegisterForm = async (payload: FormData) => {
    setError(false);
    const resp = await registerUser(payload);
    const { hasError, message } = resp;
    if (hasError) {
      setError(true);
      setErrorMessage(message || "");
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }

    router.replace("/");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <AuthLayout title="Login">
      <form onSubmit={handleSubmit(onRegisterForm)} noValidate>
        <Box sx={{ width: 350, padding: "10px 20px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h1" component="h1">
                Create account
              </Typography>
              {error && (
                <Box mt={2}>
                  <Chip
                    label={errorMessage}
                    color="error"
                    icon={<ErrorOutline />}
                    className="fadeIn"
                  />
                </Box>
              )}
            </Grid>
            <Grid item xs={12} mt={2}>
              <TextField
                label="Full name"
                variant="filled"
                fullWidth
                error={!!errors.name}
                helperText={errors.name?.message}
                {...register("name", {
                  required: "Name is required",
                  minLength: { value: 2, message: "Name too short" },
                })}
              ></TextField>
            </Grid>
            <Grid item xs={12} mt={2}>
              <TextField
                type="email"
                label="Email"
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
              ></TextField>
            </Grid>
            <Grid item xs={12} mt={2}>
              <TextField
                label="Password"
                type="password"
                variant="filled"
                fullWidth
                {...register("password", {
                  required: "This field is required",
                  minLength: { value: 6, message: "Password too short" },
                })}
                error={!!errors.password}
                helperText={errors.password?.message}
              ></TextField>
            </Grid>
            <Grid item xs={12} mt={2}>
              <Button
                className="circular-btn"
                size="large"
                color="secondary"
                fullWidth
                type="submit"
              >
                Create account
              </Button>
            </Grid>
            <Grid item xs={12} mt={2} display="flex" justifyContent="end">
              <NextLink href="/auth/login" passHref>
                <Link underline="always">¿Do you have an account? Login</Link>
              </NextLink>
            </Grid>
          </Grid>
        </Box>
      </form>
    </AuthLayout>
  );
};

export default RegisterPage;
