import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
const globalStyles = {
  tableCell: {
    fontSize: '19px',
    fontWeight: 400,
    borderBottom: '1px solid #000',
  },
  tableRow: {
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
  },
  iconButton: {
    cursor: 'pointer',
  },
};

const DataTable = ({ formData, handleEdit, handleDeleteDialog }) => {
  return (
    <>
      {formData && formData.length > 0 && (
        <Table sx={{ maxWidth: 850, borderCollapse: 'collapse' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={globalStyles.tableCell} align="center">Name</TableCell>
              <TableCell style={globalStyles.tableCell} align="center">Type</TableCell>
              <TableCell style={globalStyles.tableCell} align="center">Special Rate</TableCell>
              <TableCell style={globalStyles.tableCell} align="center"></TableCell>
              <TableCell style={globalStyles.tableCell} align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {formData.map((item, index) => (
              <TableRow key={index} style={globalStyles.tableRow}>
                <TableCell style={globalStyles.tableCell} align="center">
                  {item.name === '' ? 'abc' : item.name}
                </TableCell>
                <TableCell style={globalStyles.tableCell} align="center">
                  {item.persionTypeValue}
                </TableCell>
                <TableCell style={globalStyles.tableCell} align="center">
                  ${item.rate}
                </TableCell>
                <TableCell style={globalStyles.tableCell} align="center">
                  <DeleteIcon style={globalStyles.iconButton} onClick={() => handleDeleteDialog(index)} />
                </TableCell>
                <TableCell style={globalStyles.tableCell} align="center">
                  <EditIcon style={globalStyles.iconButton} onClick={() => handleEdit(item)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
};

export default DataTable;