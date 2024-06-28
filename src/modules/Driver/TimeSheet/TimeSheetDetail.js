import React, { useState, useEffect } from 'react';
import styles from './style/timeSheetDetail.module.scss';
import MailIcon from '@mui/icons-material/Mail';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { format, startOfWeek, addDays } from 'date-fns';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableBody, Button, } from '@mui/material';
import rows1 from '../driverDetail.json';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import DeleteIcon from '@mui/icons-material/Delete';
import ShiftTimeInput, { NewShiftTimeInput } from './ShiftTimeInput';

const generateDateRanges = (numWeeks = 10) => {
  const startDate = startOfWeek(new Date(), { weekStartsOn: 1 });
  const dateRanges = [];

  for (let i = 0; i < numWeeks; i++) {
    const start = addDays(startDate, i * 7);
    const end = addDays(start, 6);
    dateRanges.push({
      start,
      end,
      label: `${format(start, 'EEEE, MMMM do yyyy')} to ${format(end, 'EEEE, MMMM do yyyy')}`
    });
  }

  return dateRanges;
};

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  '&.Mui-selected': {
    backgroundColor: 'rgba(237, 202, 51, 0.08)',
    '&:hover': {
      backgroundColor: 'rgba(237, 202, 51, 0.16)',
    },
  },
}));

