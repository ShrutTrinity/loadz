import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Index from '@Jobs/components/switchForJob';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import AddTrailerDialog from './AddTrailerDialog';

function createData(num, vin, year, make) {
  return { num, vin,  year, make };
}

const initialRows = [ 
  createData('123432', 159,  2, 'a', 'a1'),
  createData('12345', 237, 3, 'b', 'a1'),
  createData('34543', 262, 4, 'c', 'a1'),
  createData('4567876', 305, 6, 'd', 'a1'),
  createData('765452', 356, 9, 'e', 'a1'),
];

const TrailerTable = (props) => {
  const [rows, setRows] = useState(initialRows);
  const [activeStates, setActiveStates] = useState(initialRows.map(() => true));
  const [openAddTrailer, setOpenAddTrailer] = useState(false);

  const handleToggle = (index) => {
    setActiveStates(prevStates =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  const handleCloseAddTrailer = () => {
    setOpenAddTrailer(false);
  };

  const handleOpenAddTrailerDialog = () => {
    setOpenAddTrailer(true);
  };

  const handleDelete = (index) => {
    setRows(prevRows => prevRows.filter((_, i) => i !== index));
    setActiveStates(prevStates => prevStates.filter((_, i) => i !== index));
  };

  const tablestyles = {
    container: {
      paddingBottom: '15px',
      position: 'relative',
      height: `${props.height - 65}px`,
      padding: '5px 15px 20px 5px',
      overflow: 'auto'
    },
    component: {
      borderBottom: '2px solid black',
      padding: '15px'
    },
    delete: {
      color: 'black',
      cursor: 'pointer',
    },
    history: {
      margin: '5px 15px'
    },
    addbtn: {
      color: 'black',
      fontWeight: '400',
      fontSize: '12px',
      textTransform: 'none',
      borderRadius: '20px',
      marginTop: '10px',
    },
    addicon: {
      marginRight: '10px',
      fontSize: '30px',
    }
  };

  return (
    <>
      <AddTrailerDialog open={openAddTrailer} onClose={handleCloseAddTrailer} />
      <TableContainer component={Paper} style={tablestyles.container}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell style={tablestyles.component}>Trailer No.</TableCell>
              <TableCell style={tablestyles.component}>Vin #</TableCell>
              <TableCell style={tablestyles.component}>Year</TableCell>
              <TableCell style={tablestyles.component}>Make</TableCell>
              <TableCell style={tablestyles.component}>Active</TableCell>
              <TableCell style={tablestyles.component}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row" style={tablestyles.component}>{row.num}</TableCell>
                <TableCell style={tablestyles.component}>{row.vin}</TableCell>
                <TableCell style={tablestyles.component}>{row.year}</TableCell>
                <TableCell style={tablestyles.component}>{row.make}</TableCell>
                <TableCell style={tablestyles.component}>
                  <Index
                    checked={activeStates[index]}
                    onChange={() => handleToggle(index)}
                  />
                </TableCell>
                <TableCell style={tablestyles.component}>
                  <DeleteIcon style={tablestyles.delete} onClick={() => handleDelete(index)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button
          sx={{ '&:hover': { backgroundColor: "lightgrey" } }}
          style={tablestyles.addbtn}
          onClick={handleOpenAddTrailerDialog}
        >
          <AddCircleIcon style={tablestyles.addicon} /> Add Trailer
        </Button>
      </TableContainer>
    </>
  );
};

export default TrailerTable;
