import React, { useState } from 'react';
import styles from './style/InvitationModel.module.scss';
import { Dialog, Checkbox, IconButton, Button } from '@mui/material'; // Import Checkbox, IconButton, and Button from MUI
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'; // Import Three-dot icon
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'; // Import NavigateBefore icon
import NavigateNextIcon from '@mui/icons-material/NavigateNext'; // Import NavigateNext icon

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
];

const Invitation = ({ openInvitationDialog, closeInvitationDialog }) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selected, setSelected] = useState(Array(rows.length).fill(false));
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    const newSelected = Array(rows.length).fill(!selectAll);
    setSelected(newSelected);
  };

  const handleCheckboxChange = (index) => {
    const newSelected = [...selected];
    newSelected[index] = !newSelected[index];
    setSelected(newSelected);
    setSelectAll(newSelected.every((value) => value === true));
  };

  const isAnyCheckboxSelected = selected.some((value) => value === true);

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
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
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Checkbox
                        checked={selectAll}
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell>
                      {isAnyCheckboxSelected && (
                        <IconButton aria-label="menu" sx={{padding:'0px'}}>
                          <MoreHorizIcon  />
                        </IconButton>
                      )}
                    </TableCell>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage).map((row, index) => (
                    <TableRow key={row.name}>
                      <TableCell>
                        <Checkbox
                          checked={selected[(currentPage - 1) * rowsPerPage + index]}
                          onChange={() => handleCheckboxChange((currentPage - 1) * rowsPerPage + index)}
                        />
                      </TableCell>
                      <TableCell>
                        <div className={styles.Avatarimage}>
                          <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg" alt="avatar" />
                        </div>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={7} align="right">
                      <Button
                        variant="contained"
                        color="primary"
                        disabled={currentPage === 1}
                        onClick={handlePreviousPage}
                        startIcon={<NavigateBeforeIcon />}
                      >
                        Previous
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        disabled={currentPage * rowsPerPage >= rows.length}
                        onClick={handleNextPage}
                        endIcon={<NavigateNextIcon />}
                      >
                        Next
                      </Button>
                      <Button variant="outlined">Page Set</Button>
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </TableContainer>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default Invitation;
