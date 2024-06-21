import React, { useState, useEffect } from 'react';
import styles from './style/timeSheetDetail.module.scss';
import MailIcon from '@mui/icons-material/Mail';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { format, startOfWeek, addDays } from 'date-fns';
import { styled } from '@mui/material/styles';

const generateDateRanges = (numWeeks = 10) => {
  const startDate = startOfWeek(new Date(), { weekStartsOn: 1 });
  const dateRanges = [];

  for (let i = 0; i < numWeeks; i++) {
    const start = addDays(startDate, i * 7);
    const end = addDays(start, 6);
    dateRanges.push({
      start,
      end,
      label: `${format(start, 'EEEE, MMMM do yyyy')} to ${format(end, 'EEEE, MMMM do yyyy')}`
    });
  }

  return dateRanges;
};

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  '&.Mui-selected': {
    backgroundColor: 'rgba(237, 202, 51, 0.08)',
    '&:hover': {
      backgroundColor: 'rgba(237, 202, 51, 0.16)',
    },
  },
}));

const TimeSheetDetail = () => {
  const [selectedRange, setSelectedRange] = useState('');
  const [dateRanges, setDateRanges] = useState([]);

  useEffect(() => {
    const ranges = generateDateRanges();
    setDateRanges(ranges);
    setSelectedRange(ranges[0].label);
  }, []);

  const handleChangeRange = (event) => {
    setSelectedRange(event.target.value);
  };

  return (
    <>
      <div className={styles.heading}></div>
      <section className={styles.body}>
        <section className={styles.driverDetails}>
          <h4 className={styles.driverName}>KENT DODDS</h4>
          <div className={styles.details}>
            <section className={styles.mainCol}>
              <h4 className={styles.detail}>Address: ...</h4>
              <h4 className={styles.detail}>Email: ...</h4>
              <h4 className={styles.detail}>Phone Number:
                <span className={styles.number}>
                  (635) 328-4017
                </span>
              </h4>
            </section>
            <section className={styles.mailCol}>
              <MailIcon />
            </section>
          </div>
        </section>

        <section className={styles.timeSelector}>
          <FormControl fullWidth>
            <InputLabel id="date-range-select-label"></InputLabel>
            <Select
              labelId="date-range-select-label"
              id="date-range-select"
              value={selectedRange}
              onChange={handleChangeRange}
              sx={{
                padding: '6px 9px',
                fontSize: '14px'
              }}
            >
              {dateRanges.map((range, index) => (
                <CustomMenuItem key={index} value={range.label}>
                  {range.label}
                </CustomMenuItem>
              ))}
            </Select>
          </FormControl>
        </section>
      </section>
    </>
  );
};

export default TimeSheetDetail;