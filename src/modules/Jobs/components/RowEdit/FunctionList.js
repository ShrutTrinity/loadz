import React from 'react'
import styles from './styles/functionList.module.scss';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';

const FunctionList = () => {
  return (
    <div className={styles.container} >
      <div className={styles.archive}>
        <ArchiveIcon />
        <span className={styles.heading}>Archive</span>
      </div>
      <div className={styles.delete}>
        <DeleteIcon />
        <span className={styles.heading}>Delete</span>
      </div>
    </div>
  )
}

export default FunctionList
