import { DeleteOutlined, SaveOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  capitalize,
  IconButton,
} from "@mui/material";
import { GetServerSideProps } from "next";
import React, { ChangeEvent, FC, useContext, useMemo, useState } from "react";
import Layout from "../../components/layouts/Layout";
import { Entry, EntryStatus } from "../../interfaces/entry.interface";
import { getEntryById } from "../../database/db-entries";
import EntriesContext from "../../context/entries/EntriesContext";
import { useSnackbar } from "notistack";
import { getFormatDistanceToNow } from "../../utils/dateFunctions";

const validStatus: EntryStatus[] = ["pending", "in-progress", "finish"];

interface Props {
  entry: Entry;
}

const EntryPage: FC<Props> = ({ entry }) => {
  const [inputValue, setInputValue] = useState(entry.description);
  const [status, setStatus] = useState<EntryStatus>(entry.status);
  const [touched, setTouched] = useState(false);
  const { updateEntry } = useContext(EntriesContext);
  const { enqueueSnackbar } = useSnackbar();

  const isNotValid = useMemo(
    () => inputValue.length <= 0 && touched,
    [touched, inputValue]
  );

  const onInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value as any);
  };

  const handleSave = () => {
    if (inputValue.trim().length === 0) return;

    const entryUpdated: Entry = {
      ...entry,
      description: inputValue,
      status,
    };
    updateEntry(entryUpdated);

    enqueueSnackbar("Entry updated!", {
      variant: "success",
      autoHideDuration: 800,
      anchorOrigin: { vertical: "top", horizontal: "right" },
    });
  };

  return (
    <Layout title={inputValue.substring(0, 20) + "..."}>
      <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader
              title={`Entrada: ${inputValue}`}
              subheader={`Creada hace ${getFormatDistanceToNow(
                entry.createdAt
              )}`}
            />
            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                placeholder="Nueva entrada"
                autoFocus
                multiline
                label="Nueva entrada"
                value={inputValue}
                onChange={onInputValueChange}
                helperText={isNotValid && "Ingresa un valor"}
                onBlur={() => setTouched(true)}
                error={isNotValid}
              />

              <FormControl>
                <FormLabel>Status</FormLabel>
                <RadioGroup
                  row
                  onChange={onStatusChange}
                  value={status}
                  name="status"
                >
                  {validStatus.map((item) => (
                    <FormControlLabel
                      key={item}
                      value={item}
                      control={<Radio />}
                      label={capitalize(item)}
                    />
                  ))}
                </RadioGroup>
              </FormControl>

              <CardActions>
                <Button
                  onClick={handleSave}
                  startIcon={<SaveOutlined />}
                  variant="contained"
                  fullWidth
                  disabled={inputValue.length <= 0}
                >
                  Save
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <IconButton
        sx={{
          position: "fixed",
          bottom: 30,
          right: 30,
          backgroundColor: "red",
          color: "white",
        }}
      >
        <DeleteOutlined />
      </IconButton>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };

  const entry = await getEntryById(id);

  if (!entry) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      entry,
    },
  };
};

export default EntryPage;
