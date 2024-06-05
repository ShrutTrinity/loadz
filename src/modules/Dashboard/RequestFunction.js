import React from 'react';
import styles from './styles/function.module.scss';
import { TextField, InputAdornment } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from "@mui/icons-material/Search";

const RequestFunction = () => {
  const style = {
    boxStyle: {
      backgroundColor: 'none',
      boxShadow: 'none',
      border: '1px solid #ccc',
      background: '#f5f5f5',
      padding: '7px 20px',
      margin: '10px 0px'
    }
  }
  return (
    <>

      <div className={styles.drawer}>
        <div className={styles.searchbar}>
          <TextField
            size="small"
            placeholder='Search Customers'
            variant="outlined"
            sx={{
              backgroundColor: 'white',

              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
              '& .css-1q6at85-MuiInputBase-root-MuiOutlinedInput-root': {
                borderRadius: '20px',
              },
              '& .css-1ua80n0-MuiInputBase-input-MuiOutlinedInput-input': {
                padding: '5px'
              },
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 1px 2px;',
              border: 'none',
              flexGrow: 1,
              width: '100%',
              borderRadius: '20px',
              '@media (max-width: 1200px)': {
                width: '100%',
                backgroundColor: 'white'
              }
            }}
            InputProps={{

              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'black' }} />
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div className={styles.profile}>
          Requests
        </div>
        <Accordion sx={{ backgroundColor: 'none', boxShadow: 'none' }}>
          <AccordionSummary
            sx={{ fontSize: '20px', fontWeight: '500' }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Driver Requests
          </AccordionSummary>
          <AccordionDetails>
            <Accordion style={style.boxStyle}>
              <AccordionSummary
                sx={{ fontSize: '18px', fontWeight: '400' }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Pending
              </AccordionSummary>
            </Accordion>
            <Accordion style={style.boxStyle}>
              <AccordionSummary
                sx={{ fontSize: '18px', fontWeight: '400' }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Resolved
              </AccordionSummary>
            </Accordion>

          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ backgroundColor: 'none', boxShadow: 'none' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ fontSize: '20px', fontWeight: '500' }}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Dispatcher Requests
          </AccordionSummary>
          <AccordionDetails>
            <Accordion style={style.boxStyle}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ fontSize: '18px', fontWeight: '400' }}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Pending
              </AccordionSummary>
            </Accordion>
            <Accordion style={style.boxStyle}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ fontSize: '18px', fontWeight: '400' }}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Resolved
              </AccordionSummary>
            </Accordion>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded sx={{ backgroundColor: 'none', boxShadow: 'none' }}>
          <AccordionSummary
            sx={{ fontSize: '20px', fontWeight: '500', backGroundColor: 'none' }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Accordion Actions
          </AccordionSummary>
          <AccordionDetails>
          <Accordion style={style.boxStyle}>
            <AccordionSummary
              sx={{ fontSize: '18px', fontWeight: '400' }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Pending
            </AccordionSummary>
            </Accordion>
            <Accordion style={style.boxStyle}>
            <AccordionSummary
              sx={{ fontSize: '18px', fontWeight: '400' }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Resolved
            </AccordionSummary>
            </Accordion>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  )
}

export default RequestFunction;