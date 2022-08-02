import { CardHeader, Grid, Card, CardContent } from "@mui/material";
import type { NextPage } from "next";
import Layout from "./components/layouts/Layout";

const Home: NextPage = () => {
  return (
    <Layout title="Open jira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Pendientes" />
            <CardContent>
              {/*  TODO: Agregar una nueva tareas */}
              {/*  TODO: Listar las tareas */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="En progreso" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Completadas" />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
