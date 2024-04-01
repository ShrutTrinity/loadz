// DataTable.js

import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const DataTable = ({ formData, handleDelete, handleEdit }) => {
  return (
    <>
      {formData && formData.length > 0 && (
        <Table sx={{ maxWidth: 850, borderCollapse: 'collapse' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: '19px', fontWeight: 400, borderBottom: '1px solid #000' }}>Name</TableCell>
              <TableCell sx={{ fontSize: '19px', fontWeight: 400, borderBottom: '1px solid #000' }} align="center">Type</TableCell>
              <TableCell sx={{ fontSize: '19px', fontWeight: 400, borderBottom: '1px solid #000' }} align="center">Special Rate</TableCell>
              <TableCell sx={{ fontSize: '19px', fontWeight: 400, borderBottom: '1px solid #000' }} align="center"></TableCell>
              <TableCell sx={{ fontSize: '19px', fontWeight: 400, borderBottom: '1px solid #000' }} align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {formData.map((item, index) => (
              <TableRow key={index}>
                <TableCell sx={{
                  fontSize: '19px',
                  borderBottom: '1px solid #000',
                  borderRight: '1px solid #000'
                }}
                  align="center">{item.name === '' ? 'abc' : item.name}</TableCell>
                <TableCell sx={{
                  fontSize: '19px',
                  borderBottom: '1px solid #000',
                  borderRight: '1px solid #000'
                }}
                  align="center">{item.persionTypeValue}</TableCell>
                <TableCell sx={{ fontSize: '19px', borderBottom: '1px solid #000', borderRight: '1px solid #000' }} align="center">${item.rate}</TableCell>
                <TableCell sx={{ fontSize: '19px', borderBottom: '1px solid #000', borderRight: '1px solid #000' }} align="center">
                  <DeleteIcon sx={{ ":hover": { cursor: 'pointer' } }} onClick={() => handleDelete(index)} />
                </TableCell>
                <TableCell sx={{ fontSize: '19px', borderBottom: '1px solid #000' }} align="center">
                  <EditIcon sx={{ ":hover": { cursor: 'pointer' } }} onClick={() => handleEdit(item)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  )
}

export default DataTable;
