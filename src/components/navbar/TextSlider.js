import React from 'react';
import List from '@mui/material/List';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import styles from './styles/textSlider.module.scss';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: '0',
    label: '70%',
  },
  {
    value: '16.67',
    label: '80%',
  },
  {
    value: '33.34',
    label: '90%',
  },
  {
    value: '50.01',
    label: '100%',
  },
  {
    value: '66.68',
    label: '110%',
  },
  {
    value: '83.35',
    label: '120%',
  },
  {
    value: '100',
    label: '130%',
  },
];

const TextSlider = () => {

  return (
    <List
      sx={{
        position: 'absolute',
        marginLeft: '-50px',
        zIndex:2,
        bgcolor: 'rgb(237, 202, 51)',
        width: '100%',
        maxWidth: '300px',
        padding: '12px 24px',
        borderRadius: '8px',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px'
      }}
    >
      <div className={styles.divHeader}>
        <p className={styles.headerContaint}>
          <TextFieldsIcon />
          &nbsp;Font Size
        </p>
      </div>
      <Slider
        aria-label="Always visible"
        defaultValue={50}
        step={16.67}
        marks={marks}
        sx={{
          color: 'rgb(237, 202, 51)',
          '& .MuiSlider-markLabel': {
            fontSize: '12px',
          },
          '& .MuiSlider-mark': {
            backgroundColor: 'rgb(237, 202, 51)',
          },
        }}
      />
    </List>
  );
};

export default TextSlider;
