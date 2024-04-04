import React from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CommonTextfield from '@Jobs/components/TextField/CommonTextfield'
import styles from './Styles/applyPayment.module.scss'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';

const Paymentmethods = ['Web Payment', 'Online Credit Card', 'Online ACH', 'Terminal', 'In Store Credit Card', 'Other', 'Offline Credit Card', 'Offline ACH', 'Cash', 'Check', 'Wire Transfer']

const ApplyPayment = ({ handleClose, openPaymentDailog }) => {

    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
            padding: theme.spacing(2),

        },
        '& .MuiDialogActions-root': {
            padding: theme.spacing(1),
        },
    }));
    return (
        <>
            <BootstrapDialog
                sx={{
                    '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
                        borderRadius: '10px'
                    }   
                }}
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={openPaymentDailog}
            >
                <DialogTitle sx={{ m: 0, p: 2, fontWeight: 400 }} id="customized-dialog-title">
                    Apply Payments
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <div className={styles.flex}>
                        <CommonTextfield
                            id='name'
                            name='name'
                            type='name'
                            label='Customer Name'
                            width='100'

                        />

                        <div className={styles.dollar}>
                            ${30.00}
                        </div>
                    </div>
                    <hr className="MuiDivider-root MuiDivider-fullWidth muiltr-39bbo6"></hr>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>

                        <DemoContainer components={['DatePicker']}>
                            <DatePicker sx={{
                                '& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root': {
                                    color: 'rgb(237, 202, 51)'
                                },
                                '& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
                                    color: 'rgb(237, 202, 51)'
                                },
                                '& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline ': {
                                    borderColor: '#98999a'
                                }
                            }} label="Payment Date" />


                        </DemoContainer>
                    </LocalizationProvider>
                    <div className={styles.flex2}>
                        <FormControl sx={{ width: '50%', }}>

                            <Select
                                sx={{
                                    '& .css-1nfzlfx-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused .MuiOutlinedInput-notchedOutline ': {
                                        borderColor: 'gray'
                                    }
                                }}
                                defaultValue={6}
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {
                                    Paymentmethods.map((method, index) => (
                                        <MenuItem value={index}>{method}</MenuItem>
                                    ))
                                }

                            </Select>
                        </FormControl>
                        <CommonTextfield
                            id='number'
                            name='number'
                            type='number'
                            label='Reference No.'
                            width='50%'

                        />
                        <TextField
                            sx={{
                                width: `${50}%`,
                                margin: '15px 0 15px 0',
                                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'rgba(0, 0, 0, 0.23)',
                                },
                                '& .MuiInputLabel-outlined.Mui-focused': {
                                    color: 'rgb(237, 202, 51)',
                                },
                                '@media (max-width: 700px)': {
                                    width: '97%'
                                }
                            }}

                            type='number'
                            label='Amount Recived'
                            variant='outlined'
                            defaultValue='$0.00'

                        />
                    </div>
                    <hr className="MuiDivider-root MuiDivider-fullWidth muiltr-39bbo6"></hr>
                    <div className={styles.card}>
                        <CommonTextfield
                            id='invioceNo'
                            name='invioceNo'
                            type='invioceNo'
                            label='Find Invioce No'
                            width='50%'

                        />

                    </div>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Save changes
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </>
    )
}

export default ApplyPayment

