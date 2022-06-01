import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React from 'react'
import { ShopLayout } from '../../components/layouts';

const AddresPage = () => {
  return (
    <ShopLayout title='Dirección' pageDescription={'Confirmar dirección del destino'}>
        <Typography variant='h1' component='h1'>Dirección</Typography>
        <Grid container spacing={2} sx={{mt:2}}>
            <Grid item xs={12} sm={6}>
                <TextField label='Nombre' variant='filled' fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Apellido' variant='filled' fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Dirección' variant='filled' fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Dirección 2' variant='filled' fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Código Postal' variant='filled' fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                    <InputLabel>Estado</InputLabel>
                    <Select
                    variant='filled'
                    label="Estado"
                    value={1}
                    >
                    <MenuItem value={1}>Estado de México</MenuItem>
                    <MenuItem value={2}>Ciudad de México</MenuItem>
                    <MenuItem value={3}>Hidalgo</MenuItem>
                    <MenuItem value={4}>Puebla</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Municipio' variant='filled' fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Referencia' variant='filled' fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Teléfono' variant='filled' fullWidth/>
            </Grid>
        </Grid>
        <Box sx={{mt:5}} display='flex' justifyContent='center' >
            <Button color='secondary' className='circular-btn' size='large'>
               Revisar Pedido 
            </Button>
        </Box>
    </ShopLayout>
  )
}

export default AddresPage;