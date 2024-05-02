import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Data from '../../FuelData.json';

const columns = [
  { field: 'TruckNo', headerName: 'Truck No', width: 110 },
  { field: 'Drivers', headerName: 'Drivers', width: 110 },
  { field: 'Mileage', headerName: 'Mileage', width: 110 },
  { field: 'FuelGallons', headerName: 'Fuel Gallons', width: 130 },
  { field: 'FuelRate', headerName: 'Fuel Rate', width: 110 },
  { field: 'FuelTotal', headerName: 'Fuel Total', width: 110 },
  { field: 'DefQty', headerName: 'Def Qty', width: 110 },
  { field: 'DefRate', headerName: 'Def Rate', width: 110 },
  { field: 'DefTotal', headerName: 'Def Total', width: 110 },
  { field: 'Image', headerName: 'Image', width: 200 },
  { field: 'Date', headerName: 'Date', width: 120 },
];

const FuelData = () => {
  return (
    <>
          <div style={{ minHeight: '300px',width: '100%', marginBottom:'60px'}}>
            <DataGrid      
              sx={{
                padding: '10px 10px 0 10px',
                margin: '10px 10px 0 10px',
                border: '2px solid gray',
                minHeight:'320px',
                borderRadius: '18px',
                '& .css-gl260s-MuiDataGrid-columnHeadersInner': {
                  backgroundColor: 'rgb(233 235 236 / 65%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                '& .css-levciy-MuiTablePagination-displayedRows': {
                  margin: 0
                },
                '& .MuiDataGrid-cell': {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'start',
                },
                '& ..css-204u17-MuiDataGrid-main':{
                  height:'420px'
                }
              }}
              rows={Data}
              columns={columns}
              hideFooter='true'
            />
          </div>
    </>
  )
}

export default FuelData;