import React, { useState, useEffect } from 'react';
import styles from './styles/job.module.scss';
import Index from './components/switchForJob/index';
import {
  Button,
  FormControl,
  InputAdornment,
  TextField,
} from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import Table from './components/JobDataTable/Table';
import { Link } from 'react-router-dom';
import MobileTable from './components/JobDataTable/SmallScreenTable';

const useStyles = makeStyles(() => {  
  return createStyles({
    search: {
      margin: "3px",
    },
    clearIcon: {
      cursor: 'pointer',
    },
  });
});

const Job = (props) => {
  const {search, clearIcon } = useStyles();
  const [showClearIcon, setShowClearIcon] = useState("none");
  const [searchValue, setSearchValue] = useState("");
  const [desktopScreen, setDesktopScreen] = useState(window.innerWidth > 600);

  const bodyStyles = {
    width: `calc(100% - ${props.open ? 290 : 0}px)`,
    zIndex: 1,
  };

  useEffect(() => {
    const handleResize = () => {
      setDesktopScreen(window.innerWidth > 600);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (window.innerWidth <= 1300) {
    bodyStyles.width = '100%';
  }

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    setShowClearIcon(value === "" ? "none" : "flex");
  };

  const handleClick = () => {
    setSearchValue("");
    setShowClearIcon("none");
  };

  const [switches, setSwitches] = useState([
    { label: 'All', checked: true },
    { label: 'Owner', checked: false },
    { label: 'SubContractor', checked: false },
    { label: 'Commission', checked: false },
    { label: 'Drafts', checked: false },
    { label: 'Archive', checked: false },
  ]);

  const handleSwitchChange = (index) => {
    const newSwitches = switches.map((switchItem, i) => ({
      ...switchItem,
      checked: i === index,
    }));
    setSwitches(newSwitches);
  };

  return (

      <div
        className={styles.container}
        style={bodyStyles}
      >
        <h1 className={styles.titleText}>Jobs</h1>
        <div className={styles.subcontainer}>
          <div className={styles.label}>
            {switches.map((switchItem, index) => (
              <Index
                key={index}
                label={switchItem.label}
                checked={switchItem.checked}
                onChange={() => handleSwitchChange(index)}
              />
            ))}
          </div>
          <div className={styles.search}>
            <FormControl
              className={search}
              sx={{ width: 'auto', position: 'relative' }}
            >
              <TextField
                size="small"
                variant="outlined"
                value={searchValue}
                onChange={handleChange}
                sx={{
                  height: '28px',
                  flexGrow: 1,
                  '@media (max-width: 1200px)': {
                    marginBottom: '16px',
                    width: '100%',
                  },
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
                      style={{ position: 'absolute', right: 0, top: 2, height: '100%', display: showClearIcon }}
                      onClick={handleClick}
                      className={clearIcon}
                    >
                      <ClearIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <Link to='/jobs/new'>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'rgb(237, 202, 51)',
                  color: 'black',
                  fontWeight: '600',
                  padding: '6px 12px',
                  '&:hover': {
                    backgroundColor: 'rgb(237, 202, 51)',
                  },
                }}
              >
                Add New Job
              </Button>
            </Link>
          </div>
        </div>
        <div className={styles.body}>
          {desktopScreen ? <Table /> : <MobileTable />}
        </div>
      </div>
    
  );
};

export default Job;