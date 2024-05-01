import React, { useState } from 'react';
import styles from './style/userList.module.scss';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import {
  Button,
  FormControl,
  InputAdornment,
  TextField,
} from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const TrafficShopStyle = {
  button: {
    background: 'rgb(0,0,0)',
    color: 'rgb(237,202,51)',
    fontSize: '16px',
    fontWeight: '300',
    width: '15%',
    margin: '3px 6px',
    padding: '8px 16px',
    borderRadius: '50px',
    textTransform: 'capitalize',
    lineHeight: '0px'
  },
  selectedTab: {
    color: 'rgb(237, 202, 51)',
    textTransform: 'capitalize',
  },
  unSelected:{
    textTransform:'capitalize'
  },
  selectFiled: {
    borderColor: '#c4c4c4',
    padding: '17px 14px 17.5px 10px',
    fontSize: '13px',
    width: '100%',
  },
}

const useStyles = makeStyles(() => {
  return createStyles({
    search: {
      margin: "2px",
    }, clearIcon: {
      cursor: 'pointer'
    }
  });
});

const UserList = () => {

  const { search, clearIcon } = useStyles();
  const [searchValue, setSearchValue] = useState("");
  const [showClearIcon, setShowClearIcon] = useState("none");
  const [value, setValue] = useState('1');

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
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

  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <div className={styles.part2}>
          <div className={styles.headerText}>
            <AccountBoxIcon fontSize='large' />
            <span className={styles.headerHeading}>Users</span>
          </div>
        </div>

        <div className={styles.searchCover}>
          <FormControl
            className={search}
            sx={{
              width: '100%',
              position: 'relative',
              background: 'white'
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

        <Button
          variant="contained"
          style={TrafficShopStyle.button}
          startIcon={<ControlPointIcon />}
        >
          Create Invite
        </Button>
      </div>

      <Box sx={{ width: '100%', typography: 'body1', pt: '25px' }}>
        <TabContext value={value}>
          <Box sx={{
            borderBottom: 1,
            borderColor: 'divider',
          }}>
            <TabList onChange={handleChangeTab}>
              <Tab
                label="User"
                value="1"
                style={value === '1' ? { ...TrafficShopStyle.selectedTab } : { ...TrafficShopStyle.unSelected}}
              />
              <Tab
                label="Invites"
                value="2"
                style={value === '2' ? { ...TrafficShopStyle.selectedTab } : { ...TrafficShopStyle.unSelected}}
              />
            </TabList>
          </Box>
          <TabPanel value="1" sx={{ padding: '24px' }}>

          <div className={styles.emptyCondition}>
            <span className={styles.emptyText}>There is no Staff!</span>
          </div>

          </TabPanel>
        </TabContext>
      </Box>
    </div>
  )
}

export default UserList;