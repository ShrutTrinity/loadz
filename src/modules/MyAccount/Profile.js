import React, { useState } from 'react'
import styles from './Styles/profile.module.scss'
import AppleIcon from '@mui/icons-material/Apple';
import profile from '@images/profile.jpg'
import Formcontroller from '@components/navbar/Formcontroller';
import EditProfileInfo from './EditInfo/EditProfileInfo';

const Profile = ({ open, handleDrawerClose, textSelectorOpen, toggleTextSelector }) => {

  const  [editProfileInfo,setEditProfileInfo] = useState(false)

  const handleEditProfileDialog = () =>{
    setEditProfileInfo(!editProfileInfo)
  }
  const bodyStyles = {
    width: `calc(100% - ${open ? 290 : 0}px)`,
    zIndex: 1,
  };
  if (window.innerWidth <= 1300) {
    bodyStyles.width = '100%';
    var bodyclick = handleDrawerClose;
  }
  return (
    <>
    <EditProfileInfo open={editProfileInfo} onClose={handleEditProfileDialog}/>
      <div className={styles.container}  style={bodyStyles}
        onClick={textSelectorOpen ? toggleTextSelector : bodyclick}>
        <div className={styles.userProfile}>
          <div className={styles.heading}> User Profile</div>
          <div className={styles.profileContainer}>
            <div className={styles.detail}>
              <div className={styles.img}>
                <img src={profile} alt='profile' />
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
                  <b>Linux<br /></b>

                  Chrome<br />

                  Mumbai, MH, IN<br />

                  5/28/2024 10:28 am
                </div>
              </div>
            </div>
            <div className={styles.editbtn}>
              <button className={styles.btn} onClick={handleEditProfileDialog}>Edit Profile Info</button>
            </div>
          </div>
        </div>
        <div className={styles.companyProfile}>
          <div className={styles.heading}> Company Profile</div>
          <div className={styles.profileContainer}>
            <div className={styles.detail}>
              <div className={styles.img}>
                <img src={profile} alt='profile' />
              </div>
              <div className={styles.nameDetail}>
                <div className={styles.address}><b>Company Name: </b>abc</div>
                <div className={styles.address}><b>Company Number: </b>123</div>
                <div className={styles.address}><b>Email: </b>abc@gmail.com</div>
                <div className={styles.address}><b>Phone Number: </b>1234565798</div>
                <div className={styles.address}><b>Address: </b>abcde fghi</div>
                <div className={styles.address}><b>City: </b>xyz</div>
                <div className={styles.address}><b>State: </b>opq</div>
                <div className={styles.address}><b>Zip: </b>122223</div>
                <div className={styles.address}><b>Tax Rate: </b>12%</div>
                <div className={styles.address}><b>Company Wait Rate: </b>$13</div>
              </div>
            </div>
            <div className={styles.switches}>
              <div className={styles.heading2}>
                Inspection Settings
              </div>
              <div className={styles.contorl}>
                <Formcontroller label='Enable Contractors' />
                <Formcontroller label='Employee can Skip' />
                <Formcontroller label='Enable Notifications' />
              </div>
              <div className={styles.heading2}>
                Time Clock Settings
              </div>
              <div className={styles.contorl}>
                <Formcontroller label='Contractors' />
                <Formcontroller label='Employees' />
              </div>
            </div>
            <div className={styles.editbtn}>
              <div className={styles.heading2}>Automated Batches</div>
              <div className={styles.detail2}>
                <div>Ticket Batches : Batches run at 17:00 Hrs (05:00 pm CST) everyday</div>
                <div>  Driver Payroll : Batches run at 23:59 Hrs (11:59 pm CST) Sunday</div>
                <div>Automated Invoices : Invoices run at 23:59 Hrs (11:59 pm CST) Friday</div>
              </div>
              <div className={styles.heading2}>Documents</div>
              <div className={styles.detail2}>
              <div> W9: N/A <br/></div>
              <div> Insurance: Available</div>
              </div>
              <button className={styles.btn}>Edit Company Info</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile

