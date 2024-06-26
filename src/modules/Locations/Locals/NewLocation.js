import React, { useState } from 'react';
import styles from './styles/newLocation.module.scss';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CommonTextfield from '@Jobs/components/TextField/CommonTextfield';
import GoogleMaps from '../../Jobs/components/Map/GoogleMaps';

const allStyle = {
  headerButton: {
    textTransform: 'capitalize',
    fontSize: '13px',
    backgroundColor: 'rgb(0,0,0)',
    borderRadius: '18px',
  }
}

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
    textTransform: 'capitalize',
  },
  selectFiled: {
    borderColor: '#c4c4c4',
    padding: '17px 14px 17.5px 10px',
    fontSize: '13px',
    width: '100%',
  }
}


const NewLocation = (props) => {

  const { handleDrawerClose, textSelectorOpen, toggleTextSelector, open } = props;
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
      <div className={styles.body} style={bodyStyle} onClick={textSelectorOpen ? toggleTextSelector : bodyclick}>
        <div className={styles.header}>
          <div className={styles.heading}>
            <Link to="/locations/locals" className={styles.backLink}>
              <div className={styles.part1}>
                <ArrowBackIcon fontSize="small" />
                <span>Quarries</span>
              </div>
            </Link>
            <div className={styles.part2}>
              <div className={styles.headerText}>
                <h4 className={styles.h4}>New Quarry</h4>
              </div>
            </div>
            <span className={styles.subText}>Querry Detail</span>
          </div>

          <section className={styles.buttons}>
            <Button
              variant='contained'
              style={allStyle.headerButton}
            >
              Cancel
            </Button>
            <Button
              variant='contained'
              style={allStyle.headerButton}
            >
              Save
            </Button>
          </section>
        </div>

        <section className={styles.content}>
          <div className={styles.tabScroll}>
            <Box sx={{ width: '100%', typography: 'body1' }}>
              <TabContext
                value={value}
              >
                <Box sx={{
                  borderBottom: 1,
                  borderColor: 'divider',
                }}>
                  <TabList
                    onChange={handleChange}
                    TabIndicatorProps={{ style: { backgroundColor: 'rgb(237, 202, 51)' } }}
                  >
                    <Tab label="Quarry Detail"
                      value="1"
                      style={value === '1' ? { ...AddTicketStyle.selectedTab } : null}
                    />
                  </TabList>
                </Box>
                <TabPanel value="1" sx={{ padding: '24px 8px' }}>
                  <section className={styles.formContainer}>
                    <div className={styles.part1}>
                      <div className={styles.heading}>
                        Location Detail
                      </div>
                      <form action="">
                        <div className={styles.name}>
                          <CommonTextfield
                            id='name'
                            name='name'
                            type='text'
                            label='Name'
                            width='100'
                          />
                        </div>

                        <div className={styles.address}>
                          <CommonTextfield
                            id='address'
                            name='address'
                            type='text'
                            label='Search to Address'
                            width='100'
                          />
                        </div>

                        <div className={styles.addressInfo}>

                          <div className={styles.city}>
                            <CommonTextfield
                              id='city'
                              name='city'
                              type='text'
                              label='City'
                              width='100'
                            />
                          </div>

                          <div className={styles.state}>
                            <CommonTextfield
                              id='state'
                              name='state'
                              type='text'
                              label='State'
                              width='100'
                            />
                          </div>

                          <div className={styles.zipCode}>
                            <CommonTextfield
                              id='zipCode'
                              name='zipCode'
                              type='number'
                              label='Zip'
                              width='100'
                            />
                          </div>
                        </div>

                        <div className={styles.quarry}>
                          <CommonTextfield
                            id='quarryPit'
                            name='quarryPit'
                            type='text'
                            label='Quarry Pit'
                            width='100'
                          />
                        </div>
                      </form>
                    </div>
                    <div className={styles.part1}>
                      <div className={styles.heading}>
                        Address Reading
                      </div>

                      <div className={styles.map}>
                        <GoogleMaps />
                      </div>
                    </div>
                  </section>
                </TabPanel>
              </TabContext>
            </Box>
          </div>
        </section>
      </div>
    </>
  )
}

export default NewLocation;