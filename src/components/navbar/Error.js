import React from 'react';
import styles from './styles/error.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <div className={styles.errorNumber}>
          <h1 className={styles.errorText}>404</h1>
        </div>
        <div className={styles.errorMessage}>
          <h5 className={styles.message}>
            Sorry but we could not find the page you are looking for
          </h5>
        </div>
        <div className={styles.searchContainer}>
          <SearchIcon sx={{ height: '24px', width: '24px' }} />
          <div className={styles.inputCover}>
            <input type="text" placeholder='Search for anything' />
          </div>
        </div>
        <div className={styles.linkToRoute}>
          <Link to='/body' className={styles.route}>
            Go back to dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Error