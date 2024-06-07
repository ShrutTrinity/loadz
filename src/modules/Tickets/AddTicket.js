import React, { useState } from 'react';
import styles from './styles/AddTicket.module.scss';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CommonTextfield from '../Jobs/components/TextField/CommonTextfield';
import CancelIcon from '@mui/icons-material/Cancel';

const AddTicketStyle = {
  button: {
    background: 'rgb(0,0,0)',
    color: 'rgb(255,255,255)',
    fontSize: '13px',
    fontWeight: '300',
    margin: '3px 6px',
    padding: '16px',
    borderRadius: '18px',
    lineHeight: '0px'
  },
  button2: {
    background: 'rgb(0,0,0)',
    color: 'rgb(255,255,255)',
    fontSize: '13px',
    fontWeight: '300',
    margin: '3px 6px',
    borderRadius: '18px',
    lineHeight: '0px'
  },
  selectedTab: {
    color: 'rgb(237, 202, 51)',
  },
  selectFiled: {
    borderColor: '#c4c4c4',
    padding: '17px 14px 17.5px 10px',
    fontSize: '13px',
    width: '100%',
  },
}


const AddTicket = ({ open, handleDrawerClose, textSelectorOpen, toggleTextSelector }) => {

  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const bodyStyle = {
    width: `calc(100% - ${open ? 290 : 0}px)`,
  }
  if (window.innerWidth <= 1300) {
    bodyStyle.width = '100%';
    var bodyclick = handleDrawerClose;
  }
  return (
    <>
      <div
        className={styles.body}
        style={bodyStyle}
        onClick={textSelectorOpen ? toggleTextSelector : bodyclick}
      >
        <div className={styles.header}>
          <div className={styles.heading}>
            <Link to="/dps/logs" className={styles.backLink}>
              <div className={styles.part1}>
                <ArrowBackIcon fontSize="small" />
                <span>Tickets</span>
              </div>
            </Link>
            <div className={styles.part2}>
              <div className={styles.headerText1}>
                <h4>New Ticket</h4>
              </div>
              <span>Tickets Status Detail</span>
            </div>
          </div>
    <div>
    <Link to='/tickets/status'>
          <Button
            variant="contained"
            style={AddTicketStyle.button2}
          ><CancelIcon/>Cancle
          </Button>
          </Link>
          <Button
            variant="contained"
            style={AddTicketStyle.button}
          >Update
          </Button>
          <Button
            variant="contained"
            style={AddTicketStyle.button}
          >Save
          </Button>
          </div>
        </div>

        <Box sx={{ width: '100%', typography: 'body1', pt: '25px' }}>
          <TabContext value={value}>
            <Box sx={{
              borderBottom: 1,
              borderColor: 'divider',
            }}>
              <TabList onChange={handleChange}>
                <Tab label="Tickets Status Detail"
                  value="1"
                  style={value === '1' ? { ...AddTicketStyle.selectedTab } : null}
                />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{ padding: '24px' }}>
              <div className={styles.container}>
                <div className={styles.AddTicketField}>

                  <CommonTextfield
                  width='100'
                    required
                    label="Name"
                  />
                </div>

              </div>

            </TabPanel>
          </TabContext>
        </Box>

      </div>
    </>
  )
}

export default AddTicket;