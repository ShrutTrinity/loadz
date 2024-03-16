import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = { 
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


const SelectUser = ({openCreateUser}) => {

    const [personName, setPersonName] = useState([]);

    const button = <Button
        onClick={openCreateUser}
        sx={{
            color: 'black', 
            padding: '0',
            fontSize: '13px'
        }}>Create customer</Button>

    const names = [
        button,
    ];

    function getStyles(name, personName, theme) {
        return {
            fontWeight:
                personName.indexOf(name) === -1
                    ? theme.typography.fontWeightLight
                    : theme.typography.fontWeightMedium,
            fontSize: '13px',
          
        };
    }

    const theme = useTheme();

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <>
        <div>
            <FormControl sx={{ marginBottom: '10px', width: '100%' }}>
                <Select
                    id="demo-multiple-chip"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                            {selected.map((value) => (
                                <Chip
                                    key={value}
                                    label={value}
                                    sx={{ fontSize: '13px', fontWeight: 300 }}
                                />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
        </>
    );
};

export default SelectUser;
