import { CardHeader, Grid, Card, CardContent } from "@mui/material";
import type { NextPage } from "next";
import Layout from "../components/layouts/Layout";
import EntryList from "../components/ui/EntryList";

const Home: NextPage = () => {
  return (
    <Layout title="Open jira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Pendientes" />
              {/*  TODO: Agregar una nueva tareas */}
              {/*  TODO: Listar las tareas */}
              <EntryList />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="En progreso" />
            <EntryList />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Completadas" />
            <EntryList />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
