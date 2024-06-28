import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import { Tabs } from '@mui/material';
import InProgress from './InProgress';

const DetailTab = ({ height }) => {
  const formstyle = {
    tab: {
      backgroundColor: 'lightgrey',
      color: 'black',
      borderTopRightRadius: '10px',
      borderTopLeftRadius: '10px',
      fontSize: '16px',
      fontWeight: 400,
      textTransform: 'none',
      margin: '0 10px 0 0',
      marginTop: '10px',
    }
  }
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (

    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            sx={{
              padding:'0',
              '& .css-1aquho2-MuiTabs-indicator': {
                height: '0px'
              }
            }}
          >
            <Tab label="In-Progress" value="1" style={formstyle.tab} sx={{
              '&.Mui-selected': {
                backgroundColor: 'black !important',
                color: 'white !important'
              }
            }} />
            <Tab label="Delayed" value="2" style={formstyle.tab} sx={{
              '&.Mui-selected': {
                backgroundColor: 'black !important',
                color: 'white !important'
              }
            }} />
            <Tab label="Completed" value="3" style={formstyle.tab} sx={{
              '&.Mui-selected': {
                backgroundColor: 'black !important',
                color: 'white !important'
              }
            }} />
            <Tab label="Deleted" value="4" style={formstyle.tab} sx={{
              '&.Mui-selected': {
                backgroundColor: 'black !important',
                color: 'white !important'
              }
            }} />
          </Tabs>
        </Box>
        <TabPanel sx={{padding:'0px'}} value="1"><InProgress /></TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item Four</TabPanel>
      </TabContext>
    </Box>
  );
}

export default DetailTab
