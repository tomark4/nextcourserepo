import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { useState } from "react";

interface Props {
  currentValue: number;
  maxValue: number;
  onChangeValue: (value: number) => void;
}

const ItemCounter = ({ currentValue, maxValue, onChangeValue }: Props) => {
  const [count, setCount] = useState(currentValue);

  const increment = () => {
    let total = count + 1;
    setCount(total);
    onChangeValue(total);
  };
  const decrement = () => {
    let total = count - 1;
    setCount(total);
    onChangeValue(total);
  };

  return (
    <Box display="flex" alignItems="center">
      <IconButton disabled={count === 1} onClick={decrement}>
        <RemoveCircleOutline />
      </IconButton>
      <Typography sx={{ width: 40, textAlign: "center" }}>{count}</Typography>
      <IconButton disabled={count === maxValue} onClick={increment}>
        <AddCircleOutline />
      </IconButton>
    </Box>
  );
};

export default ItemCounter;
