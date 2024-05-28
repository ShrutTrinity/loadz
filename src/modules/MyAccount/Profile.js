import React from 'react'
import styles from './Styles/profile.module.scss'
import AppleIcon from '@mui/icons-material/Apple';

const Profile = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.userProfile}>
          <div className={styles.heading}> User Profile</div>
          <div className={styles.profileContainer}>
            <div className={styles.detail}>
              <div className={styles.img}>
                <img src='' alt='profile' />
              </div>
              <div className={styles.nameDetail}>
                <div className={styles.name}>Feni Kothadiya</div>
                <div className={styles.address}><b>Address: </b>abc</div>
                <div className={styles.address}><b>Email: </b>abc</div>
                <div className={styles.address}><b>Phone Number: </b>1234565798</div>
              </div>
            </div>
            <div className={styles.session}>
              <div className={styles.running}>
                <div className={styles.leftside}>
                  <AppleIcon className={styles.icon} />
                   <div>1 session(s) on Mac</div>
                </div>
                <div className={styles.rightside}>
                  <b>Linux<br/></b>

                  Chrome<br/>

                  Mumbai, MH, IN<br/>

                  5/28/2024 10:28 am
                </div>
              </div>
            </div>
            <div className={styles.editbtn}>
              <button className={styles.btn}>Edit Profile Info</button>
            </div>
          </div>
        </div>
        <div className={styles.userProfile}>
          <div className={styles.heading}> Company Profile</div>
          <div className={styles.profileContainer}>
            <div className={styles.detail}>
              <div className={styles.img}>
                <img src='' alt='profile' />
              </div>
              <div className={styles.nameDetail}>
                <div className={styles.address}><b>Company Name: </b>abc</div>
                <div className={styles.address}><b>Company Number: </b>abc</div>
                <div className={styles.address}><b>Email: </b>1234565798</div>
                <div className={styles.address}><b>Phone Number: </b>1234565798</div>
                <div className={styles.address}><b>Address: </b>1234565798</div>
                <div className={styles.address}><b>City: </b>1234565798</div>
                <div className={styles.address}><b>State: </b>1234565798</div>
                <div className={styles.address}><b>Zip: </b>1234565798</div>
                <div className={styles.address}><b>Tax Rate: </b>1234565798</div>
                <div className={styles.address}><b>Company Wait Rate: </b>1234565798</div>
              </div>
            </div>
            <div className={styles.session}>
              <div className={styles.running}>
                <div className={styles.leftside}>
                  <AppleIcon className={styles.icon} />
                   <div>1 session(s) on Mac</div>
                </div>
                <div className={styles.rightside}>
                  <b>Linux<br/></b>

                  Chrome<br/>

                  Mumbai, MH, IN<br/>

                  5/28/2024 10:28 am
                </div>
              </div>
            </div>
            <div className={styles.editbtn}>
              <button className={styles.btn}>Edit Profile Info</button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Profile
