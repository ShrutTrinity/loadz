import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import StarIcon from '@mui/icons-material/Star';
import ErrorIcon from '@mui/icons-material/Error';
import { Button, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

const TypeArray = ['tractor', 'trailer'];

const AddQuestionDailog = (props) => {

  const { open, handleClose } = props;
  const [type, setType] = useState(TypeArray[0]);
  const [requireColor, setRequireColor] = useState(false);
  const [suggestColor, setSuggestColor] = useState(false);

  const handleTypes = (event) => {
    setType(event.target.value);
  }

  const handleRequireColor = () => {
    setRequireColor(!requireColor);
  }

  const handleSuggestColor = () => {
    setSuggestColor(!suggestColor);
  }

  const dailogstyle = {
    title: {
      backgroundColor: 'rgb(237, 202, 51)',
      fontSize: '14px'
    },
    content: {
      margin: '10px 0px 0px'
    },
    button: {
      color: 'rgb(0,0,0)',
      textTransform: 'lowercase',
    },
    selectList: {
      fontSize: '13px',
      fontWeight: '300',
    },
    questionField: {
      fontSize: '13px',
      fontWeight: '300'
    },
    submitButton: {
      color: 'rgb(0,0,0)',
      backgroundColor: 'rgb(237, 202, 51)',
      borderRadius: '18px'
    },
    question: {
      marginTop: '16px',
      fontSize: '13px',
      width: '100%',
    },
    submitButtons: {
      paddingTop: '16px',
    }
  }

  return (
    <>
      <Dialog
        sx={{
          '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
            borderRadius: '20px',
            minWidth: '40%',
            maxWidth: 'unset'
          }
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={dailogstyle.title}>
          {"New Question"}
        </DialogTitle>
        <DialogContent style={dailogstyle.content}>
          <form action="" >
            <section>
              <Button
                onClick={handleRequireColor}
                style={dailogstyle.button}
                variant="text"
                endIcon={requireColor ?
                  <ErrorIcon sx={{ color: 'red' }} /> :
                  <ErrorOutlineOutlinedIcon />}
              >
                required
              </Button>
              <Button
                onClick={handleSuggestColor}
                style={dailogstyle.button}
                variant="text"
                endIcon={
                  suggestColor ?
                    <StarIcon sx={{ color: 'rgb(255, 193, 7)' }} /> :
                    <StarBorderOutlinedIcon />
                }
              >
                suggested
              </Button>
            </section>

            <hr />

            <FormControl fullWidth size='small' sx={{
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
                Types
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                defaultValue={type}
                label="Types"
                onChange={handleTypes}
                required
                sx={{
                  fontSize: '13px',
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
                {TypeArray.map((type, index) => (
                  <MenuItem key={index} value={type} style={dailogstyle.selectList}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <div style={dailogstyle.question}>
              <TextField
                name='question'
                id='quetion'
                label="Question"
                multiline
                rows={4}
                defaultValue=""
                sx={{
                  width: '100%',
                  fontSize: '13px',
                  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(0, 0, 0, 0.23)',
                  },
                  '& .MuiInputLabel-outlined.Mui-focused': {
                    color: 'rgb(237, 202, 51)',
                  },
                }}
                style={dailogstyle.questionField}
              />
            </div>

            <section style={dailogstyle.submitButtons}>
              <Button
                variant='contained'
                style={dailogstyle.submitButton}
              >
                Add
              </Button>
            </section>
          </form>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AddQuestionDailog
