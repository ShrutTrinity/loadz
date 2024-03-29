import React from 'react'
import styles from './styles/customer.module.scss'
import { TextField, InputAdornment, Avatar } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
import FactCheckIcon from '@mui/icons-material/FactCheck';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PaymentsIcon from '@mui/icons-material/Payments';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import credit from '@images/credit.png'
import ArchiveIcon from '@mui/icons-material/Archive';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import inspection from '@images/inspection.png'
const Customer = (props) => {

    const bodyStyles = {
        width: `calc(100% - ${props.open ? 290 : 0}px)`,
        zIndex: 10,
      }; if (window.innerWidth <= 1300) {
        bodyStyles.width = '100%';
        var bodyclick = props.handleDrawerClose;
      }
    
    function stringAvatar(name) {
        return {

            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }
    return (
        <>
            <div className={styles.container} style={bodyStyles} onClick={props.textSelectorOpen ? props.toggleTextSelector : bodyclick}>
                <div className={styles.backrow}></div>
                <div className={styles.CardWrapper}>
                    <div className={styles.contentCard}>
                        <div className={styles.drawer}>
                            <div className={styles.searchbar}>
                                <TextField
                                    size="small"
                                    placeholder='Search Customers'
                                    variant="outlined"
                                    sx={{
                                        '& .css-1q6at85-MuiInputBase-root-MuiOutlinedInput-root': {
                                            borderRadius: '20px',

                                        },
                                        '& .css-1ua80n0-MuiInputBase-input-MuiOutlinedInput-input': {
                                            padding: '05px'
                                        },
                                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 1px 2px;',
                                        border: 'none',
                                        flexGrow: 1,
                                        width: '100%',
                                        borderRadius: '20px',
                                        '@media (max-width: 1200px)': {
                                            width: '100%',
                                            backgroundColor: 'white'
                                        }
                                    }}
                                    InputProps={{

                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon sx={{ color: 'black' }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </div>
                            <div className={styles.listoficon}>
                                <FactCheckIcon />
                                <MonetizationOnIcon />
                                <PaymentsIcon />
                                <FileDownloadIcon />
                                <AddCircleIcon />
                                <img src={credit} alt='credit' className={styles.credit} />
                                <ArchiveIcon />
                                <TravelExploreIcon />
                                <ManageSearchIcon />
                            </div>
                            <div className={styles.profile}>
                                <Avatar sx={{ height: '40px', width: '40px', fontWeight: 800, fontSize: '16px', color: 'black' }} {...stringAvatar('Kent Dodds')} />
                                <div className={styles.name}>
                                    kent dodds
                                    <div className={styles.balance}>
                                        <b>Balance</b>  $0.00
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className={styles.contentWrapper}>
                            <div className={styles.heading}>
                                Customer Details
                            </div>
                            <div className={styles.box}>
                                <div className={styles.circle}>
                                    <img src={inspection} className={styles.image} />
                                </div>
                                <div className={styles.heading2}>
                                    Customer Info
                                </div>
                                <div className={styles.detail}>
                                Choose a customer to view their invoice details.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Customer
