import { useState } from 'react';
import styles from './styles/addMaterialDialog.module.scss';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CommonTextfield from '@Jobs/components/TextField/CommonTextfield';
import { FormControl, InputLabel, MenuItem, Select, TextField, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

const categoriesArray = ["Aggregates", "Rocks", "Sands", "Hotmix", "Liquids", "Dirt", "Concretes", "solidos", "Carroceria"]

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const allStyles = {
  btns: {
    color: 'rgb(237,202,51)',
    textTransform: 'capitalize'
  }
}

const AddMaterialDailog = (props) => {

  const { handleClose, open } = props
  const theme = useTheme();
  const [categories, setCategory] = useState([]);

  const handleCategory = (event) => {
    const {
      target: { value },
    } = event;
    setCategory(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: '18px'
        }
      }}
    >
      <DialogTitle id="alert-dialog-title">
        <section className={styles.header}>
          Add new Material
        </section>
      </DialogTitle>
      <DialogContent>
        <span className={styles.instruction}>Please fill this form with the information requested for create a Material</span>

        <form className={styles.form}>
          <CommonTextfield
            id='name'
            name='name'
            type='text'
            label='Name'
            width='100'
          />

          <FormControl fullWidth size='small'
            sx={{
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
              multiple
              value={categories}
              defaultValue='10'
              label="Categories"
              onChange={handleCategory}
              required
              sx={{
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(0, 0, 0, 0.23)',
                },
              }}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={{
                MenuProps,
                PaperProps: {
                  style: {
                    maxHeight: 100,
                    borderRadius: '12px'
                  },
                },
              }}
            >
              {categoriesArray.map((category, index) => (
                <MenuItem
                  key={index}
                  value={category}
                  sx={{ fontSize: '13px' }}
                  style={getStyles(category, categories, theme)}
                >
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            label="Description"
            multiline
            minRows={3}
            sx={{
              width: '100%',
              margin: '8px 0 0',
              background: 'rgb(255,255,255)',
              '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input ': {
                padding: '12.5px 14px',
                height: `${props.height}`,

              },
              '& .css-1pysi21-MuiFormLabel-root-MuiInputLabel-root': {
                fontSize: '13px'
              },

              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(0, 0, 0, 0.23)',
              },
              '& .MuiInputLabel-outlined.Mui-focused': {
                color: 'rgb(237, 202, 51)',
              },
              '& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root': {
                fontSize: '14px',
                height: `${props.height}`,
              },
              '@media (max-width: 766px)': {
                width: '97%'
              }
            }}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} style={allStyles.btns}>
          Cancel
        </Button>
        <Button onClick={handleClose} style={allStyles.btns}>
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddMaterialDailog;