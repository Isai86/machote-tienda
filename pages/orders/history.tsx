import NextLink from "next/link";
import { Chip, Grid, Link, Typography } from '@mui/material'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import { ShopLayout } from '../../components/layouts'

const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width:100},
    {field: 'Fullname', headerName: 'Nombre Completo', width:300},
    {
        field: 'paid',
        headerName:'Pagada',
        description: 'Muestra información si está pagada o no ',
        width:200,
        renderCell: (params: GridValueGetterParams) =>{
            return (
                params.row.paid ?
                <Chip color='success' label='Pagada' variant='outlined'/> :
                <Chip color='error' label='No pagada' variant='outlined'/>
            )
        }
    },
    {field: 'order', 
    headerName: 'Ver ordén', 
    width:200,
    sortable:false,
    renderCell:(params: GridValueGetterParams) =>{
        return(
            <NextLink href={`/orders/${params.row.id}`} passHref>
            <Link display='flex' alignItems='center' underline="always">
               Ver Orden
            </Link>
           </NextLink> 
        )
    }
}
]

const rows =[
    {id:1,paid: true, Fullname:'Isai Trejo Durán'},
    {id:2,paid: true, Fullname:'Berenice González'},
    {id:3,paid: false, Fullname:'David Emmanuel Trejo'},
    {id:4,paid: true, Fullname:'Iker Trejo González'},
    {id:5,paid: true, Fullname:'Isai Trejo González'},
    {id:6,paid: false, Fullname:'Miguel Angel Trejo Durán'},
    {id:7,paid: true, Fullname:'Selene Janet Trejo Durán'},
]

const HistoryPage = () => {
  return (
    <ShopLayout title={'Historial de ordenes'} pageDescription={'Historial de ordenes del cliente'}>
        <Typography variant='h1' component='h1'>Historial de Ordenes</Typography>
        <Grid container>
            <Grid item xs={12} sx={{height:650, width:'100%'}}>
                <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                />
            </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default HistoryPage