const TimeSheetDetail = () => {
  const tableStyles = {
    th: {
      background: 'white'
    },
    cell: {
      color: 'black',
    },
    deletebtn: {
      cursor: 'pointer'
    },
    updateBtn:{
      color: 'rgb(237, 202, 51)',
      textTransform: 'none',
    }
  };

  const [selectedRange, setSelectedRange] = useState('');
  const [dateRanges, setDateRanges] = useState([]);
  const [expandedRows, setExpandedRows] = useState({});
  const [rows, setRows] = useState([]);
  const [newShift, setNewShift] = useState({
    'Clock In': { hours: '', minutes: '', period: 'AM' },
    'Clock Out': { hours: '', minutes: '', period: 'AM' },
    'Lunch In': { hours: '', minutes: '', period: 'AM' },
    'Lunch Out': { hours: '', minutes: '', period: 'AM' }
  });

  useEffect(() => {
    const ranges = generateDateRanges();
    setDateRanges(ranges);
    setSelectedRange(ranges[0].label);
  }, []);

  const handleChangeRange = (event) => {
    setSelectedRange(event.target.value);
  };

  const handleRowClick = (index) => {
    setExpandedRows(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const handleInputChangeForShift = (e, index, field, part) => {
    const updatedRows = [...rows];
    updatedRows[index][field][part] = e.target.value;
    setRows(updatedRows);
  };

  const handleInputChangeForNewShift = (e, field, part) => {
    setNewShift({
      ...newShift,
      [field]: { ...newShift[field], [part]: e.target.value }
    });
  };

  const handleCreateShift = () => {
    setRows([...rows, newShift]);
    setNewShift({
      'Clock In': { hours: '', minutes: '', period: 'AM' },
      'Clock Out': { hours: '', minutes: '', period: 'AM' },
      'Lunch In': { hours: '', minutes: '', period: 'AM' },
      'Lunch Out': { hours: '', minutes: '', period: 'AM' }
    });
  };

  const handleDeleteShift = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  return (
    <>
      <div className={styles.heading}></div>
      <section className={styles.body}>
        <section className={styles.driverDetails}>
          <h4 className={styles.driverName}>KENT DODDS</h4>
          <div className={styles.details}>
            <section className={styles.mainCol}>
              <h4 className={styles.detail}>Address: ...</h4>
              <h4 className={styles.detail}>Email: ...</h4>
              <h4 className={styles.detail}>Phone Number:
                <span className={styles.number}>
                  (635) 328-4017
                </span>
              </h4>
            </section>
            <section className={styles.mailCol}>
              <MailIcon />
            </section>
          </div>
        </section>

        <section className={styles.timeSelector}>
          <FormControl fullWidth>
            <InputLabel id="date-range-select-label"></InputLabel>
            <Select
              labelId="date-range-select-label"
              id="date-range-select"
              value={selectedRange}
              onChange={handleChangeRange}
              sx={{
                padding: '6px 9px',
                fontSize: '14px',
                maxHeight: '200px'
              }}
            >
              {dateRanges.map((range, index) => (
                <CustomMenuItem key={index} value={range.label}>
                  {range.label}
                </CustomMenuItem>
              ))}
            </Select>
          </FormControl>
        </section>
      </section>
      <div className={styles.tableCover}>
        <TableContainer component={Paper} sx={{ borderRadius: 0 }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow style={tableStyles.th}>
                <TableCell />
                <TableCell style={tableStyles.cell} align="left">	Date</TableCell>
                <TableCell style={tableStyles.cell} align="left">Regular Time (hr:min)	</TableCell>
                <TableCell style={tableStyles.cell} align="left">Over Time (hr:min)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows1.map((row, index) => (
                <React.Fragment key={index}>
                  <TableRow onClick={() => handleRowClick(index)}>
                    <TableCell>
                      {expandedRows[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </TableCell>
                    <TableCell align="left" component="th" scope="row">
                      {row.Start}
                    </TableCell>
                    <TableCell align="left">{row.End}</TableCell>
                    <TableCell align="left">{row.Commission}</TableCell>
                  </TableRow>

                  {expandedRows[index] && (
                    <TableRow>
                      <TableCell colSpan={4}>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell align="center">Clock In</TableCell>
                              <TableCell align="center">Clock Out</TableCell>
                              <TableCell align="center">Lunch In</TableCell>
                              <TableCell align="center">Lunch Out</TableCell>
                              <TableCell align="center">Breaks</TableCell>
                              <TableCell />
                              <TableCell />
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {rows.map((shift, index) => (
                              <TableRow key={`shift-${index}`}>
                                <ShiftTimeInput
                                  shiftPart={'Clock In'}
                                  onChange={handleInputChangeForShift}
                                  shift={shift}
                                  index={index} />
                                <ShiftTimeInput
                                  shiftPart={'Clock Out'}
                                  onChange={handleInputChangeForShift}
                                  shift={shift}
                                  index={index} />

                                <ShiftTimeInput
                                  shiftPart={'Lunch In'}
                                  onChange={handleInputChangeForShift}
                                  shift={shift}
                                  index={index} />
                                <ShiftTimeInput
                                  shiftPart={'Lunch Out'}
                                  onChange={handleInputChangeForShift}
                                  shift={shift}
                                  index={index} />

                                

                                <TableCell align="center" style={tableStyles.updateBtn}>Breaks</TableCell>
                                <TableCell align="center">
                                  <Button style={tableStyles.updateBtn} >
                                    Update Shift
                                  </Button>
                                </TableCell>
                                <TableCell align="center">
                                  <DeleteIcon style={tableStyles.deletebtn} onClick={() => handleDeleteShift(index)} />
                                </TableCell>
                              </TableRow>
                            ))}
                            <TableRow>
                            <NewShiftTimeInput
                                  shiftPart={'Clock In'}
                                  onChange={handleInputChangeForNewShift}
                                  shift={newShift}
                                   />
                            <NewShiftTimeInput
                                  shiftPart={'Clock Out'}
                                  onChange={handleInputChangeForNewShift}
                                  shift={newShift}
                                   />
                            <NewShiftTimeInput
                                  shiftPart={'Lunch In'}
                                  onChange={handleInputChangeForNewShift}
                                  shift={newShift}
                                   />
                            <NewShiftTimeInput
                                  shiftPart={'Lunch Out'}
                                  onChange={handleInputChangeForNewShift}
                                  shift={newShift}
                                   />

                              <TableCell align="center" style={tableStyles.updateBtn}>Breaks</TableCell>
                              <TableCell align="center">
                                <Button style={tableStyles.updateBtn} onClick={handleCreateShift}>
                                  Create Shift
                                </Button>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                        <div className={styles.shiftActions}></div>
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default TimeSheetDetail;