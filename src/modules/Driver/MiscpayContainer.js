import React, { useState } from 'react';
import styles from './style/miscpayContainer.module.scss';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FormControl, Input, InputAdornment, TableBody, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { v4 as uuidv4 } from 'uuid';

const MiscpayContainer = (props) => {
  const [Firstentries, setFirstEntries] = useState([]);
  const [Secondentries, setSecondEntries] = useState([]);
  const handleAddEntryForFirst = () => {
    const id = uuidv4();
    const date = document.getElementById('new-row-date');
    const reason = document.getElementById('new-row-reason').value;
    const amount = document.getElementById('new-row-amount').value;
    setFirstEntries([...Firstentries, { id, date, reason, amount }]);
    console.log("Date:", date);
    console.log("Reason:", reason);
    console.log("Amount:", amount);
  };
  const handleAddEntryForSecond = () => {
    const id = uuidv4();
    const date = document.getElementById('new-row-date-second');
    const reason = document.getElementById('new-row-reason-second').value;
    const amount = document.getElementById('new-row-amount-second').value;
    setSecondEntries([...Secondentries, { id, date, reason, amount }]);
    console.log("Date:", date);
    console.log("Reason:", reason);
    console.log("Amount:", amount);
  };

  const handleDeleteEntry = (id, listType) => {
    if (listType === 'first') {
      const newFirstEntries = Firstentries.filter(entry => entry.id !== id);
      setFirstEntries(newFirstEntries);
    } else if (listType === 'second') {
      const newSecondEntries = Secondentries.filter(entry => entry.id !== id);
      setSecondEntries(newSecondEntries);
    }
  };
  const tableStyles = {
    th: {
      background: 'black'
    },
    cell: {
      color: 'white',
    },
    textfield: {
      width: "100%",
      backgroundColor: 'white',
    },
    button: {
      backgroundColor: 'black',

      fontSize: '25px',
      padding: '0px 20px',
      borderRadius: '20px',
      color: 'rgb(237, 202, 51)',
      marginLeft: '10px'
    }
  };
  return (
    <>
      <div
        className={styles.tableCover}
        style={{ overflowY: 'auto' }}
      >
        <TableContainer
          component={Paper}
          sx={{ borderRadius: 0 }}
        >
          <Table
            aria-label="simple table"
          >
            <TableHead>
              <TableRow style={tableStyles.th}>
                <TableCell s
                  tyle={tableStyles.cell}
                  align="left"
                  sx={{ width: '5%' }}>
                </TableCell>

                <TableCell
                  style={tableStyles.cell}
                  align="left"
                  sx={{ width: '17%' }}>
                  Date
                </TableCell>

                <TableCell
                  style={tableStyles.cell}
                  align="left"
                  sx={{ width: '50%' }}>
                  Reason
                </TableCell>

                <TableCell
                  style={tableStyles.cell}
                  align="left"
                  sx={{ width: '10%' }}>
                  Amount
                </TableCell>

                <TableCell
                  style={tableStyles.cell}
                  align="left"
                  sx={{ width: '20%' }}>

                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              <TableRow sx={{ backgroundColor: 'rgba(0, 0, 0, 0.04)' }}>
                <TableCell align="center">
                  <button className={styles.addbtn}>+</button>
                </TableCell>
                <TableCell align="left" component="th" scope="row">
                  <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DatePicker
                      format='MM/DD'
                      inputProps={{ id: 'new-row-date' }}
                      defaultValue={props.defaultValue}
                      sx={{
                        backgroundColor: 'white', '& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root': {
                          fontSize: '14px'
                        }
                      }} />
                  </LocalizationProvider>
                </TableCell>
                <TableCell align="left">
                  <TextField
                    id="new-row-reason"
                    sx={{
                      '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                        padding: '3px',
                      },
                      '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(0, 0, 0, 0.23)'
                      },
                    }}
                    style={tableStyles.textfield} />
                </TableCell>
                <TableCell align="left">
                  <FormControl
                    fullWidth
                    sx={{
                      '& .css-1eed5fa-MuiInputBase-root-MuiInput-root::after ': {
                        borderBottom: '2px solid rgb(237, 202, 51)'
                      }
                    }} variant="standard">

                    <Input
                      type='number'
                      id="new-row-amount"
                      startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    />
                  </FormControl>
                </TableCell>
                <TableCell align="left">
                  <button className={styles.addbtn2} onClick={handleAddEntryForFirst}>+</button>
                </TableCell>
              </TableRow>

              <TableRow >
                <TableCell align="center">
                  <button className={styles.minusbtn}>-</button>
                </TableCell>
                <TableCell align="left" component="th" scope="row">
                  <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DatePicker
                      format='MM/DD'
                      defaultValue={props.defaultValue}
                      inputProps={{ id: 'new-row-date-second' }}
                      sx={{
                        backgroundColor: 'white',
                        '& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root': {
                          fontSize: '14px'
                        }
                      }} />
                  </LocalizationProvider>
                </TableCell>
                <TableCell align="left">
                  <TextField id="new-row-reason-second" sx={{
                    '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                      padding: '3px',
                    },
                    '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(0, 0, 0, 0.23)'
                    },
                  }} style={tableStyles.textfield} />
                </TableCell>
                <TableCell align="left">
                  <FormControl fullWidth sx={{
                    '& .css-1eed5fa-MuiInputBase-root-MuiInput-root::after ': {
                      borderBottom: '2px solid rgb(237, 202, 51)'
                    }
                  }} variant="standard">

                    <Input
                      type='number'
                      id="new-row-amount-second"
                      startAdornment={<InputAdornment position="start"  >$</InputAdornment>}
                    />
                  </FormControl>
                </TableCell>
                <TableCell align="left">
                  <button className={styles.addbtn2} onClick={handleAddEntryForSecond}>+</button>
                </TableCell>
              </TableRow>

              {/* First entry for update and Delete */}
              {Firstentries.map((entry, index) => (
                <TableRow key={entry.id}>
                  <TableCell align="center" sx={{ padding: '4px 16px' }}>
                    <button className={styles.addbtn}>+</button>
                  </TableCell>
                  <TableCell align="left" component="th" scope="row" sx={{ padding: '4px' }}>
                    {entry.date}
                  </TableCell>
                  <TableCell align="left" sx={{ padding: '4px 16px' }}>
                    <TextField id="new-row-reason" defaultValue={entry.reason} sx={{
                      '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                        padding: '3px',
                      },
                      '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(0, 0, 0, 0.23)'
                      },
                    }} style={tableStyles.textfield} /></TableCell>
                  <TableCell align="left" sx={{ padding: '4px 16px' }}>
                    <FormControl fullWidth sx={{
                      '& .css-1eed5fa-MuiInputBase-root-MuiInput-root::after ': {
                        borderBottom: '2px solid rgb(237, 202, 51)'
                      }
                    }} variant="standard">

                      <Input
                        type='number'
                        defaultValue={entry.amount}
                        id="new-row-amount-second"
                        startAdornment={<InputAdornment position="start"  >$</InputAdornment>}
                      />
                    </FormControl>
                  </TableCell>
                  <TableCell align="left"
                    sx={{
                      padding: '4px 2px',
                      display: 'flex'
                    }}>
                    <div style={tableStyles.button}>
                      <EditIcon />
                    </div>
                    <div style={tableStyles.button} onClick={() => handleDeleteEntry(entry.id, 'first')}>
                      <DeleteIcon />
                    </div>
                  </TableCell>
                </TableRow>
              ))}

              {/* second entry for update and Delete */}
              {Secondentries.map((entry, index) => (
                <TableRow key={entry.id}>
                  <TableCell align="center" sx={{ padding: '0px' }}>
                    <button className={styles.minusbtn}>-</button>
                  </TableCell>
                  <TableCell align="left" component="th" scope="row" sx={{ padding: '4px' }}>
                    {entry.date}
                  </TableCell>
                  <TableCell align="left" sx={{ padding: '4px 16px' }}>
                    <TextField id="new-row-reason" defaultValue={entry.reason} sx={{
                      '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                        padding: '3px',
                      },
                      '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(0, 0, 0, 0.23)'
                      },
                    }} style={tableStyles.textfield} />
                  </TableCell>
                  <TableCell align="left" sx={{ padding: '4px 16px' }}>
                    <FormControl fullWidth sx={{
                      '& .css-1eed5fa-MuiInputBase-root-MuiInput-root::after ': {
                        borderBottom: '2px solid rgb(237, 202, 51)'
                      }
                    }} variant="standard">
                      <Input
                        type='number'
                        defaultValue={entry.amount}
                        id="new-row-amount-second"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                      />
                    </FormControl>
                  </TableCell>
                  <TableCell align="left" sx={{ padding: '4px 2px', display: 'flex' }}>
                    <div style={tableStyles.button}>
                      <EditIcon />
                    </div>
                    <div style={tableStyles.button} onClick={() => handleDeleteEntry(entry.id, 'second')}>
                      <DeleteIcon />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

    </>
  )

}

export default MiscpayContainer
