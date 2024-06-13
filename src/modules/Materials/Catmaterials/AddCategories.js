import React, { useState } from 'react';
import styles from './styles/newMaterial.module.scss';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CommonTextfield from '@Jobs/components/TextField/CommonTextfield';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

const allStyle = {
  headerButton: {
    textTransform: 'capitalize',
    fontSize: '13px',
    backgroundColor: 'rgb(0,0,0)',
    borderRadius: '18px',
  },
  selectList: {
    fontSize: '13px',
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
  tab: {
    textTransform: 'capitalize',
  },
  selectedTab: {
    color: 'rgb(237, 202, 51)',
    textTransform: 'capitalize',
  },
  selectFiled: {
    borderColor: '#c4c4c4',
    // padding: '17px 14px 17.5px 10px',
    fontSize: '13px',
    width: '100%',
  }
}

const statusArray = ['Active', 'Inactive'];

const AddCategories = (props) => {

  const { handleDrawerClose, textSelectorOpen, toggleTextSelector, open } = props;
  const [value, setValue] = useState('1');
  const [status, setStatus] = useState('');


  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  }

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
            <Link to="/catmaterials/categories" className={styles.backLink}>
              <div className={styles.part1}>
                <ArrowBackIcon fontSize="small" />
                <span>Categories</span>
              </div>
            </Link>
            <div className={styles.part2}>
              <div className={styles.headerText}>
                <h4 className={styles.h4}>New Materials</h4>
              </div>
            </div>
            <span className={styles.subText}>Category Detail</span>
          </div>

          <section className={styles.buttons}>
            <Button
              variant='contained'
              style={allStyle.headerButton}
              startIcon={<CancelIcon
                sx={{
                  color: 'rgb(237,202,51)'
                }}
              />}
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
                    <Tab label="Material Info"
                      value="1"
                      style={value === '1' ? { ...AddTicketStyle.selectedTab } : { ...AddTicketStyle.tab }}
                    />
                  </TabList>
                </Box>
                <TabPanel value="1" sx={{ padding: '24px 8px' }}>
                  <form action="" className={styles.form}>
                      <CommonTextfield
                        id='name'
                        name='name'
                        type='text'
                        label='Name'
                        width='45'
                        required='required'
                      />
                    <FormControl  sx={{
                      width:'45%',
                      margin:'10px',
                      fontSize: '13px'
                    }}>
                      <InputLabel
                        id="demo-simple-select-label"
                        sx={{
                          fontSize: '13px',
                          '&.Mui-focused': {
                            color: 'rgb(237,202,51)',
                          },
                        }}
                        required
                      >
                        Status
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={status}
                        defaultValue='10'
                        label="Type"
                        onChange={handleChangeStatus}
                        required
                        sx={{
                      backgroundColor: 'rgb(255,255,255)',
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'rgba(0, 0, 0, 0.23)',
                          },
                        }}
                        MenuProps={{
                          PaperProps: {
                            style: {
                              maxHeight: 96,
                              borderRadius: '12px'
                            },
                          },
                        }}
                      >
                        {statusArray.map((status, index) => (
                          <MenuItem key={index} value={status} style={allStyle.selectList}>
                            {status}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </form>
                </TabPanel>
              </TabContext>
            </Box>
          </div>
        </section>
      </div>
    </>
  )
}

export default AddCategories;