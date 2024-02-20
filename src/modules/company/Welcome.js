import React from 'react'
import styles from './styles/company.module.scss'
import Logo from '../../images/loadzlogo.png'
import phone from '../../images/phone.png'
import { Link } from 'react-router-dom'
import triangle from '../../images/tringle2.svg'
const Welcome = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.flex}>
                    <div className={styles.col1}>
                        <img src={triangle} className={styles.img} alt='black' />
                        <div className={styles.headingDiscription}>
                            <h1 className={`text-white ${styles.heading}`} >Welcome</h1>
                            <p className={`text-white ${styles.discription}`}>Welcome to Loadz. The next sections will help you get started with the loadz platform.Just follow the instructions in the next, and you ll be up and running in no time.</p>
                        </div>
                        <div className={styles.videodiv2}>
                            <iframe src="https://player.vimeo.com/video/785867459?h=9407503e01" className={styles.video2} title="Vimeo video" allowFullScreen></iframe>
                        </div>
                        <div className={styles.overviewFlex}>
                            <div className={styles.overviewPoint}>
                                <h2 className={`text-white ${styles.overviewHeader}`}>
                                    Overview:
                                </h2>
                                <div className={styles.flex2}>
                                    <span className={` rounded-circle ${styles.overviewNumber}`}> 1</span>
                                    <div className={styles.overview}>Create Account</div>
                                </div>
                                <div className={styles.flex2}>
                                    <span className={` rounded-circle ${styles.overviewNumber}`}> 2</span>
                                    <div className={styles.overview}>Company Setup</div>
                                </div>
                                <div className={styles.flex2}>
                                    <span className={` rounded-circle ${styles.overviewNumber}`}> 3</span>
                                    <div className={styles.overview}>Setup Preferences</div>
                                </div>
                                <div className={styles.flex2}>
                                    <span className={` rounded-circle ${styles.overviewNumber}`}> 4</span>
                                    <div className={styles.overview}>Add Drivers</div>
                                </div>
                                <div className={styles.flex2}>
                                    <span className={` rounded-circle ${styles.overviewNumber}`}> 5</span>
                                    <div className={styles.overview}>Add Trucks & Trailers</div>
                                </div>
                                <div className={styles.flex2}>
                                    <span className={` rounded-circle ${styles.overviewNumber}`}> 6</span>
                                    <div className={styles.overview}>Add Web Users
                                    </div>
                                </div>
                            </div>
                            <div >
                                <img className={styles.phnImage} src={phone}alt='phone' />
                            </div>
                        </div>
                    </div>
                    <div className={styles.col2}>
                        <div className={styles.videodiv}>
                            <iframe src="https://player.vimeo.com/video/785867459?h=9407503e01" className={styles.video} title="Vimeo video" allowFullScreen></iframe>
                            <div className={styles.flex3}>
                                <img className={styles.logo} src={Logo} alt='logo' />
                               <Link to='/subscription/company/1'>
                                <button className={styles.getstarted} > Get Started</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome
