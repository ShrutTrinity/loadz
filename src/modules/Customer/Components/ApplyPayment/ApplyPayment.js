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
                                    required
                                />

                    <div className={styles.dollar}>
                        ${30.00}
                    </div>
                    </div>
                    <hr className="MuiDivider-root MuiDivider-fullWidth muiltr-39bbo6"></hr>
                    <CommonTextfield
                                    id='name'
                                    name='name'
                                    type='date'
                                    label='Customer Name'
                                    width='100'
                                    required
                                />
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
