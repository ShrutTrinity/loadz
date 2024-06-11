
import React, { useState } from 'react';
import styles from './Styles/inspection.module.scss';
import {
  Button,
  FormControl,
  InputAdornment,
  Select,
  TextField,
  MenuItem
} from '@mui/material';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { createStyles, makeStyles } from '@mui/styles';
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from '@mui/icons-material/Star';
import ErrorIcon from '@mui/icons-material/Error';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SortIcon from '@mui/icons-material/Sort';
import AddQuestionDailog from './AddQuestionDailog';

const useStyles = makeStyles(() => {
  return createStyles({
    search: {
      margin: "3px",
    }, clearIcon: {
      cursor: 'pointer'
    }
  });
});

const Inspection = (props) => {
  const items = [
    { name: 'sdfgbnm', type: 'trailer', required: true, suggested: true },
    { name: '45', type: 'trailer', required: false, suggested: false },
  ];
  const [sort, setsort] = useState(true);
  const [questionDailog, setQuestionDailog] = useState(false);

  const handleChange = () => {
    setsort(!sort);
  };

  const openQuestionDailog = () =>{
    setQuestionDailog(!questionDailog)
  }

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
    <AddQuestionDailog open={questionDailog} handleClose={openQuestionDailog} />
      <div className={styles.body} style={bodyStyle} onClick={props.textSelectorOpen ? props.toggleTextSelector : bodyclick}>
        <div className={styles.headerPart}>
          <div className={styles.left}>
            <div className={styles.headerName}>
              <AssignmentTurnedInIcon className={styles.blockIcon} />
              <span className={styles.headerText}>Inspection</span>
            </div>
            <Button className={styles.addbtn} onClick={openQuestionDailog}>Add Questions</Button>
          </div>
          <div className={styles.search}>
            <FormControl
              className={search}
              sx={{ width: '100%', position: 'relative', marginBottom: '20px' }}
            >
              <TextField
                size="small"
                placeholder='Search'
                variant="outlined"
                sx={{
                  "& fieldset": { border: 'none' },
                  "& input::placeholder": {
                    fontSize: "13px"
                  },
                  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(0, 0, 0, 0.23)',
                  },
                  '& .css-1q6at85-MuiInputBase-root-MuiOutlinedInput-root': {
                    borderRadius: '10px',
                  },
                  '& .css-1ua80n0-MuiInputBase-input-MuiOutlinedInput-input': {
                    padding: '20px'
                  },
                  boxShadow: ' 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 2px 0px rgba(0, 0, 0, 0.12);',
                  border: '0px',
                  flexGrow: 1,
                  width: '100%',
                  borderRadius: '15px',
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
            <div className={styles.listNavbar}>
              <Select
                sx={{
                  "& fieldset": { border: 'none' },
                  "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input": {
                    padding: '7px',
                    backgroundColor:'rgba(0, 0, 0, 0.06)'
                  }
                }}
                defaultValue={20}
              >
                <MenuItem value={20}>Order by</MenuItem>
                <MenuItem value={30}>Start Date</MenuItem>
              </Select>
              {sort ? <SortIcon onClick={handleChange} sx={{cursor:'pointer'}}/>:<SortIcon sx={{transform:'scaleY(-1)',cursor:'pointer'}} onClick={handleChange}/>}
            </div>
            <ul>
              <hr />
              {items.map((item, index) => (
                <>
                  <li key={index} className={styles.list}>
                    <div className={styles.nameAndType}>
                      <div className={styles.name}>
                        {item.name}
                      </div>

                      <div className={styles.type}>
                        {item.type}
                      </div>
                    </div>
                    <div className="item-status">
                      <span className="required">
                        required <ErrorIcon className="icon" sx={{ color: item.required && 'red' }} />
                      </span>
                    </div>
                    <div>
                      <span className="suggested">
                        suggested
                        {item.suggested ? <StarIcon className="icon star" sx={{ color: 'rgb(237, 202, 51)' }} />
                          : <StarBorderIcon />}
                      </span>
                    </div>
                  </li>
                </>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Inspection;