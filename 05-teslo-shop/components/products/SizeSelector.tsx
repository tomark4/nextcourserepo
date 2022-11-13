import { Box, Button } from "@mui/material";
import { ValidSize } from "../../interfaces";

interface Props {
  sizes: ValidSize[];
  onSelectedSize: (size: ValidSize) => void;
  selectedSize?: ValidSize;
}

const SizeSelector = ({ sizes, onSelectedSize, selectedSize }: Props) => {
  return (
    <Box>
      {sizes.map((size, index) => (
        <Button
          sx={{ ml: index > 0 ? 2 : 0 }}
          key={size}
          size="small"
          color={selectedSize === size ? "secondary" : "info"}
          onClick={() => onSelectedSize(size)}
        >
          {size}
        </Button>
      ))}
    </Box>
  );
};

export default SizeSelector;
