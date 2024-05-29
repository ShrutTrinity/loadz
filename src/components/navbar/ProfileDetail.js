import React from 'react';
import List from '@mui/material/List';
import styles from './styles/profile.module.scss';
import UserIcon from '@images/userIcon.svg';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';

const ProfileDetail = () => {
  return (
    <List
      sx={{
        position: 'absolute',
        marginLeft: '-5px',
        top: '50px',
        bgcolor: 'rgb(237, 202, 51)',
        zIndex: 11,
        maxWidth: '150px',
        borderRadius: '8px',
        padding: '8px 0',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px'
      }}
    >
      <div className={styles.Accountcontainer} >
        <Link to='/account' style={{textDecoration:'none'}}>
          <img src={UserIcon} alt='user icon' />
          <span className={styles.accounRoute}>My Account</span>
        </Link>
      </div>
      <div className={styles.Accountcontainer}>
        <ExitToAppIcon
          sx={{
            width: '24px',
            minWidth: '36px',
            marginLeft: '-40px',
            color: 'black'
          }}
        />
        <span className={styles.accounRoute}>Logout</span>
      </div>
    </List>
  )
}

export default ProfileDetail
