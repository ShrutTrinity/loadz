import React, { useState } from 'react';
import rows from '../../job.json';
import Empty from '../EmptyTable/Empty';
import styles from './styles/datatable.module.scss';
import { Checkbox, IconButton, TableRow } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LockOpenIcon from '@mui/icons-material/LockOpen';

const Tables = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [selected, setSelected] = useState(Array(rows.length).fill(false));

  const handleCheckboxChange = (index) => {
    const newSelected = [...selected];
    newSelected[index] = !newSelected[index];
    setSelected(newSelected);
    setSelectAll(newSelected.every((value) => value === true));
  };

  const handleSelectAll = () => {
    const newSelected = Array(rows.length).fill(!selectAll);
    setSelected(newSelected);
    setSelectAll(!selectAll);
  };

  const isAnyCheckboxSelected = selected.some((value) => value === true);

  const handleRowClick = (jobNo) => {
    window.location.href = `jobs/ticket`;
  };

  return (
    <>
      {rows.length === 0 ? (
        <Empty />
      ) : (
        <div style={{ minHeight: '420px', width: '100%', marginBottom: '60px' }}>
          <TableContainer
            component={Paper}
            sx={{
              boxShadow: 'none',
              border: '1px solid black',
              padding: '20px',
            }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
              <TableHead sx={{ backgroundColor: 'rgb(219 224 229 / 25%) ' }}>
                <TableRow>
                  <TableCell align="center">
                    <Checkbox
                      sx={{
                        '&.Mui-checked': {
                          color: 'rgb(237, 202, 51)',
                        },
                      }}
                      checked={selectAll}
                      onChange={handleSelectAll}
                    />
                    <br />
                    {isAnyCheckboxSelected && (
                      <IconButton aria-label="menu" sx={{ padding: '0px' }}>
                        <MoreHorizIcon />
                      </IconButton>
                    )}
                  </TableCell>
                  <TableCell align="center">Job No.</TableCell>
                  <TableCell align="center">Customer</TableCell>
                  <TableCell align="center">Destination</TableCell>
                  <TableCell align="center">Material</TableCell>
                  <TableCell align="center">Qty</TableCell>
                  <TableCell align="center">Completed <br /> Tickets</TableCell>
                  <TableCell align="center">Last <br /> Activity</TableCell>
                  <TableCell align="center">Date <br /> Created</TableCell>
                  <TableCell align="center">Status</TableCell>
                  <TableCell align="center">In <br /> Progress</TableCell>
                  <TableCell align="center">Edit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    key={row.name}
                    onClick={() => handleRowClick(row.JobNo)}
                    style={{ cursor: 'pointer' }}
                  >
                    <TableCell align="center">
                      <Checkbox
                        sx={{
                          '&.Mui-checked': {
                            color: 'rgb(237, 202, 51)',
                          },
                        }}
                        checked={selected[index]}
                        onChange={() => handleCheckboxChange(index)}
                        onClick={(e) => e.stopPropagation()} 
                      />
                    </TableCell>
                    <TableCell align="center" component="th" scope="row">
                   {row.JobNo}
                    </TableCell>
                    <TableCell align="center">{row.Customer}</TableCell>
                    <TableCell align="center">{row.Destination}</TableCell>
                    <TableCell align="center">{row.Material}</TableCell>
                    <TableCell align="center">{row.Qty}</TableCell>
                    <TableCell align="center">{row.CompletedTickets}</TableCell>
                    <TableCell align="center">{row.LastActivity}</TableCell>
                    <TableCell align="center">{row.DateCreated}</TableCell>
                    <TableCell align="center">
                      <div className={styles.pendingDiv}>
                        <CheckCircleIcon sx={{ color: 'green' }} />
                        {row.accept}
                      </div>
                    </TableCell>
                    <TableCell align="center">
                      <div className={styles.pendingDiv}>
                        <LockOpenIcon />
                        {row.accept}
                      </div>
                    </TableCell>
                    <TableCell align="center">
                      <div className={styles.pendingDiv2}>
                        <EditIcon />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </>
  );
};

export default Tables;
