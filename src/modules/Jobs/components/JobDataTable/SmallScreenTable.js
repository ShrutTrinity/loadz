import React, { useState } from 'react';
import data from '../../job.json';
import styles from './styles/datatable.module.scss';

const fields = [
  { key: 'JobNo', label: 'Job No' },
  { key: 'Customer', label: 'Customer' },
  { key: 'Destination', label: 'Destination' },
  { key: 'Material', label: 'Material' },
  { key: 'Qty', label: 'Qty' },
  { key: 'CompletedTickets', label: 'Completed Tickets' },
  { key: 'LastActivity', label: 'Last Activity' },
  { key: 'DateCreated', label: 'Date Created' },
  { key: 'Status', label: 'Status' },
  { key: 'InProgress', label: 'In Progress', isBoolean: true },
  { key: 'Edit', label: 'Edit', isBoolean: true },
];

const DataRow = ({ item, isSelected, onCheckboxChange }) => (
  <div className={styles.datarow}>
    <div className={styles.check}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={isSelected}
        onChange={() => onCheckboxChange(item.id)}
      />
    </div>
    {fields.map(({ key, label, isBoolean }) => (
      <div key={key} className={styles.dataitem}>
        <span className={styles.datakey}>{label}:</span>
        <span className={styles.datavalue}>
          {isBoolean ? (item[key] ? 'Yes' : 'No') : item[key]}
        </span>
      </div>
    ))}
  </div>
);

const SmallScreenTable = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleCheckboxChange = (id) => {
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.includes(id)
        ? prevSelectedRows.filter(rowId => rowId !== id)
        : [...prevSelectedRows, id]
    );
  };

  return (
    <div className={styles.card}>
      {data.map((item) => (
        <DataRow
          key={item.id}
          item={item}
          isSelected={selectedRows.includes(item.id)}
          onCheckboxChange={handleCheckboxChange}
        />
      ))}
    </div>
  );
}

export default SmallScreenTable;