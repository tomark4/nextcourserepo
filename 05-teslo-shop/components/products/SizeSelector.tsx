import { Box, Button } from "@mui/material";
import { ValidSize } from "../../interfaces";

interface Props {
  selectedSize?: ValidSize;
  sizes: ValidSize[];
}

const SizeSelector = ({ selectedSize, sizes }: Props) => {
  return (
    <Box>
      {sizes.map((size) => (
        <Button key={size} size="small" color="info">
          {size}
        </Button>
      ))}
    </Box>
  );
};

export default SizeSelector;
