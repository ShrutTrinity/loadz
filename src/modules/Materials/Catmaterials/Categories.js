import React from 'react';
import styles from './styles/catmaterials.module.scss';
import {
  Button,
  FormControl,
  InputAdornment,
  TextField,
} from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import { Link } from 'react-router-dom';
import CategoryIcon from '@mui/icons-material/Category';
import { Checkbox, IconButton, TableRow } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';

function createData(name, status) {
  return { name, status };
}

const rows = [
  createData('employeeA'),
  createData('employeeB'),
  createData('employeeC'),
  createData('employeeD'),
  createData('employeeE'),

];


const allStyle = {
  button: {
    background: 'rgb(0,0,0)',
    color: 'rgb(255,255,255)',
    fontSize: '13px',
    fontWeight: '300',
    margin: '3px 6px',
    borderRadius: '18px',
    textTransform: 'capitalize',
  },
  clearIcon: {
    cursor: 'pointer'
  },
  switchLable: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: '13px',
    marginRight: '8px',
  },
  switchLable2: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: '13px',
    marginLeft: '-16px',
    marginRight: '16px',
  }
}

const Categories = (props) => {

  const { handleDrawerClose, textSelectorOpen, toggleTextSelector, open } = props;

  const bodyStyle = {
    width: `calc(100% - ${open ? 290 : 0}px)`,
  }
  if (window.innerWidth <= 1300) {
    bodyStyle.width = '100%';
    var bodyclick = handleDrawerClose;
  }
  const [selectAll, setSelectAll] = useState(false);
  const [selected, setSelected] = useState(Array(rows.length).fill(false));

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



  return (
    <>
      <div className={styles.body} style={bodyStyle} onClick={textSelectorOpen ? toggleTextSelector : bodyclick}>
        <div className={styles.headerPart}>
          <div className={styles.headerName}>
            <CategoryIcon className={styles.blockIcon} />
            <span className={styles.headerText}>Category List</span>
          </div>

          <div className={styles.search}>
            <FormControl
              sx={{
                width: '100%',
                position: 'relative',
              }}
            >
              <TextField
                size="small"
                placeholder='Search'
                variant="outlined"
                sx={{
                  "& fieldset": { border: 'none' },
                  "& input::placeholder": {
                    fontSize: "13px",
                  },
                  '& .css-1q6at85-MuiInputBase-root-MuiOutlinedInput-root': {
                    borderRadius: '20px',
                  },
                  '& .css-1ua80n0-MuiInputBase-input-MuiOutlinedInput-input': {
                    padding: '7px'
                  },
                  boxShadow: ' rgba(0, 0, 0, 0.2) 4px 4px 4px',
                  flexGrow: 1,
                  width: '100%',
                  borderRadius: '20px',
                  backgroundColor: 'white',
                  '@media (max-width: 1200px)': {
                    width: '100%',
                  }
                }}
                InputProps={{
                  startAdornment: (
                    <>
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: 'black' }} />
                      </InputAdornment>
                    </>
                  )
                }}
              />
            </FormControl>
          </div>
          <div className={styles.buttonsContainer}>
            <Link to='/catmaterials/categories/new'>
              <Button
                variant="contained"
                style={allStyle.button}
              >
                Add Category
              </Button>
            </Link>

          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.content}>
            <TableContainer component={Paper} sx={{ boxShadow: 'none', padding: '20px', border: '1px solid black' }}>
              <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <TableHead sx={{ backgroundColor: 'rgb(219 224 229 / 25%)' }}>
                  <TableRow >
                    <TableCell >
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

                    <TableCell sx={{ fontWeight: "800", width: '40%' }} align="left">
                      {isAnyCheckboxSelected ? (
                        <IconButton aria-label="menu" sx={{ padding: '0px 8.5px' }}>
                          <MoreHorizIcon />
                        </IconButton>
                      ) : 'Name '}
                      Category
                    </TableCell>
                    <TableCell sx={{ fontWeight: "800" }}>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
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
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell >
                          <div className={styles.pendingDiv}>
                            <CheckCircleIcon sx={{ color: 'green' }} />
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>

            </TableContainer>
          </div>
        </div>
      </div>
    </>
  )
}

export default Categories
