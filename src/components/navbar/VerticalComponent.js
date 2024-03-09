import React, { useState } from 'react';
import styles from './styles/verticalComponent.module.scss';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FullScreenIcon from './FullScreenIcon';
import Gear from '../../images/GearIcon.svg';
import { Link as RouterLink } from 'react-router-dom';
import Language from './Language';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import SearchField from '../searchPiont/SearchField';
import TextSlider from './TextSlider';

const VerticalComponent = () => {

  const [searchField, setSearchField] = useState(false);
  const [textSelectorOpen, setTextSelectorOpen] = useState(false)

  const handleSearch = () => {
    setSearchField(true)
  }
  const handleSearchClose = () => {
    setSearchField(false);
  }

  const toggleTextSelector = () => {
    setTextSelectorOpen(!textSelectorOpen);
  };

  return (
    <div className={styles.verticalBody}>
      {searchField &&
        <div className={styles.searchField}>
          <SearchField handleSearchClose={handleSearchClose} widthOfSearchField='100%' />
        </div>
      }
      { textSelectorOpen &&
        <div className={styles.textSelector}>
          <TextSlider />    
        </div>
      }
      <div className={styles.container}>
        <IconButton size="large" aria-label="search"
          onClick={handleSearch}
          sx={{
            color:'black',
          }}
        >
          <SearchIcon />
        </IconButton>
        
        <RouterLink to='https://youtube.com/@loadzloadzonline2510' style={{ color: 'black' }}>
          <Button
            sx={{
              padding: '12px 0',
              color: 'black',
              backgroundColor: 'rgb(237, 202, 51)',
              boxShadow: 'none',
              ':hover': {
                backgroundColor: 'rgb(237, 202, 51)',
                boxShadow: 'none'
              }
            }}
            variant="contained" color="primary">
            <YouTubeIcon />
          </Button>
        </RouterLink>

        <FullScreenIcon />

        <IconButton size="large" aria-label="Settings" >
          <img src={Gear} className={styles.gearIcon}  alt='Gear Icon' />
        </IconButton>

        <div className={styles.languageContainer}>
          <Language />
        </div>

        <IconButton
          color='inherit'
          onClick={toggleTextSelector}
        >
          <TextFieldsIcon
            sx={{
              color:'black',
              margin: '12px',
              cursor: 'pointer'
            }}
          />
        </IconButton>

      </div>
    </div>
  )
}

export default VerticalComponent
