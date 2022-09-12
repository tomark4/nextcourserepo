import { CardHeader, Grid, Card, CardContent } from "@mui/material";
import type { NextPage } from "next";
import Layout from "../components/layouts/Layout";
import EntryList from "../components/ui/EntryList";
import NewEntry from "../components/ui/NewEntry";

const Home: NextPage = () => {
  return (
    <Layout title="Open jira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Pendientes" />
            <NewEntry />
            <EntryList status="pending" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="En progreso" />
            <EntryList status="in-progress" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Completadas" />
            <EntryList status="finish" />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
