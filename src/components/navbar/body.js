import React from 'react'
import styles from './styles/body.module.scss'
import PersistentDrawerLeft from './header'
import Chart from 'react-apexcharts'

var options = {
    series: [{
        name: "Desktops",
        // data: [1,1.1,1.2,2.2,5]
    }],
    chart: {
        height: 350,
        type: 'line',
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false
        }
    },
    yaxis: {
        logBase: 5,
        min: 0,
        max: 5,
        tickAmount: 5,
    }

    ,

    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },
    title: {
        text: 'Product Trends by Month',
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
var today = new Date();
var dd = String(today.getDate());
var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December')
var curMonth = months[today.getMonth()]


const Body = () => {
    return (
        <>

            <PersistentDrawerLeft />
            <div className={styles.body}>
                <h2 className={styles.company}>company name</h2>
                <div className={styles.flex}>

                    <div className={styles.chart}>
                        <div className={styles.border}>
                            <Chart options={options} series={options.series} />
                        </div>

                    </div>
                    <div className={styles.boxes}>
                        <div className={styles.box}>
                            <div className={styles.context}>
                                <div className={styles.zero}> 0 </div>
                                <div className={styles.job}> Jobs In Process </div>
                                <div className={styles.ticket}> Ticket Count : 0 </div>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.context}>
                                <div className={styles.zero}> 0 </div>
                                <div className={styles.job}> Jobs Delayed </div>
                                <div className={styles.ticket}> Ticket Count : 0 </div>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.context}>
                                <div className={styles.zero}> 0 </div>
                                <div className={styles.job}> Jobs Complated </div>
                                <div className={styles.ticket}> Ticket Count : 0 </div>
                            </div>
                        </div>
                        <div className={styles.box} style={{ backgroundColor: ' rgb(237, 202, 51)' }}>
                            <div className={styles.context} style={{ color: 'black' }}>
                                <div className={styles.ticket}> {curMonth}</div>
                                <div className={styles.zero}> {dd} </div>
                                <div className={styles.ticket}> Ticket Count : 0 </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </>
    )
}

export default Body
