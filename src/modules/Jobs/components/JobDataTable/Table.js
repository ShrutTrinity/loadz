import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Data from '../../job.json'

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

    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    const handlePageChange = (params) => {
        setCurrentPage(params.page);
    };


    return (
        <>
            <div style={{ height: 420, width: '100%' }}>
                <DataGrid
                    sx={{
                        padding: '10px 10px 0 10px',
                        margin: '10px 10px 0 10px',
                        border: '2px solid gray',
                        borderRadius: '10px',
                        '& .css-gl260s-MuiDataGrid-columnHeadersInner':{
                                backgroundColor:'rgb(233 235 236 / 65%)'
                        },
                        '& .css-levciy-MuiTablePagination-displayedRows':{
                            margin:0
                        }
                    }}
                  
                    autoPageSize
                    // pageSizeOptions={[5, 10, 25]}
                    rows={Data}
                    columns={columns}
                    pageSize={rowsPerPage}
                    checkboxSelection
                    disableSelectionOnClick
                    pagination={10}
                    page={currentPage}
                    onPageChange={handlePageChange}
                    rowCount={Data.length} rowsPerPageOptions={[5]}
                />
            </div>

        </>
    )
}

export default Table
