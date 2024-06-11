import React from 'react';
import { DataGrid, GridCellParams } from '@mui/x-data-grid';
import { makeStyles } from '@mui/styles';

const columns = [
  { field: 'unitType', headerName: 'Add Unit Type', width: 400, padding:'24px' },
  { field: 'metric', headerName: 'Metric', width: 400 },
  { field: 'createdDate', headerName: 'Date Created', width: 400 },
];

const rows = [
  { id: 1, unitType: 'Yards', metric: 'CY', createdDate: '2/20/2024' },
  { id: 2, unitType: 'Tons', metric: 'TN', createdDate: '2/20/2024' },
  { id: 3, unitType: 'Loads', metric: 'LDS', createdDate: '2/20/2024' },
  { id: 4, unitType: 'Hours', metric: 'HR', createdDate: '2/20/2024' },
  { id: 5, unitType: 'Yards', metric: 'CY', createdDate: '2/20/2024' },
  { id: 6, unitType: 'Tons', metric: 'TN', createdDate: '2/20/2024' },
];

const useStyles = makeStyles({
  paddedCell: {
    padding: '24px', // Adjust the padding as needed
  }
});

const UnitTable = () => {

  const classes = useStyles();

  const paddedCellRenderer = (params: GridCellParams) => {
    return <div className={classes.paddedCell}>{params.value}</div>;
  };

  const columnsWithPadding = columns.map(column => ({
    ...column,
    renderCell: (params: GridCellParams) => paddedCellRenderer(params),
  }));

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
      sx={{
        '& .MuiDataGrid-columnHeaderTitle':{
          padding:'0 24px',

        }
      }}
        rows={rows}
        columns={columnsWithPadding}
        rowClassName={classes.paddedRow}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default UnitTable;