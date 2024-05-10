import React, { useState } from 'react';
import styles from './style/InvitationModel.module.scss';
import { Dialog, Checkbox, IconButton, TablePagination, TableFooter, TableRow } from '@mui/material'; // Import necessary components from MUI
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'; // Import Three-dot icon
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import BlockIcon from '@mui/icons-material/Block';
import EditIcon from '@mui/icons-material/Edit';
import EditDriverInvitation from './EditDriverInvitation';

function createData(number, type, senttype, valid, accept) {
  return { number, type, senttype, valid, accept };
}

const rows = [
  createData(23879675, 'employeeA', 'phone', 'valid', 'Pending'),
  createData(23879875, 'employeeB', 'phone', 'valid', 'Pending'),
  createData(23897675, 'employeeC', 'phone', 'valid', 'Pending'),
  createData(23872675, 'employeeD', 'phone', 'valid', 'Pending'),
  createData(23879675, 'employeeE', 'phone', 'valid', 'Pending'),

];

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

const Invitation = ({ openInvitationDialog, closeInvitationDialog }) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selected, setSelected] = useState(Array(rows.length).fill(false));
  const [page, setPage] = useState(0); 
  const [rowsPerPage, setRowsPerPage] = useState(1); 
  const [editDialog, setEditDialog] = useState(false);

  const handleSelectAll = () => {
    const newSelected = Array(rows.length).fill(!selectAll);
    setSelected(newSelected);
    setSelectAll(!selectAll);
  };

  const EditDailogOpen = ()=>{
    setEditDialog(true)
  }
  const EditDailogClose = ()=>{
    setEditDialog(false)
  }
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
    <EditDriverInvitation
        mailDialogOpen={editDialog}
        closeMailDialog={EditDailogClose}
      />
      <Dialog
        open={openInvitationDialog}
        onClose={closeInvitationDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper ': {
            maxWidth: 'unset',
            width: '90vw',
            borderRadius: '20px',
            fontSize: '10px !important'
          }
        }}
      >
        <div className={styles.container}>
          <div className={styles.heading}>
            Invitations
          </div>
          <div className={styles.content}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <TableHead sx={{ backgroundColor: 'rgb(219 224 229 / 25%)' }}>
                  <TableRow>
                    <TableCell>
                      <Checkbox
                      sx={{
                              '&.Mui-checked': {
                                color: 'rgb(237, 202, 51)',
                              },
                            }}
                        checked={selectAll}
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell>{isAnyCheckboxSelected && (
                      <IconButton aria-label="menu" sx={{ padding: '0px' }}>
                        <MoreHorizIcon />
                      </IconButton>
                    )}</TableCell>
                    <TableCell>Sent to</TableCell>
                    <TableCell>Invite Type	</TableCell>
                    <TableCell >Sent With</TableCell>
                    <TableCell>Invite Valid	</TableCell>
                    <TableCell>Invite Accepted	</TableCell>
                    <TableCell>Edit</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => (
                      <TableRow key={row.name}>
                        <TableCell>
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
                        <TableCell>
                          <div className={styles.Avatarimage}>
                            <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg" alt="avatar" />
                          </div>
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {row.number}
                        </TableCell>
                        <TableCell >{row.type}</TableCell>
                        <TableCell >{row.senttype}</TableCell>
                        <TableCell>{row.valid}</TableCell>
                        <TableCell >
                          <div className={styles.pendingDiv}>
                            <BlockIcon sx={{ color: 'red' }} />
                            {row.accept}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className={styles.pendingDiv2} onClick={EditDailogOpen}>
                            <EditIcon sx={{ color: 'rgb(237, 202, 51)' }} />
                            Edit
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
              <TableFooter sx={{ display: 'flex', justifyContent: 'flex-end',alignItems:'center' }}>
                <TableRow>
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
      </Dialog>
    </>
  );
}

export default Invitation;
