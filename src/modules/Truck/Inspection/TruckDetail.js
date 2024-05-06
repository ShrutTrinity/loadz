import React from 'react';
import styles from './style/truckdetail.module.scss';
import Camion from '@images/camion.png';
import { Avatar } from '@mui/material';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const tableStyles = {
  th: {
    background: 'black'
  },
  cell: {
    color: 'white',
  }
}

const TruckDetail = () => {
  return (
    <>
      <div className={styles.heading}>
        <Avatar
          src={Camion}
        />
        <p className={styles.headers}>No: 1</p>
        <p className={styles.headers}>Status: Active</p>
        <p className={styles.headers}>Year: 202112</p>
        <p className={styles.headers}>Make: 2</p>
        <p className={styles.headers}>Model: sssc</p>
      </div>
      <div className={styles.box}>
        <div className={styles.tableCover}>
          <TableContainer
            component={Paper}
          >
            <Table
              sx={{
                minWidth: '100%',
                overflow: 'auto',
              }}
              aria-label="simple table">
              <TableHead>
                <TableRow style={tableStyles.th}>
                  <TableCell
                    style={tableStyles.cell}
                    align="center"
                  >
                    Inspection No:
                  </TableCell>
                  <TableCell
                    style={tableStyles.cell}
                    align="center"
                  >
                    Date
                  </TableCell>
                  <TableCell
                    style={tableStyles.cell}
                    align="center"
                  >
                    QTY Of Issues
                  </TableCell>
                  <TableCell
                    style={tableStyles.cell}
                    align="center"
                  >
                    Inspection Truck Satisfactory
                  </TableCell>
                  <TableCell
                    style={tableStyles.cell}
                    align="center"
                  >
                    Inspection Release
                  </TableCell>
                  <TableCell
                    style={tableStyles.cell}
                    align="center"
                  >
                    Trip Type
                  </TableCell>
                  <TableCell
                    style={tableStyles.cell}
                    align="center"
                  >
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>
              {/* <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody> */}
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  )
}

export default TruckDetail;