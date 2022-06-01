import { AddCircleOutlineOutlined, RemoveCircleOutlineOutlined } from "@mui/icons-material"
import { Box, IconButton, Typography } from "@mui/material"


interface Props{

}

export const ItemCounter: React.FC<Props> = () => {
  return (
    <Box display='flex' alignItems='center'>
        <IconButton>
            <RemoveCircleOutlineOutlined/>
        </IconButton>
        <Typography sx={{width: 40, textAlign: 'center'}}>1</Typography>
        <IconButton>
            <AddCircleOutlineOutlined/>
        </IconButton>
    </Box>
  )
}
