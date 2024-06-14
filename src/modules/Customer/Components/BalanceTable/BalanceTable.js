import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


const rows = [
  createData('Grand Total:'),
];

const BalanceTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead sx={{ backgroundColor: '#e7cc0b', fontWeight: 800 }}>
          <TableRow>
            <TableCell
              sx={{
                fontWeight: 800,
                fontSize: '16px'
              }}>
              Customer
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 800,
                fontSize: '16px'
              }}>
              Current
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 800,
                fontSize: '16px'
              }}>
              1-30
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 800,
                fontSize: '16px'
              }}>
              31-60
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 800,
                fontSize: '16px'
              }}>
              61-90
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 800,
                fontSize: '16px'
              }}>
              90
            </TableCell>
            <TableCell sx={{ fontWeight: 800, fontSize: '16px' }}>TOTAL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ backgroundColor: '#222' }}>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell
                sx={{
                  fontWeight: 800,
                  fontSize: '16px',
                  color: 'white'
                }}
                component="th"
                scope="row">
                {row.name}
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 800,
                  fontSize: '16px',
                  color: 'white'
                }}>
                {row.calories}
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 800,
                  fontSize: '16px',
                  color: 'white'
                }}>
                {row.fat}
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 800,
                  fontSize: '16px',
                  color: 'white'
                }}>
                {row.carbs}
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 800,
                  fontSize: '16px',
                  color: 'white'
                }}>
                {row.protein}
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 800,
                  fontSize: '16px',
                  color: 'white'
                }}>
                {row.protein}
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 800,
                  fontSize: '16px',
                  color: 'white'
                }}>
                {row.protein}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>   

  )
}

export default BalanceTable
