import { AddCircleOutlineOutlined, SaveOutlined } from "@mui/icons-material";
import { Button, Box, TextField } from "@mui/material";
import React, { ChangeEvent, useState, useContext } from "react";
import EntriesContext from "../../context/entries/EntriesContext";
import UiContext from "../../context/ui/UiContext";

const NewEntry = () => {
  const [inputValue, setInputValue] = useState("");
  const [touched, setTouched] = useState(false);
  const { addNewEntry } = useContext(EntriesContext);
  const { setIsAddingEntry, isAdding } = useContext(UiContext);

  const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSave = () => {
    if (inputValue.length === 0) return;

    addNewEntry(inputValue);
    setIsAddingEntry(false);
    setTouched(false);
    setInputValue("");
  };

  return (
    <>
      {!isAdding && (
        <Box sx={{ marginBottom: 2, paddingX: 10 }}>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<AddCircleOutlineOutlined />}
            onClick={() => setIsAddingEntry(true)}
          >
            Agregar tarea
          </Button>
        </Box>
      )}

      {isAdding && (
        <Box sx={{ paddingX: 10 }}>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder="Nueva entrada"
            autoFocus
            multiline
            label="Nueva entrada"
            helperText={inputValue.length <= 0 && touched && "Ingrese un valor"}
            value={inputValue}
            onChange={onTextChange}
            onBlur={() => setTouched(true)}
            error={inputValue.length <= 0 && touched}
          />

          <Box display="flex" justifyContent="space-between">
            <Button variant="text" onClick={() => setIsAddingEntry(false)}>
              Cancelar
            </Button>
          </Box>
          <Box>
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveOutlined />}
              onClick={onSave}
            >
              Guardar
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default NewEntry;
