import React, { useState } from 'react';
import styles from './style/trafficShop.module.scss';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const TrafficShopStyle = {
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

const truckArray = [
  'jhon', 'micle', 'sweed'
];

const driverArray = [
  'jhon', 'micle', 'sweed'
];


const TrafficShop = ({ open, handleDrawerClose,textSelectorOpen,toggleTextSelector }) => {

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
                <span>Traffic Stop</span>
              </div>
            </Link>
            <div className={styles.part2}>
              <div className={styles.headerText1}>
                <h4>Traffic Stop</h4>
              </div>
              <span>Traffic Stop Detail</span>
            </div>
          </div>

          <Button
            variant="contained"
            style={TrafficShopStyle.button}
          >Create
          </Button>
        </div>

        <Box sx={{ width: '100%', typography: 'body1', pt: '25px' }}>
          <TabContext value={value}>
            <Box sx={{
              borderBottom: 1,
              borderColor: 'divider',
            }}>
              <TabList onChange={handleChange}>
                <Tab label="Dps Log Detail"
                  value="1"
                  style={value === '1' ? { ...TrafficShopStyle.selectedTab } : null}
                />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{ padding: '24px' }}>
              <div className={styles.container}>
                <div className={styles.TrafficShopField}>
                  <label className={styles.labelOfpart}>
                    Traffic Stop
                  </label>
                  <div className={styles.TrafficShopInput}>
                    <div className={styles.mileage}>
                      <TextField
                        sx={{
                          background: 'rgb(255,255,255)',
                          fontSize: '13px',
                          width: '100%'
                        }}
                        required
                        label="Mileage"
                      />
                    </div>
                    <div className={styles.date}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                          <DatePicker
                            sx={{
                              background: 'rgb(255,255,255)',
                              width: '100%'
                            }}
                          />
                        </DemoContainer>
                      </LocalizationProvider>
                    </div>
                  </div>
                </div>
                <div className={styles.selectionField}>
                  {/* 1st */}
                  <div className={styles.driverSelection}>
                    <label className={styles.labelOfpart}>
                      Driver: *
                    </label>
                    <select
                      className='form-select'
                      style={TrafficShopStyle.selectFiled}
                      defaultValue={''}
                      aria-label="Default select example"
                      name="state"
                      required
                    >
                      <option></option>
                      {truckArray.map((state, index) => (
                        <option key={index} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* 2nd */}
                  <div className={styles.truckSelection}>
                    <label className={styles.labelOfpart}>
                      Trucks: *
                    </label>
                    <select
                      className='form-select'
                      style={TrafficShopStyle.selectFiled}
                      defaultValue={''}
                      aria-label="Default select example"
                      name="state"
                      required
                    >
                      <option></option>
                      {driverArray.map((state, index) => (
                        <option key={index} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={styles.razon}>
                  <TextField
                    sx={{
                      mt: '16px',
                      background: 'rgb(255,255,255)',
                      fontSize: '13px',
                      width: '100%'
                    }}
                    required
                    label="Trafic Stop Razon"
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

export default TrafficShop;