import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { ISize } from "../../interfaces";


interface Props{
    selectedSize?: ISize;
    sizes: ISize[];
}

export const SizeSelector: React.FC<Props> = ({selectedSize, sizes}) => {
  return (
    <Box>
        {
            sizes.map( size =>(
                <Button
                key={size}
                size='small'
                color={selectedSize === size ? 'primary' : 'info'}
                >
                    {size}
                </Button>
            ))
        }
    </Box>
  )
}
