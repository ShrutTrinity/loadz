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
    padding: '17px 14px 17.5px 10px',
    fontSize: '13px',
    width: '100%',
  }
}

const categories = ['Create categories', 'Aggregates', 'Sands', 'Rocks', 'Hotmix', 'Liquids', 'Dirt', 'Concretes', 'solidos', 'Carroceria'];
const statusArray = ['Active', 'Inactive'];
const unitTypeArray = ['Tons', 'Yards', 'Hours', 'Loads'];

const EcommerceMaterial = (props) => {

  const { handleDrawerClose, textSelectorOpen, toggleTextSelector, open } = props;
  const [value, setValue] = useState('1');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');
  const [unitType, setUnitType] = useState('');

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  }

  const handleUnitTypes = (event) => {
    setUnitType(event.target.value);
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
            <Link to="/e-commerce/materials" className={styles.backLink}>
              <div className={styles.part1}>
                <ArrowBackIcon fontSize="small" />
                <span>Materials</span>
              </div>
            </Link>
            <div className={styles.part2}>
              <div className={styles.headerText}>
                <h4 className={styles.h4}>New Materials</h4>
              </div>
            </div>
            <span className={styles.subText}>Material Detail</span>
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
                    <Tab label="Material Detail"
                      value="2"
                      style={value === '2' ? { ...AddTicketStyle.selectedTab } : { ...AddTicketStyle.tab }}
                    />
                  </TabList>
                </Box>
                <TabPanel value="1" sx={{ padding: '24px 8px' }}>
                  {/* form */}
                  <form action="" className={styles.form}>
                    <div className={styles.name}>
                      <CommonTextfield
                        id='name'
                        name='name'
                        type='text'
                        label='Name'
                        width='100'
                        required='required'
                      />
                    </div>
                    <div className={styles.description}>
                      <CommonTextfield
                        id='description'
                        name='description'
                        type='text'
                        label='Description'
                        width='100'
                      />
                    </div>
                    <div className={styles.categories}>
                      <FormControl fullWidth sx={{
                        backgroundColor: 'rgb(255,255,255)',
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
                          Categories
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={type}
                          defaultValue='10'
                          label="Categories"
                          onChange={handleChangeType}
                          required
                          sx={{
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
                          {categories.map((category, index) => (
                            <MenuItem key={index} value={category} style={allStyle.selectList}>
                              {category}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                    <div className={styles.status}>
                      <FormControl fullWidth sx={{
                        backgroundColor: 'rgb(255,255,255)',
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
                    </div>
                  </form>
                </TabPanel>

                <TabPanel value="2" sx={{ padding: '24px 8px' }}>
                  {/* form */}
                  <form action="" className={styles.form}>
                    <section className={styles.size}>
                      <div className={styles.heading}>
                        Material Size
                      </div>
                      <div className={styles.sizeFields}>
                        <CommonTextfield
                          id='depth'
                          name='depth'
                          type='number'
                          label='Depth'
                          width='100'
                        />
                        <CommonTextfield
                          id='width'
                          name='width'
                          type='number'
                          label='Width'
                          width='100'
                        />
                        <CommonTextfield
                          id='height'
                          name='height'
                          type='number'
                          label='Height'
                          width='100'
                        />
                      </div>
                    </section>

                    <section className={styles.size}>
                      <div className={styles.heading}>
                        Material weight
                      </div>
                      <div className={styles.sizeFields}>
                        <CommonTextfield
                          id='weightUnit'
                          name='weightUnit'
                          type='number'
                          label='Weight Unit'
                          width='100'
                        />
                        <FormControl fullWidth sx={{
                          backgroundColor: 'rgb(255,255,255)',
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
                            Unit Types
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={unitType}
                            defaultValue='10'
                            label="Unit Types"
                            onChange={handleUnitTypes}
                            required
                            sx={{
                              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgba(0, 0, 0, 0.23)',
                              },
                            }}
                            MenuProps={{
                              PaperProps: {
                                style: {
                                  borderRadius: '12px'
                                },
                              },
                            }}
                          >
                            {unitTypeArray.map((unitType, index) => (
                              <MenuItem key={index} value={unitType} style={allStyle.selectList}>
                                {unitType}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>

                      </div>
                    </section>

                    <section className={styles.size}>
                      <div className={styles.heading}>
                        Material cost
                      </div>
                      <div className={styles.sizeFields}>
                        <CommonTextfield
                          id='costRate'
                          name='costRate'
                          type='number'
                          label='Cost Rate'
                          width='100'
                        />
                        <CommonTextfield
                          id='taxRate'
                          name='taxRate'
                          type='number'
                          label='Tax Rate'
                          width='100'
                        />
                        <CommonTextfield
                          id='extraShippingRate'
                          name='extraShippingRate'
                          type='number'
                          label='Extra Shipping Fee'
                          width='100'
                        />
                      </div>
                    </section>
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

export default EcommerceMaterial;