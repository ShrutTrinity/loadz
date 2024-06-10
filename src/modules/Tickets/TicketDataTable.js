import React, { useState } from 'react';
import styles from './styles/Datatable.module.scss';
import { Checkbox, IconButton, TablePagination, TableFooter, TableRow } from '@mui/material'; 
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'; 
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

const TablePaginationActions = (props) => {
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = () => {
    onPageChange(0);
  };

  const handleBackButtonClick = () => {
    onPageChange(page - 1);
  };

  const handleNextButtonClick = () => {
    onPageChange(page + 1);
  };

  const handleLastPageButtonClick = () => {
    onPageChange(Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div style={{ flexShrink: 0, marginLeft: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        <FirstPageIcon />
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        <LastPageIcon />
      </IconButton>
    </div>
  );
};

const TicketDataTable = (props) => {

  const {rows} = props  
  const [selectAll, setSelectAll] = useState(false);
  const [selected, setSelected] = useState(Array(rows.length).fill(false));
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(1);

  const handleSelectAll = () => {
    const newSelected = Array(rows.length).fill(!selectAll);
    setSelected(newSelected);
    setSelectAll(!selectAll);
  };

  const handleCheckboxChange = (index) => {
    const newSelected = [...selected];
    newSelected[index] = !newSelected[index];
    setSelected(newSelected);
    setSelectAll(newSelected.every((value) => value === true));
  };

  const isAnyCheckboxSelected = selected.some((value) => value === true);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
     
        <div className={styles.container}>
          <div className={styles.content}>
            <TableContainer component={Paper} sx={{boxShadow:'none'}}>
              <Table  aria-label="caption table">
                <TableHead >
                  <TableRow >
                    <TableCell sx={{width:'50px',display:'flex' }}>
                      <Checkbox
                        sx={{
                          '&.Mui-checked': {
                            color: 'rgb(237, 202, 51)',
                          },
                        }}
                        checked={selectAll}
                        onChange={handleSelectAll}
                      />
                    {isAnyCheckboxSelected && (
                      <IconButton aria-label="menu" sx={{ padding: '0px' }}>
                        <MoreHorizIcon />
                      </IconButton>
                    )}
                    </TableCell>
                    <TableCell align="left" >
                    Name</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => (
                      <TableRow key={row.name} >
                        <TableCell sx={{width:'50px'}}>
                          <Checkbox
                            sx={{
                              '&.Mui-checked': {
                                color: 'rgb(237, 202, 51)',
                              },
                            }}
                            checked={selected[index]}
                            onChange={() => handleCheckboxChange(index)}
                          />
                        </TableCell>
                        <TableCell align='left'>{row.name}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
              <TableFooter sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center',border:'0px' }}>
                <TableRow sx={{
                  '& .css-fikjyc-MuiTableCell-root-MuiTablePagination-root':{
                  borderBottom:'0px'
                  }}
                  }
                  >
                  <TablePagination
                    rowsPerPageOptions={[1, 10, 25, { label: 'All', value: -1 }]}
                    colSpan={7}
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </TableContainer>
          </div>
        </div>
    </>
  )
}

export default TicketDataTable
