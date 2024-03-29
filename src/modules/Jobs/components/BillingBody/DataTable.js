import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const DataTable = ({ formData, handleDelete, handleRowClick }) => {

  return (
    <>
      {formData && formData.length > 0 && ( 
        <Table sx={{ maxWidth: 550, borderTop:1 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: '17px' }}>Name</TableCell>
              <TableCell sx={{ fontSize: '17px' }} align="center">Type</TableCell>
              <TableCell sx={{ fontSize: '17px' }} align="center">Special Rate</TableCell>
              <TableCell sx={{ fontSize: '17px' }} align="center"></TableCell>
              <TableCell sx={{ fontSize: '17px' }} align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              formData.map((item, index) => (
                <TableRow key={index} sx={{ 'td': { border: 1, borderRight:'unset',borderTop:1}, 'th':{border:1} }}>
                  <TableCell sx={{ fontSize: '17px' }} align="center">{item.name === '' ? 'abc' : item.name}</TableCell>
                  <TableCell sx={{ fontSize: '17px' }} align="center">{item.persionTypeValue}</TableCell>
                  <TableCell sx={{ fontSize: '17px' }} align="center">${item.rate}</TableCell>
                  <TableCell sx={{ fontSize: '17px' }} align="center"><DeleteIcon onClick={() => handleDelete(index)} /></TableCell>
                  <TableCell sx={{ fontSize: '17px' }} align="center" onClick={() => handleRowClick(index)}> {/* Added index argument */}
                    <EditIcon />
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      )}
    </>
  )
}

export default DataTable;
