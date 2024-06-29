import React, { useState } from 'react';
import styles from '../Styles/inProgress.module.scss';
import { FormControl, InputAdornment, TextField } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import SearchIcon from "@mui/icons-material/Search";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const useStyles = makeStyles(() => {
  return createStyles({
    search: {
      margin: "2px",
    }, clearIcon: {
      cursor: 'pointer'
    }
  });
});

function createData(TicketNo,Qty,Material,Driver,TruckNo,WaitTime,DateTimeUpdated,ReceivedBy) {
  return {TicketNo,Qty,Material,Driver,TruckNo,WaitTime,DateTimeUpdated,ReceivedBy};
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0,'shrut','80.0','edtr'),
];

const InProgress = () => {
  const { search } = useStyles();
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  return (
    <>
      <div className={styles.header}>
        Search Tickets by date and time:
      </div>
      <section className={styles.date}>
      </section>
      <div className={styles.searchCover}>
        <FormControl
          className={search}
          sx={{
            width: '100%',
            position: 'relative',
            backgroundColor: 'white',
            borderRadius: '18px',
            color: 'rgb(0,0,0)',
            '& .MuiOutlinedInput-root': {
              borderRadius: '18px',
            }
          }}
        >
          <TextField
            size="small"
            placeholder='Search Tickets'
            variant="outlined"
            value={searchValue}
            onChange={handleChange}
            sx={{
              '& .MuiOutlinedInput-input': {
                padding: '16px',
              },
              flexGrow: 1,
              '@media (max-width: 1200px)': {
                width: '100%',
                height: '100%',
              }
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </div>

      <div className={styles.table}>
        <TableContainer component={Paper} sx={{borderRadius:'18px'}}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align='center'>Ticket No.</TableCell>
                <TableCell align="center">Qty.</TableCell>
                <TableCell align="center">Material.</TableCell>
                <TableCell align="center">Driver.</TableCell>
                <TableCell align="center">Truck No.</TableCell>
                <TableCell align="center">Wait Time.</TableCell>
                <TableCell align="center">Date Time Updated.</TableCell>
                <TableCell align="center">Received By.</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" align="center" scope="row">{row.TicketNo}</TableCell>
                  <TableCell align="center">{row.Qty}</TableCell>  
                  <TableCell align="center">{row.Material}</TableCell>
                  <TableCell align="center">{row.Driver}</TableCell>
                  <TableCell align="center">{row.TruckNo}</TableCell>
                  <TableCell align="center">{row.WaitTime}</TableCell>
                  <TableCell align="center">{row.DateTimeUpdated}</TableCell>
                  <TableCell align="center">{row.ReceivedBy}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}

export default InProgress;