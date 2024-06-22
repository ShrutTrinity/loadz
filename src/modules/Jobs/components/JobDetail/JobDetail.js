import React from 'react';
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';
import styles from './jobdetail.module.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';

const allStyles = {
  button: {
    color: 'rgb(237, 202, 51)',
    textTransform: 'capitalize',
    padding: '0',
    display: 'flex',
    justifyContent: 'start',
    fontSize: '16px'
  },
  notebtn: {
    backgroundColor: 'none',
    color: 'black',
    textTransform: 'capitalize',
    borderColor:'black',
    borderRadius: '0px',
    width:'70%'
  }
}

const JobDetail = (props) => {
  const chartOptions = {
    chart: {
      id: 'basic-bar'
    },
    xaxis: {
      categories: [1, 2, 3, 4, 5]
    },
    yaxis: {
      logBase: 5,
      min: 0,
      max: 5,
      tickAmount: 5,
    },
  };

  const chartSeries = [{
    name: 'Series 1',
  }];
  const bodyStyles = {
    width: `calc(100% - ${props.open ? 290 : 0}px)`,
    zIndex: 1,
  };
  
  return (
    <div className={styles.container} style={bodyStyles}>

      <section className={styles.content}>

        <section className={styles.detials}>
          <Link to="/jobs" className={styles.backLink}>
            <ArrowBackIcon /> Back to Jobs Overview
          </Link>
          <div className={styles.jobNo}>
            <h5 className={styles.jobHeader}>Job No:</h5>
            <p className={styles.jobNumber}>248-1</p>
            <div className={styles.jobButton}>
              <Button variant='text' style={allStyles.button}>Edit</Button>
              <Button variant='text' style={allStyles.button}>Invoice Job</Button>
            </div>
          </div>

          <div className={styles.numericDetail}>
            <section className={styles.percentage}>
              0%
            </section>
            <section className={styles.percentage}>
              <span>Job Completion:</span>
              <span className={styles.ratio}>0.00/ Loads</span>
            </section>
          </div>

          <section className={styles.infoDetail}>
            <div className={styles.percentage}>
              <div className={styles.keysValue}>
                <span className={styles.key}>Destination:</span>
                <span className={styles.key}>Quarry Pit:</span>
                <span className={styles.key}>Contractor Unit Rate:</span>
                <span className={styles.key}>Unit:</span>
                <span className={styles.key}>Unit Sale Rate:</span>
                <span className={styles.key}>Unit Cost Rate:</span>
              </div>
            </div>
            <div className={styles.percentage}>
              <div className={styles.keysValue}>
                <span className={styles.key}>Material:</span>
                <span className={styles.key}>Material Sale Rate:</span>
                <span className={styles.key}>Material Cost Rate:</span>
                <span className={styles.key}>Commissions:</span>
                <span className={styles.key}>Scale:</span>
                <span className={styles.key}>Material Broker:</span>
              </div>
            </div>
          </section>
        </section>

        <section className={styles.graphicalDetail}>
          <div className={styles.graph}>
            <Chart
              options={chartOptions}
              series={chartSeries}
              type="bar"
              width="100%"
              height='300'
            />
          </div>

          <div className={styles.discriptions}>
            <div className={styles.ticket}>
              <h4 className={styles.heading}>Ticket</h4>
              <span className={styles.disc}>Fulfilled Qty: 0</span>
              <span className={styles.disc}>Total Tickets: 0</span>
              <span className={styles.disc}>Fulfilled Employee Count: 0</span>
              <span className={styles.disc}>Fulfilled Owner Operator Count: 0</span>
              <span className={styles.disc}>Fulfilled Sub Contractor Count: 0</span>
            </div>

            <div className={styles.ticket}>
              <h4 className={styles.heading}>Hauling</h4>
              <span className={styles.disc}>Hauling Sales: $0.00</span>
              <span className={styles.disc}>Hauling Cost: $0.00</span>
              <span className={styles.disc}>Employee Commissions: $0.00</span>
              <span className={styles.disc}>Subcontractor Costs: $0</span>
              <span className={styles.disc}>Owner Operator Costs: $0.00</span>
              <span className={styles.disc}>Hauling Revenue: $0.00</span>
            </div>

            <div className={styles.ticket}>
              <h4 className={styles.heading}>Material</h4>
              <span className={styles.disc}>Material Sales: $0.00</span>
              <span className={styles.disc}>Material Cost: $0.00</span>
              <span className={styles.disc}>Material Revenue: $0.00</span>
            </div>

            <div className={styles.notebtn}>
              <Button style={allStyles.notebtn} variant='outlined'>
                Notes
              </Button>
            </div>
          </div>
        </section>

      </section>
    </div>
  );
}

export default JobDetail;