import React from 'react'
import { TextField } from '@mui/material';

const CommonTextfield = (props) => {
    return (
        <>
            <TextField
                sx={{
                    width: `${props.width}%`,
                    margin: '15px 0 15px 0',
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(0, 0, 0, 0.23)',
                    },
                    '& .MuiInputLabel-outlined.Mui-focused': {
                        color: 'rgb(237, 202, 51)',
                    },
                    '@media (max-width: 700px)':{
                                            width:'97%'
                                        }
                }}
                placeholder={props.placeholder}
                id={props.id}
                name={props.name}
                type={props.type}
                label={props.label}
                variant='outlined'
               
                required={props.required}
                
            />
        </>
    )
}

export default CommonTextfield
