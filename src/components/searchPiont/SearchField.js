import React from 'react'
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const Search = styled('div')(() => ({
    position: 'absolute',
    borderRadius: 'none',
    zIndex: '1',
    backgroundColor: 'rgb(237, 202, 51)',
    '&:hover': {
      backgroundColor: 'rgb(237, 202, 51)',
    },
    marginLeft: 0 ,
    width: '100%',
    padding:'10px',
    color:'balck'
  }));
  const StyledInputBase = styled(InputBase)(() => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      width: '85vw',
      padding: '10px 10px 10px 10px',
      paddingLeft: '5px',
    },
  }));


const SearchField = ({handleSearchClose,Open}) => {
  return (
    <Search>
        <StyledInputBase
        sx={{width:`${Open? '65vw':'85vw'}`}}
          placeholder="Search…"
          inputProps={{ 'aria-label':'search' }}
        />
        <IconButton sx={{ float: 'right',margin:'0px 15px' }} onClick={handleSearchClose}>
          <CloseIcon />
        </IconButton>
      </Search> 
  )
}

export default SearchField


