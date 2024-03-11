import React, { useState } from 'react'
import styles from './styles/job.module.scss';
import Navigationbar from '@components/navbar/NavigationBar';
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

const useStyles = makeStyles(() => {
  return createStyles({
    search: {
      margin: "3px"
    }, clearIcon: {
      cursor: 'pointer'
    }
  });
});
const Job = () => {
  const { search, clearIcon } = useStyles();
  const [showClearIcon, setShowClearIcon] = useState("none");
  const [searchValue, setSearchValue] = useState("");


  const handleChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
  };

  const handleClick = () => {
    setSearchValue("");
    setShowClearIcon("none");
  };
  return (
    <div>
      <div className={styles.navigationbar}>
        <Navigationbar />
      </div>
      <div className={styles.container}>
        <h1 className={styles.titleText}>Jobs</h1>
        <div className={styles.subcontainer}>
          <div className={styles.label}>
            <Index label='All' check={true} />
            <Index label='Owner' check={false} />
            <Index label='SubContractor' check={false} />
            <Index label='Commission' check={false} />
            <Index label='Drafts' check={false}/>
            <Index label='Archive'check={false} />
          </div>
          <div className={styles.search}>

            <FormControl className={search} sx={{ width: 'auto', position: 'relative' }}>
              <TextField
                size="small"
                variant="outlined"
                value={searchValue}
                onChange={handleChange}
                sx={{ height: '28px', flexGrow: 1 }}
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
                  )
                }}
              />
            </FormControl>
            <Button variant="contained" sx={{
              // width:'40%',
              backgroundColor: 'rgb(237, 202, 51)',
              color: 'black',
              fontWeight: '600',
              '&:hover': {
                backgroundColor: 'rgb(237, 202, 51)',
              },
            }}>
              Add New Job
            </Button>
          </div>
        </div>

            <div className={styles.body}>
              <Table/>
            </div>
      </div>
    </div>
  )
}

export default Job
