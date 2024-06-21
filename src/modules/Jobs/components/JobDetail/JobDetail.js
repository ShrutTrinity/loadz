import React from 'react';
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';
import { Button, Typography, Grid, Paper } from '@mui/material';
import styles from './jobdetail.module.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
      <Link to="/jobs" className={styles.backLink}>
        <ArrowBackIcon /> Back to Jobs Overview
      </Link>
      <Grid container spacing={2} className={styles.jobDetailContainer}>
        <Grid item xs={12} sm={4} className={styles.jobInfo}>
        
          <Typography variant="h4">Job No:</Typography>
          <Typography variant="h1" className={styles.jobNumber}>248-1</Typography>
          <Button variant="text" className={styles.editButton}>Edit</Button>
          <Button variant="text" className={styles.invoiceButton}>Invoice Job</Button>
          <Typography variant="h2" className={styles.percentage}>0%</Typography>
          <Typography variant="subtitle1">Job Completion: 0.00/ Loads</Typography>
        </Grid>
        <Grid item xs={12} sm={8} className={styles.chartContainer}>
          <Chart
            options={chartOptions}
            series={chartSeries}
            type="bar"
            width="100%"
            height='300'  
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} className={styles.detailsContainer}>
        <Grid item xs={12} sm={2}>
          <Paper className={styles.paper}>
            <Typography variant="body1">Destination: </Typography>
            <Typography variant="body1">Quarry Pit: aa</Typography>
            <Typography variant="body1">Contractor Unit Rate: </Typography>
            <Typography variant="body1">Unit: Loads</Typography>
            <Typography variant="body1">Unit Sale Rate: $0.00</Typography>
            <Typography variant="body1">Unit Cost Rate: $0.00</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper className={styles.paper}>
            <Typography variant="body1">Material: Caliche</Typography>
            <Typography variant="body1">Material Sale Rate: $0.00</Typography>
            <Typography variant="body1">Material Cost Rate: $0.00</Typography>
            <Typography variant="body1">Commissions: </Typography>
            <Typography variant="body1">Scale: </Typography>
            <Typography variant="body1">Material Broker: </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper className={styles.paper}>
            <Typography variant="body1">Ticket</Typography>
            <Typography variant="body1">Fulfilled Qty: 0</Typography>
            <Typography variant="body1">Total Tickets: 0</Typography>
            <Typography variant="body1">Fulfilled Employee Count: 0</Typography>
            <Typography variant="body1">Fulfilled Owner Operator Count: 0</Typography>
            <Typography variant="body1">Fulfilled Sub Contractor Count: 0</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper className={styles.paper}>
            <Typography variant="body1">Hauling</Typography>
            <Typography variant="body1">Hauling Sales: $0.00</Typography>
            <Typography variant="body1">Hauling Cost: $0.00</Typography>
            <Typography variant="body1">Employee Commissions: $0.00</Typography>
            <Typography variant="body1">Subcontractor Costs: $0.00</Typography>
            <Typography variant="body1">Owner Operator Costs: $0.00</Typography>
            <Typography variant="body1">Hauling Revenue: $0.00</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper className={styles.paper}>
            <Typography variant="body1">Material</Typography>
            <Typography variant="body1">Material Sales: $0.00</Typography>
            <Typography variant="body1">Material Cost: $0.00</Typography>
            <Typography variant="body1">Material Revenue: $0.00</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
        <Button variant="contained" className={styles.notesButton}>Notes</Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default JobDetail;

