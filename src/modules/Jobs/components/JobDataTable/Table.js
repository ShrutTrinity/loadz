import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Data from '../../job.json'
import Empty from '../EmptyTable/Empty';

const columns = [
  { field: 'JobNo', headerName: 'Job No', width: 120 },
  { field: 'Customer', headerName: 'Customer', width: 150 },
  { field: 'Destination', headerName: 'Destination', width: 150 },
  { field: 'Material', headerName: 'Material', width: 120 },
  { field: 'Qty', headerName: 'Qty', type: 'number', width: 90 },
  { field: 'CompletedTickets', headerName: 'Completed Tickets', type: 'number', width: 150 },
  { field: 'LastActivity', headerName: 'Last Activity', width: 150 },
  { field: 'DateCreated', headerName: 'Date Created', width: 130 },
  { field: 'Status', headerName: 'Status', width: 120 },
  { field: 'InProgress', headerName: 'In Progress', width: 120 },
  { field: 'Edit', headerName: 'Edit', width: 100 },
];

const Table = () => {


  return (
    <>
      {
        Data.length === 0 ?
          <Empty /> :
          <div style={{ minHeight: '420px',width: '100%', marginBottom:'60px'}}>
            <DataGrid
            
              sx={{
                padding: '10px 10px 0 10px',
                margin: '10px 10px 0 10px',
                border: '2px solid gray',
                minHeight:'420px',
                borderRadius: '10px',
                '& .css-gl260s-MuiDataGrid-columnHeadersInner': {
                  backgroundColor: 'rgb(233 235 236 / 65%)'
                },
                '& .css-levciy-MuiTablePagination-displayedRows': {
                  margin: 0
                },
                '& ..css-204u17-MuiDataGrid-main':{
                  height:'420px'
                }
              }}
              rows={Data}
              columns={columns}
              hideFooter='true'
              checkboxSelection
            />
          </div>
      }
    </>
  )
}

export default Table
