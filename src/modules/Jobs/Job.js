import React from 'react'
import styles from './styles/job.module.scss';
import Navigationbar from '../../components/navbar/NavigationBar';
import Index from './components/switchForJob/index';

const Job = () => {
  return (
    <div>
      <div className={styles.navigationbar}>
        <Navigationbar />
      </div>
      <div className={styles.container}>
        <h1 className={styles.titleText}>Jobs</h1>
        <div className={styles.subcontainer}>
          <Index />
          <Index />
          <Index />
        </div>
      </div>
    </div>
  )
}

export default Job
