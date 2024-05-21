import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import { Tabs } from '@mui/material';
import MiscPayDetail from './MiscPayDetail';

const OwnerDetailTable = ({height}) => {
  const formstyle = {
    tab: {
      backgroundColor: 'lightgrey',
      color: 'black',
      borderTopRightRadius: '10px',
      borderTopLeftRadius: '10px',
      width: '150px',
      fontSize: '13px',
      fontWeight: 400,
      textTransform: 'none',
     
      margin: '0.5px',
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
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            sx={{
            
              '& .css-1aquho2-MuiTabs-indicator': {
                height: '0px'
              }
            }}
          >
            <Tab label="Unpaid Invoices" value="1" style={formstyle.tab} sx={{
              '&.Mui-selected': {
                backgroundColor: 'black !important',
                color: 'white !important'
              }
            }} />
            <Tab label="Paid Invoices" value="2" style={formstyle.tab} sx={{
              '&.Mui-selected': {
                backgroundColor: 'black !important',
                color: 'white !important'
              }
            }} />
            <Tab label="View Payments" value="3" style={formstyle.tab} sx={{
              '&.Mui-selected': {
                backgroundColor: 'black !important',
                color: 'white !important'
              }
            }} />
            <Tab label="Misc. Pay" value="4" style={formstyle.tab} sx={{
              '&.Mui-selected': {
                backgroundColor: 'black !important',
                color: 'white !important'
              }
            }} />
            <Tab label="Drivers" value="5" style={formstyle.tab} sx={{
              backgroundColor: 'rgb(237, 202, 51) !important',
              '&.Mui-selected': {
                backgroundColor: 'black !important',
                color: 'white !important'
              }
            }} />
            <Tab label="Trucks" value="6" style={formstyle.tab} sx={{
              backgroundColor: 'rgb(237, 202, 51) !important',
              '&.Mui-selected': {
                backgroundColor: 'black !important',
                color: 'white !important'
              }
            }} />
            <Tab label="Trailers" value="7" style={formstyle.tab} sx={{
              backgroundColor: 'rgb(237, 202, 51) !important',
              '&.Mui-selected': {
                backgroundColor: 'black !important',
                color: 'white !important'
              }
            }} />

          </Tabs>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4"> <MiscPayDetail  height={height}/> </TabPanel>
        <TabPanel value="5">Item Five</TabPanel>
        <TabPanel value="6">Item Six</TabPanel>
        <TabPanel value="7">Item Seven</TabPanel>
      </TabContext>
    </Box>
  );


}

export default OwnerDetailTable