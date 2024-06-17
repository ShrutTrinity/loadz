import React from 'react';
import styles from './styles/function.module.scss';
import { TextField, InputAdornment } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';

const style = {
  boxStyle: {
    backgroundColor: 'none',
    boxShadow: 'none',
    border: '1px solid #ccc',
    background: '#f5f5f5',
    padding: '7px 20px',
    margin: '10px 0px',
  },
  accordionSummary: {
    fontSize: '20px',
    fontWeight: '500',
    padding: '8px',
    paddingLeft: '24px',
  },
  innerAccordionSummary: {
    fontSize: '18px',
    fontWeight: '400',
  },
  accordion: {
    backgroundColor: 'none',
    boxShadow: 'none',
  },
};

const AccordionSection = ({ title, items }) => (
  <Accordion sx={style.accordion}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      sx={style.accordionSummary}
      aria-controls={`${title}-content`}
      id={`${title}-header`}
    >
      {title}
    </AccordionSummary>
    <AccordionDetails>
      {items.map((item) => (
        <Accordion key={item} style={style.boxStyle}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={style.innerAccordionSummary}
            aria-controls={`${item}-content`}
            id={`${item}-header`}
          >
            {item}
          </AccordionSummary>
        </Accordion>
      ))}
    </AccordionDetails>
  </Accordion>
);

const SearchBar = () => (
  <TextField
    size="small"
    placeholder="Search Customers"
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
        padding: '5px',
      },
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 1px 2px;',
      border: 'none',
      flexGrow: 1,
      width: '100%',
      borderRadius: '20px',
      '@media (max-width: 1200px)': {
        width: '100%',
        backgroundColor: 'white',
      },
    }}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon sx={{ color: 'black' }} />
        </InputAdornment>
      ),
    }}
  />
);

const RequestFunction = () => (
  <div className={styles.drawer}>
    <div className={styles.searchbar}>
      <SearchBar />
    </div>
    <div className={styles.profile}>Requests</div>
    <div className={styles.scroll}>
      <AccordionSection title="Driver Requests" items={['Pending', 'Resolved']} />
      <AccordionSection title="Dispatcher Requests" items={['Pending', 'Resolved']} />
      <AccordionSection title="Accordion Actions" items={['Pending', 'Resolved']} />
    </div>
  </div>
);

export default RequestFunction;