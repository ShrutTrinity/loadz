import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Index from '@Jobs/components/switchForJob';
import { useState } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import HistoryIcon from '@mui/icons-material/History';
import EditDriverDetail from '../../../Driver/EditDriverDetail';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button } from '@mui/material';
import AddDriverDialog from './AddDriverDialog';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const DriverTable = (props) => {
  const [activeStates, setActiveStates] = useState(
    rows.map(() => true)
  );

  const [editRowIndex, setEditRowIndex] = useState(null);
  const [openAddDriver, setOpenAddDriver] = useState(false);

  const handleToggle = (index) => {
    setActiveStates(prevStates =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

 const handleCloseAddDriver = () => {
    setOpenAddDriver(false)
  }
const  handleOpenAddDriverDialog = () => {
  console.log("call")
    setOpenAddDriver(true)
  }

  const handleOpen = (index) => {
    setEditRowIndex(index);
  };

  const handleClose = () => {
    setEditRowIndex(null);
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
    setting: {
      color: 'black',
      cursor: 'pointer',
    },
    modal: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    },
    history: {
      margin: '5px 15px'
    },
    addbtn: {
      color: 'black',
      fontWeight: '400',
      fontSize: '12px',
      textTransform: 'none',
      borderRadius:'20px',
      marginTop: '10px',


    },
    addicon: {
      marginRight: '10px',
      fontSize: '30px',

    }
  };

  return (
    <>
      <AddDriverDialog open={openAddDriver} onClose={handleCloseAddDriver}/>
      <EditDriverDetail open={editRowIndex !== null} onClose={handleClose} rows={rows} />
      <TableContainer component={Paper} style={tablestyles.container}>
        <HistoryIcon style={tablestyles.history} />
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell style={tablestyles.component}>Name</TableCell>
              <TableCell style={tablestyles.component}>Last Name</TableCell>
              <TableCell style={tablestyles.component}>Hourly Rate</TableCell>
              <TableCell style={tablestyles.component}>Commission Rate</TableCell>
              <TableCell style={tablestyles.component}>Active</TableCell>
              <TableCell style={tablestyles.component}>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" style={tablestyles.component}>
                  {row.name}
                </TableCell>
                <TableCell style={tablestyles.component}>{row.calories}</TableCell>
                <TableCell style={tablestyles.component}>{row.fat}</TableCell>
                <TableCell style={tablestyles.component}>{row.carbs}</TableCell>
                <TableCell style={tablestyles.component}>
                  <Index
                    checked={activeStates[index]}
                    onChange={() => handleToggle(index)}
                  />
                </TableCell>
                <TableCell style={tablestyles.component}>
                  <SettingsIcon style={tablestyles.setting} onClick={() => handleOpen(index)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button sx={{
          '&:hover': {
            backgroundColor: "lightgrey",
          },
        }} style={tablestyles.addbtn} onClick={handleOpenAddDriverDialog}> <AddCircleIcon style={tablestyles.addicon} /> Add Driver</Button>
      </TableContainer>

    </>
  );
};

export default DriverTable;
