import React from 'react'
import styles from './styles/body.module.scss'
import Chart from 'react-apexcharts'

var today = new Date();
var dd = String(today.getDate());
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var curMonth = months[today.getMonth()]
var month = (today.getUTCMonth() + 1) 
.toString().padStart(2, '0') 
var curYear = today.getFullYear()
const lastWeekDate = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
var lastdd = String(lastWeekDate.getDate());
var lastMonth = (lastWeekDate.getUTCMonth() + 1).toString().padStart(2, '0') 
var lastYear = lastWeekDate.getFullYear()
var options = {
    series: [{
        name: "Desktops",
        // data: [1,1.1,1.2,2.2,5]
    }],
    chart: {

        width: "100%",
        height: "100%",

        type: 'line',
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
            borderRadius: 10,
            columnWidth: '100%',
            barHeight: '100%',
            colors: {
                backgroundBarColors: ['#E7E7E6'],
                backgroundBarRadius: '11px',
            },
        },
    },
    yaxis: {
        logBase: 5,
        min: 0,
        max: 5,
        tickAmount: 5,
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },
    title: {
        text:`${lastdd}/${lastMonth}/${lastYear} to ${dd}/${month}/${curYear}`,
        align: 'left'
    },
    grid: {
        row: {
            colors: ['#f3f3f3', 'transparent'],
            opacity: 0
        },
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
};


const Body = (props) => {

    
    const bodyStyles = {   
        width: `calc(100% - ${props.open ? 290 : 0}px)`,
        zIndex: 1,
    };

    if (window.innerWidth <= 1300) {
        bodyStyles.width = '100%';
        var bodyclick = props.handleDrawerClose;
    }
   
    return (
        <>
            
            <div className={styles.body} 
            style={bodyStyles} 
            onClick={
              props.textSelectorOpen ?
               props.toggleTextSelector : 
               bodyclick}   >
                <h2 className={styles.company}>Company Name</h2>
                <div className={styles.contain} >
                    <div className={styles.flex}>
                        <div className={styles.chart}>
                            <div className={styles.border}>
                                <Chart options={options} 
                                series={options.series} 
                                width={`${props.open ? '99%' : '100%'}`} 
                                height={`${props.open ? '260%' : '260%'}`} />
                            </div>
                        </div>
                        <div className={styles.boxes}>
                          
                                <a className={styles.box} 
                                style={{ cursor: 'pointer' }} 
                                href='#Progress'>
                               
                                    <div className={styles.context} >
                                        <div className={styles.zero}> 0 </div>
                                        <div className={styles.job}> Jobs In Process </div>
                                        <div className={styles.ticket}> Ticket Count : 0 </div>
                                    </div>


              </a>

              <a className={styles.box} style={{ cursor: 'pointer' }} href='#Complated'>
                <div className={styles.context}>
                  <div className={styles.zero}> 0 </div>
                  <div className={styles.job}> Jobs Delayed</div>
                  <div className={styles.ticket}> Ticket Count : 0 </div>
                </div>
              </a>
              <a className={styles.box} style={{ cursor: 'pointer' }} href='#Delayed'>
                <div className={styles.context}>
                  <div className={styles.zero}> 0 </div>
                  <div className={styles.job}> Jobs Complated </div>
                  <div className={styles.ticket}> Ticket Count : 0 </div>
                </div>
              </a>
              <div className={styles.box} style={{ backgroundColor: ' rgb(237, 202, 51)' }}>
                <div className={styles.context}  style={{ color: 'black' }}>
                  <div className={styles.ticket}> {curMonth}</div>
                  <div className={styles.zero} > {dd} </div>
                  <div className={styles.ticket} > {curYear}</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contain2} id='Progress'>
            <h3 className={styles.title}>In Progress</h3>
            <div className={styles.flex2}>
              <div className={styles.detail} >
                There are no tickets in progress
              </div>
            </div>
          </div>
          <div className={styles.contain2} id='Complated'>
            <h3 className={styles.title}>Completed Today</h3>

            <div className={styles.flex2}>
              <div className={styles.detail}>
                There are no tickets completed today
              </div>
            </div>


          </div>
          <div className={styles.contain2} id='Delayed'>
            <h3 className={styles.title}>Delayed</h3>
            <div className={styles.flex2}>
              <div className={styles.detail} >
                There are no delayed tickets
              </div>
            </div>


          </div>

        </div>
        
      </div>
    </>
  )
}

export default Body