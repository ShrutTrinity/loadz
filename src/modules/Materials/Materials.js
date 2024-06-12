import React from 'react';
import styles from './Styles/materials.module.scss';
import {
  Button,
  FormControl,
  InputAdornment,
  TextField,
} from '@mui/material';
import ShopIcon from '@mui/icons-material/Shop';
import { createStyles, makeStyles } from '@mui/styles';
import SearchIcon from "@mui/icons-material/Search";
import { Link } from 'react-router-dom';
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
import CategoryIcon from '@mui/icons-material/Category';

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


const allStyle = {
  button: {
    background: 'rgb(0,0,0)',
    color: 'rgb(255,255,255)',
    fontSize: '14px',
    fontWeight: '400',
    margin: '3px 6px',
    textTransform: 'none',
    borderRadius: '18px'
  }
}

const useStyles = makeStyles(() => {
  return createStyles({
    search: {
      margin: "3px",
    }, clearIcon: {
      cursor: 'pointer'
    }
  });
});

const Materials = (props) => {

  const bodyStyle = {
    width: `calc(100% - ${props.open ? 290 : 0}px)`,
  }
  if (window.innerWidth <= 1300) {
    bodyStyle.width = '100%';
    var bodyclick = props.handleDrawerClose;
  }
  const { search } = useStyles();
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

      <div className={styles.body} style={bodyStyle} onClick={props.textSelectorOpen ? props.toggleTextSelector : bodyclick}>
        <div className={styles.headerPart}>
          <div className={styles.headerName}>
            <ShopIcon className={styles.blockIcon} />
            <span className={styles.headerText}>Materials List</span>
          </div>

          <div className={styles.search}>
            <FormControl
              className={search}
              sx={{ width: '100%', position: 'relative' }}
            >
              <TextField
                size="small"
                placeholder='Search'
                variant="outlined"
                sx={{
                  "& fieldset": { border: 'none' },
                  "& input::placeholder": {
                    fontSize: "14px"
                  },
                  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(0, 0, 0, 0.23)',
                  },
                  '& .css-1q6at85-MuiInputBase-root-MuiOutlinedInput-root': {
                    borderRadius: '20px',
                  },
                  '& .css-1ua80n0-MuiInputBase-input-MuiOutlinedInput-input': {
                    padding: '7px'
                  },
                  boxShadow: ' 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);',
                  border: '0px',
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
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: 'black' }} />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </div>
          <div className={styles.buttonsContainer}>
            <Link to='/catmaterials/categories'>
              <Button
                variant="contained"
                style={allStyle.button}>
                <CategoryIcon sx={{ fontSize: '19px' }} />
                Categories
              </Button>
            </Link>
            <Link to='/e-commerce/materials/new'>
              <Button
                variant="contained"
                style={allStyle.button}>
                Add Material
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

                    <TableCell sx={{ fontWeight: "800", width: '40%' }}>
                      {isAnyCheckboxSelected ? (
                        <IconButton aria-label="menu" sx={{ padding: '0px 8.5px' }}>
                          <MoreHorizIcon />
                        </IconButton>
                      ) : 'Name '}
                      Material</TableCell>
                    <TableCell sx={{ fontWeight: "800" }}>Description</TableCell>
                    <TableCell sx={{ fontWeight: "800" }}>Cost</TableCell>
                    <TableCell sx={{ fontWeight: "800" }}>Active	</TableCell>
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
                          {row.number}
                        </TableCell>
                        <TableCell >{row.type}</TableCell>
                        <TableCell >{row.senttype}</TableCell>
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

export default Materials
