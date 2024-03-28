import React, { useState } from 'react';
import data from '../../job.json';
import styles from './styles/datatable.module.scss'

const DataTable = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  // Function to handle checkbox change
  const handleCheckboxChange = (id) => {
    const selectedIndex = selectedRows.indexOf(id);
    if (selectedIndex === -1) {
      setSelectedRows([...selectedRows, id]);
    } else {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id));
    }
  };

  return (
      <div className={styles.card}>
      {data.map((item) => (
        <div key={item.id} className={styles.datarow}>
        <div className={styles.check}>
          <input 
          className={styles.checkbox}
            type="checkbox"
            checked={selectedRows.includes(item.id)}
            onChange={() => handleCheckboxChange(item.id)}
          />
          </div>
          <div className={styles.dataitem}>
            <span className={styles.datakey}>JobNo:</span>
            <span className={styles.datavalue}>{item.JobNo}</span>
          </div>
          <div className={styles.dataitem}>
            <span className={styles.datakey}>Customer:</span>
            <span className={styles.datavalue}>{item.Customer}</span>
          </div>
          <div className={styles.dataitem}>
            <span className={styles.datakey}>Destination:</span>
            <span className={styles.datavalue}>{item.Destination}</span>
          </div>
          <div className={styles.dataitem}>
            <span className={styles.datakey}>Material:</span>
            <span className={styles.datavalue}>{item.Material}</span>
          </div>
          <div className={styles.dataitem}>
            <span className={styles.datakey}>Qty:</span>
            <span className={styles.datavalue}>{item.Qty}</span>
          </div>
          <div className={styles.dataitem}>
            <span className={styles.datakey}>Completed Tickets:</span>
            <span className={styles.datavalue}>{item.CompletedTickets}</span>
          </div>
          <div className={styles.dataitem}>
            <span className={styles.datakey}>Last Activity:</span>
            <span className={styles.datavalue}>{item.LastActivity}</span>
          </div>
          <div className={styles.dataitem}>
            <span className={styles.datakey}>Date Created:</span>
            <span className={styles.datavalue}>{item.DateCreated}</span>
          </div>
          <div className={styles.dataitem}>
            <span className={styles.datakey}>Status:</span>
            <span className={styles.datavalue}>{item.Status}</span>
          </div>
          <div className={styles.dataitem}>
            <span className={styles.datakey}>In Progress:</span>
            <span className={styles.datavalue}>{item.InProgress ? 'Yes' : 'No'}</span>
          </div>
          <div className={styles.dataitem}>
            <span className={styles.datakey}>Edit:</span>
            <span className={styles.datavalue}>{item.Edit ? 'Yes' : 'No'}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataTable;
