import { AuthLayout } from "../../components/layouts";
import { Box, Grid, TextField, Typography, Button, Link } from "@mui/material";
import NextLink from "next/link";

const RegisterPage = () => {
  return (
    <AuthLayout title="Login">
      <Box sx={{ width: 350, padding: "10px 20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h1" component="h1">
              Create account
            </Typography>
          </Grid>
          <Grid item xs={12} mt={2}>
            <TextField label="Full name" variant="filled" fullWidth></TextField>
          </Grid>
          <Grid item xs={12} mt={2}>
            <TextField label="Email" variant="filled" fullWidth></TextField>
          </Grid>
          <Grid item xs={12} mt={2}>
            <TextField
              label="Password"
              type="password"
              variant="filled"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12} mt={2}>
            <Button
              className="circular-btn"
              size="large"
              color="secondary"
              fullWidth
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
    </AuthLayout>
  );
};

export default RegisterPage;
