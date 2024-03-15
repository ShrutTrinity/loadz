import { TextField } from '@mui/material'
import React from 'react'

const ContactFrom = ({ handleChange, handleChangedecrese,index }) => {
    return (
        <>
        <div style={{display:'flex',gap:'10px', marginTop:'10px'}}>  
                <TextField
                sx={{
                    width: '20%',
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(0, 0, 0, 0.23)',
                    },
                    '& .MuiInputLabel-outlined.Mui-focused': {
                        color: 'rgb(237, 202, 51)',
                    },
                }}
                id='title'
                name='title'
                type='title'
                label='Title'
                variant='outlined'

            />

            <TextField
                sx={{
                    width: '20%',
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(0, 0, 0, 0.23)',
                    },
                    '& .MuiInputLabel-outlined.Mui-focused': {
                        color: 'rgb(237, 202, 51)',
                    },
                }}
                id='name'
                name='name'
                type='name'
                label='Name'
                variant='outlined'

            />

            <TextField
                sx={{
                    width: '20%',
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(0, 0, 0, 0.23)',
                    },
                    '& .MuiInputLabel-outlined.Mui-focused': {
                        color: 'rgb(237, 202, 51)',
                    },
                }}
                id='email'
                name='email'
                type='email'
                label='Email'
                variant='outlined'

            />
            <TextField
                sx={{
                    width: '20%',
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(0, 0, 0, 0.23)',
                    },
                    '& .MuiInputLabel-outlined.Mui-focused': {
                        color: 'rgb(237, 202, 51)',
                    },
                }}
                id='phone'
                name='phone'
                type='phone'
                label='Phone'
                variant='outlined'

            />
                 
            <button style={{
                marginTop: 'auto',
                marginBottom: 'auto',
                height: '40px',
                width: '4%',
                fontSize: '25px',
                border: 'none',
                borderRadius: ' 50%',
                backgroundColor: 'rgb(237, 202, 51)',
                boxShadow: ' 4px 4px 9px -6px #222rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px'

            }} onClick={handleChange}>+</button >
                <button style={{
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    height: '40px',
                    width: '4%',
                    fontSize: '25px',
                    border: 'none',
                    borderRadius: ' 50%',
                    boxShadow: ' 4px 4px 9px -6px #222rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px'

                }} onClick={()=>{handleChangedecrese(index)}}>-</button >
           </div>
           
  

        </>
    )
}

export default ContactFrom
