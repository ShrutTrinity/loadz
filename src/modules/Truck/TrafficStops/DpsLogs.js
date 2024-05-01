import React, { useState } from 'react';
import styles from './style/dpslogs.module.scss';
import BlockIcon from '@mui/icons-material/Block';
import {
  Button,
  FormControl,
  InputAdornment,
  TextField,
} from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import ReportMileage from './ReportMileage';
import { Link } from 'react-router-dom';

const allStyle = {
  button: {
    background: 'rgb(0,0,0)',
    color: 'rgb(255,255,255)',
    fontSize: '13px',
    fontWeight: '300',
    margin: '3px 6px',
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

const DpsLogs = () => {
  const { search, clearIcon } = useStyles();
  const [searchValue, setSearchValue] = useState("");
  const [showClearIcon, setShowClearIcon] = useState("none");
  const [mileageReportModel, setMileageReportModel] = useState(false)

  const handleClick = () => {
    setSearchValue("");
    setShowClearIcon("none");
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
  };

  const handleMileageReportModel = () => {
    setMileageReportModel(!mileageReportModel)
  }

  return (
    <>
      {<ReportMileage
        mileageDialogOpen={mileageReportModel}
        mileageDialogClose={handleMileageReportModel}
      />}
      <div className={styles.body}>
        <div className={styles.headerPart}>
          <div className={styles.headerName}>
            <BlockIcon className={styles.blockIcon} />
            <span className={styles.headerText}>Traffic Stops List</span>
          </div>
          <div className={styles.functionButtons}>
            <div className={styles.search}>
              <FormControl
                className={search}
                sx={{ width: '100%', position: 'relative' }}
              >
                <TextField
                  size="small"
                  placeholder='Search ..'
                  variant="outlined"
                  value={searchValue}
                  onChange={handleChange}
                  sx={{
                    height: '28px',
                    flexGrow: 1,
                    '@media (max-width: 1200px)': {
                      marginBottom: '16px',
                      width: '100%'
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
            <div className={styles.buttonsContainer}>
              <Link to='/dps/logs/new'>
                <Button
                  variant="contained"
                  style={allStyle.button}
                >
                  Add New Traffic Shop
                </Button>
              </Link>
              <Button
                variant="contained"
                style={allStyle.button}
                onClick={handleMileageReportModel}
              >Report Traffic Stop</Button>
            </div>
          </div>
        </div>

        <div className={styles.container}>

          <div className={styles.emptyCondition}>
            <span className={styles.emptyText}>There are no Traffic Stops!</span>
          </div>

        </div>
      </div>
    </>
  )
}

export default DpsLogs;