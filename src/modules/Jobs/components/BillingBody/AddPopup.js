import styles from "./styles/addPopup.module.scss"
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddPopup = (props) => {

    const [persionType, setPersionType] = useState('');

    const handleChange = (event) => {
        setPersionType(event.target.value);
    };


    return (
        <div className={styles.mainBody}>
            <div className={styles.container}>
                <h2 className={styles.popUpHeading}>
                    Add New Special Rates
                </h2>
                <div className={styles.content}>
                    <div className={styles.part1}>
                        <label className={styles.labelOfpart1}>
                            Owner Operator / Subcontractor
                        </label>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={persionType}
                            onChange={handleChange}
                        >
                            <MenuItem sx={{ background: 'rgb(237, 202, 51) !important', fontSize: '13px' }} value={10}>Subcontractor</MenuItem>
                            <MenuItem sx={{ background: 'rgb(237, 202, 51) !important', fontSize: '13px' }} value={20}>Owner Operator</MenuItem>
                        </Select>

                    </div>

                    <div className={styles.part1}>
                        <label className={styles.labelOfpart2}>
                            Rate
                        </label>
                        <br />
                        <TextField id="outlined-basic" placeholder="0" />
                    </div>
                </div>
                <footer className={styles.footer}>
                    <Button
                        variant="text"
                        sx={{ color: 'rgb(237, 202, 51)', fontSize: '13px' }}
                        onClick={props.closePopUp}
                    >Cancel</Button>
                    <Button
                        variant="text"
                        sx={{ color: 'rgb(237, 202, 51)', fontSize: '13px' }}
                    >Create</Button>
                </footer>
            </div>
        </div>
    )
}

export default AddPopup
