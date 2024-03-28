import React from 'react'
import styles from './styles/customer.module.scss'
import { TextField, InputAdornment } from '@mui/material'
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
const Customer = () => {
    return (
        <>
            <div className={styles.container}>
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
                                        '& .css-1ua80n0-MuiInputBase-input-MuiOutlinedInput-input' : {
                                            padding:'05px'
                                        },
                                        boxShadow:'rgba(0, 0, 0, 0.24) 0px 1px 2px;',
                                        border:'none',
                                        flexGrow: 1,
                                        borderRadius: '20px',
                                        '@media (max-width: 1200px)': {
                                            width: '100%',
                                            backgroundColor:'white'
                                        }
                                    }}
                                    InputProps={{
                                
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon sx={{color:'black'}} />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </div>
                                <p className={styles.customer}>Customers</p>
                                <div className={styles.listoficon}>
                                    <FactCheckIcon/>
                                    <MonetizationOnIcon/>
                                    <PaymentsIcon/>
                                    <FileDownloadIcon/>
                                    <AddCircleIcon/>
                                    <img src={credit} alt='credit'  className={styles.credit}/>
                                    <ArchiveIcon/>
                                    <TravelExploreIcon/>
                                    <ManageSearchIcon/>
                                </div>
                        </div>
                        <div className={styles.contentWrapper}>
                                    
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Customer
