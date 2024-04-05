import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import paymentData from './PaymentData.json'

const columns = [
  { field: 'description', headerName: 'Description', width: 200 },
  { field: 'firstName', headerName: 'Job No.', width: 180 },
  { field: 'destination', headerName: 'Destination', width: 180 },
  { field: 'due_date', headerName: 'Due Date', width: 180 },
  { field: 'original_amount', headerName: 'Original Amount', width: 180 },
  { field: 'open_balance', headerName: 'Open Balance', width: 180 },
  { field: 'payments', headerName: 'Payments', width: 180 },
];


const PaymentDetailTable=()=> {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
      sx={{
        '& .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked':{
          color:'rgb(237, 202, 51)'
        }
      }}
        rows={paymentData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}

export default PaymentDetailTable