import React, { useState, useEffect, useRef } from 'react';
import styles from './style/reportTable.module.scss';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableBody } from '@mui/material';
import rows from './driverDetail.json';

const tableStyles = {
  th: {
    background: 'black'
  },
  cell: {
    color: 'white',
  }
};

const ReportTable = (props) => {
  const [visibleRows, setVisibleRows] = useState([]);
  const [endIndex, setEndIndex] = useState(1);
  const tableRef = useRef();

  useEffect(() => {
    setVisibleRows(rows.slice(0, 2));
  }, []);

  // Load more rows when scrolling to the bottom
  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = tableRef.current;
    if (scrollTop + clientHeight >= scrollHeight && endIndex < rows.length - 1) {
      const newEndIndex = Math.min(rows.length - 1, endIndex + 2); // Load additional 2 rows
      setVisibleRows(rows.slice(0, newEndIndex + 1)); // Update visibleRows with new rows
      setEndIndex(newEndIndex);
    }
  };

  return (
    <>
      <div className={styles.box} style={{height:`${props.height}`}}>
        <div
          className={styles.tableCover}
          style={{ maxHeight: '400px', overflowY: 'auto' }}
          ref={tableRef}
          onScroll={handleScroll}
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
                  <TableCell style={tableStyles.cell} align="left">Start</TableCell>
                  <TableCell style={tableStyles.cell} align="left">End</TableCell>
                  <TableCell style={tableStyles.cell} align="left">Commission</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {visibleRows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell align="left" component="th" scope="row">
                      {row.Start}
                    </TableCell>
                    <TableCell align="left">{row.End}</TableCell>
                    <TableCell align="left">{row.Commission}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};

export default ReportTable;
