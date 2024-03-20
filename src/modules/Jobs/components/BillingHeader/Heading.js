import React from 'react';
import styles from './styles/header.module.scss';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Heading = () => {
  return (
    <div className={styles.header}>
      <div className={styles.heading}>
        <Link to="/jobs/new" className={styles.backLink}>
          <div className={styles.part1}>
            <ArrowBackIcon fontSize="small" />
            <span>Back to Jobs Overview</span>
          </div>
        </Link>
        <div className={styles.part2}>
          <div className={styles.headerText1}>
            <h4>Job No. 6</h4>
          </div>
          <span>Job Billing Details</span>
        </div>
      </div>
    </div>
  )
}

export default Heading
