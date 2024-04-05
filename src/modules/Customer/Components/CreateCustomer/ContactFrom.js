import React from 'react'
import CommonTextfield from '@Jobs/components/TextField/CommonTextfield'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ContactFrom = ({ index, handleAddForm, handleRemove }) => {
  return (
    <>
      <div style={{ display: 'flex', gap: '10px', marginTop: '10px', flexWrap: 'wrap' }}>
        <CommonTextfield
          width='20'
          id='title'
          name='title'
          type='title'
          label='Title'
          variant='outlined'
        />
        <CommonTextfield
          width='20'
          id='name'
          name='name'
          type='name'
          label='Name'
          variant='outlined'
        />
        <CommonTextfield
          width='20'
          id='email'
          name='email'
          type='email'
          label='Email'
          variant='outlined'
        />
        <CommonTextfield
          width='20'
          id='phone'
          name='phone'
          type='phone'
          label='Phone'
          variant='outlined'
        />

        <Fab size="small" aria-label="add"
          sx={{
            background: 'rgb(237, 202, 51)',
            marginTop: 'auto',
            marginBottom: 'auto',
          }}
          onClick={handleAddForm}
        >
          <AddIcon size="small" />
        </Fab>

        <Fab size="small"
          aria-label="add"
          sx={{
            marginTop: 'auto',
            marginBottom: 'auto',
          }}
          onClick={() => handleRemove(index)}
        >
          <RemoveIcon size="small" />
        </Fab>
      </div>
    </>
  )
}

export default ContactFrom