import React, { useState } from 'react';
import styles from './style/fuelLogList.module.scss';
import {
  Button,
  FormControl,
  InputAdornment,
  TextField,
} from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { createStyles, makeStyles } from '@mui/styles';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Index from '../../Jobs/components/switchForJob';
import FuelData from './Components/FuelDataTable/FuelData';
import MileageReportDialog from './Components/MileageReport/MileageReportDialog';

const useStyles = makeStyles(() => {
  return createStyles({
    search: {
      margin: "2px",
    }, clearIcon: {
      cursor: 'pointer'
    }
  });
});

const FuelLogStyle = {
  button: {
    background: 'rgb(0,0,0)',
    color: 'rgb(255,255,255)',
    fontSize: '13px',
    fontWeight: '300',
    width: '50%',
    margin: '3px 6px',
    padding: '8px 16px',
    borderRadius: '50px',
    textTransform: 'capitalize',
    lineHeight: '15px'
  },
  menu: {
    backgroundColor: 'rgb(237,202,51)',
    fontSize: '13px'
  }
}

const FuelLog = (props) => {

  const { search, clearIcon } = useStyles();
  const [searchValue, setSearchValue] = useState("");
  const [showClearIcon, setShowClearIcon] = useState("none");
  const [type, setType] = useState('40');
  const [mileageDialogOpen, setMileageDialogOpen] = useState(false);

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const handleClick = () => {
    setSearchValue("");
    setShowClearIcon("none");
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
  };

  const handleMileageReportDialog = () => {
    setMileageDialogOpen(!mileageDialogOpen)
  }

  const bodyStyle = {
    width: `calc(100% - ${props.open ? 290 : 0}px)`,
  }
  if (window.innerWidth <= 1300) {
    bodyStyle.width = '100%';
    var bodyclick = props.handleDrawerClose;
  }

  return (
    <>
      {
        <MileageReportDialog
          mileageDialogOpen={mileageDialogOpen}
          mileageDialogClose={handleMileageReportDialog}
        />}
      <div
        className={styles.body}
        style={bodyStyle}
        onClick={props.textSelectorOpen ? props.toggleTextSelector : bodyclick}
      >
        <div className={styles.header}>
          <div className={styles.part2}>
            <div className={styles.headerText}>
              <AddRoadIcon fontSize='large' />
              <span className={styles.headerHeading}>
                Fuel log List
              </span>
            </div>
          </div>

          <div className={styles.dieselFluid}>
            <span className={styles.switchlabel}>Diesel exhaust fluid</span>
            <Index />
          </div>

          <div className={styles.field1}>
            <Box sx={{ minWidth: '100%' }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={type}
                  label="Type"
                  onChange={handleChangeType}
                  required
                  sx={{
                    fontSize: '13px',
                  }}
                >
                  <MenuItem style={FuelLogStyle.menu} value={10}>Today</MenuItem>
                  <MenuItem style={FuelLogStyle.menu} value={20}>Current Week</MenuItem>
                  <MenuItem style={FuelLogStyle.menu} value={30}>Past 30 Days</MenuItem>
                  <MenuItem style={FuelLogStyle.menu} value={40}>All</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>

          <div className={styles.searchCover}>
            <FormControl
              className={search}
              sx={{
                width: '100%',
                position: 'relative',
                backgroundColor: 'white'
              }}
            >
              <TextField
                size="small"
                placeholder='Search ..'
                variant="outlined"
                value={searchValue}
                onChange={handleChange}
                sx={{
                  flexGrow: 1,
                  '@media (max-width: 1200px)': {
                    width: '100%',
                    height: '100%',
                  }
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      style={{
                        position: 'absolute',
                        right: 0,
                        top: 2,
                        height: '100%',
                        display: showClearIcon
                      }}
                      onClick={handleClick}
                      className={clearIcon}
                    >
                      <ClearIcon />
                    </InputAdornment>
                  )
                }}
              />
            </FormControl>
          </div>

          <div className={styles.headerButton}>
            <Button
              variant="contained"
              style={FuelLogStyle.button}
            >
              Add New Fuel Log
            </Button>
            <Button
              variant="contained"
              style={FuelLogStyle.button}
              onClick={handleMileageReportDialog}
            >
              Report
            </Button>
          </div>
        </div>

        <div className={styles.fuelPrice}>
          <span className={styles.fuel}>Fuel Expense: $0.00</span>
          <span className={styles.fuel}>DEF Expense: $0.00</span>
        </div>

        <div className={styles.contentBody}>
          <FuelData />
        </div>
      </div>
    </>
  )
}
export default FuelLog;