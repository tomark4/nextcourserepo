import { ShopLayout } from "../../components/layouts";
import { DataGrid, GridRenderCellParams, GridColDef } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Chip, Link } from "@mui/material";
import NextLink from "next/link";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "fullname", headerName: "Full name", width: 300 },
  {
    field: "paid",
    headerName: "Pagada",
    description: "Order is paid ?",
    width: 200,
    renderCell: (params: GridRenderCellParams) => {
      return params.row.paid ? (
        <Chip color="success" label="Pagada" variant="outlined" size="small" />
      ) : (
        <Chip color="error" label="No pagada" variant="outlined" size="small" />
      );
    },
  },
  {
    field: "detail",
    headerName: "Detalles",
    width: 200,
    sortable: false,
    renderCell: (params: GridRenderCellParams) => (
      <NextLink href={`/orders/${params.row.id}`} passHref>
        <Link underline="always">Ver orden</Link>
      </NextLink>
    ),
  },
];

const rows = [
  { id: 1, paid: true, fullname: "Jose Quintero" },
  { id: 2, paid: false, fullname: "Jhon Doe" },
  { id: 3, paid: true, fullname: "Tony Stark" },
  { id: 4, paid: true, fullname: "Peter Parker" },
];

const HistoryPage = () => {
  return (
    <ShopLayout
      title="Historial de ordenes"
      pageDescription="Historial de ordenes"
    >
      <Typography variant="h1" component="h1">
        Historial de ordenes
      </Typography>
      <Grid container mt={2}>
        <Grid item xs={12} sx={{ height: 650, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={12}
            rowsPerPageOptions={[10]}
          />
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default HistoryPage;
