import React from 'react';
import styles from './styles/tickets.module.scss';
import {
  Button,
  FormControl,
  InputAdornment,
  TextField,
} from '@mui/material';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { createStyles, makeStyles } from '@mui/styles';
import SearchIcon from "@mui/icons-material/Search";
import { Link } from 'react-router-dom';
import TicketDataTable from './TicketDataTable';
import rows from './tickets.json'

const allStyle = {
  button: {
    background: 'rgb(0,0,0)',
    color: 'rgb(255,255,255)',
    fontSize: '13px',
    fontWeight: '300',
    margin: '3px 6px',
    borderRadius: '18px'
  }
}

const useStyles = makeStyles(() => {
  return createStyles({
    search: {
      margin: "3px",
    }, clearIcon: {
      cursor: 'pointer'
    }
  });
});

const Tickets = (props) => {
 
  const bodyStyle = {
    width: `calc(100% - ${props.open ? 290 : 0}px)`,
  }
  if (window.innerWidth <= 1300) {
    bodyStyle.width = '100%';
    var bodyclick = props.handleDrawerClose;
  }
  const { search } = useStyles();


  return (
    <>

      <div className={styles.body} style={bodyStyle} onClick={props.textSelectorOpen ? props.toggleTextSelector : bodyclick}>
        <div className={styles.headerPart}>
          <div className={styles.headerName}>
            <ConfirmationNumberIcon className={styles.blockIcon} />
            <span className={styles.headerText}>Ticket List</span>
          </div>

          <div className={styles.search}>
            <FormControl
              className={search}
              sx={{ width: '100%', position: 'relative' }}
            >
              <TextField
                size="small"
                placeholder='Search'
                variant="outlined"
                sx={{
                  "& fieldset": { border: 'none' },
                  "& input::placeholder": {
                    fontSize: "14px"
                  },
                  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(0, 0, 0, 0.23)',
                  },
                  '& .css-1q6at85-MuiInputBase-root-MuiOutlinedInput-root': {
                    borderRadius: '20px',
                  },
                  '& .css-1ua80n0-MuiInputBase-input-MuiOutlinedInput-input': {
                    padding: '7 px'
                  },
                  boxShadow: ' 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);',
                  border: '0px',
                  flexGrow: 1,
                  width: '200%',
                  borderRadius: '20px',
                  backgroundColor: 'white',
                  '@media (max-width: 1200px)': {
                    width: '100%',
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
            </FormControl>
          </div>
          <div className={styles.buttonsContainer}>
            <Link to='/tickets/status/new'>
              <Button
                variant="contained"
                style={allStyle.button}>
                Add Ticket
              </Button>
            </Link>

          </div>
        </div>

        <div className={styles.container}>
          {rows.length !== 0 ?
          <TicketDataTable rows={rows}/>:
          <div className={styles.emptyCondition}>
            <span className={styles.emptyText}>There are no Tickets Status References!</span>
          </div>
            }
        </div>
      </div>
    </>
  )
}

export default Tickets;