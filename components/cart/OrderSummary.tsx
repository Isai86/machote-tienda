import { Grid, Typography } from "@mui/material"


export const OrderSummary = () => {
  return (
    <Grid container>
        <Grid item xs={6}>
            <Typography>No. Productos</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography>3 items</Typography>
        </Grid>
        <Grid item xs={6}>
            <Typography>Subtotal</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography>{`$${155.00}`}</Typography>
        </Grid>
        <Grid item xs={6}>
            <Typography>IVA (16%)</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography>{`$${16.00}`}</Typography>
        </Grid>
        <Grid item xs={6} sx={{mt:2}}>
            <Typography variant="subtitle1">Total</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end' sx={{mt:2}}>
            <Typography variant="subtitle1">{`$${171.00}`}</Typography>
        </Grid>
    </Grid>
  )
}
