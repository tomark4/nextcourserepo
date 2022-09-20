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
import React, { ChangeEvent, useState } from "react";
import Layout from "../../components/layouts/Layout";
import { EntryStatus } from "../../interfaces/entry.interface";

const validStatus: EntryStatus[] = ["pending", "in-progress", "finish"];

const EntryPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState<EntryStatus>("pending");
  const [touched, setTouched] = useState<EntryStatus>();

  const onInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value as any);
  };

  const handleSave = () => {
    console.log({ inputValue, status });
  };

  return (
    <Layout>
      <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader
              title={`Entrada: ${inputValue}`}
              subheader={`Creada hace n minutos`}
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

export default EntryPage;
