import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/owneroperatorDetailScreen.module.scss';
import SettingsIcon from '@mui/icons-material/Settings';
import AddTaskIcon from '@mui/icons-material/AddTask';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DownloadIcon from '@mui/icons-material/Download';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import ArchiveIcon from '@mui/icons-material/Archive';
import OwnerDetailTable from './OwnerDetailTable';
import { Tooltip } from '@mui/material';
import AddDriverDialog from './Driver/AddDriverDialog';
import EarnignDialog from './EarningDialog';
import EditOwnerOperator from './EditOwnerOperator/EditOwnerOperatorDetail';
import ArchiveAlertDialog from '../../Driver/ArchiveAlertDialog';

const OwnerOperatorDetail = (props) => {
  const { email, phoneNumber } = props;
  const [remainingHeight, setRemainingHeight] = useState(0);
  const [inviteDriver,setInviteDriver] =useState(false);
  const[earningDialog,setEarningDialog] = useState(false);
  const[editOwnerOperator,setEditOwnerOperator] = useState(false);
  const[archivealert,setArchiveAlert] = useState(false);

  const openArchivealertDialog = () =>{
    setArchiveAlert(!archivealert)
  }

  const handleEditDialog = ()=>{
    setEditOwnerOperator(!editOwnerOperator)
  }
  const HandleEarningDialog = (e) => {
    setEarningDialog(!earningDialog)
  }

  const InviteDriverDaiologHnadle = ()=>{
    setInviteDriver(!inviteDriver)
  }

  const cardContainerRef = useRef(null);
  const boxRef = useRef(null)

  const calculateRemainingHeight = () => {
    const screenHeight = boxRef.current.offsetHeight;
    const cardContainerHeight = cardContainerRef.current.offsetHeight;
    setRemainingHeight(screenHeight - cardContainerHeight);
  };

  useEffect(() => {
    calculateRemainingHeight();
    window.addEventListener('resize', calculateRemainingHeight);
    return () => {
      window.removeEventListener('resize', calculateRemainingHeight);
    };
  }, []);

  return (
    <>
    <ArchiveAlertDialog open={archivealert} onClose={openArchivealertDialog}/>
    <EditOwnerOperator open={editOwnerOperator} onClose={handleEditDialog}/>
    <EarnignDialog open={earningDialog} onClose={HandleEarningDialog}/> 
    <AddDriverDialog open={inviteDriver} onClose={InviteDriverDaiologHnadle}/>
      <div className={styles.heading}>Owner Operators Details</div>
      <div className={styles.box} ref={boxRef}>
        <div className={styles.cardContainer} ref={cardContainerRef}  >
          <div className={styles.driverCard}>
            <h3 className={styles.heading1}>KENT DODDS</h3>
            <div className={styles.cardFlex}>
              <div className={styles.flexItem1}>
                <div className={styles.items}><b>Email: </b>{email}</div>
                <div className={styles.items}><b>Phone Number: </b>{phoneNumber}</div>
              </div>
              <div className={styles.flexItem2}>
                <div className={styles.items}><b>Balance: </b>{email}</div>
              </div>
            </div>
            <div className={styles.icon}>
              <Tooltip title="Force Get Invoices" placement="top">
                <AddTaskIcon sx={{cursor:'pointer'}}/>
              </Tooltip>
              <Tooltip title="Invite Drivers" placement="top">
                <AddCircleIcon sx={{cursor:'pointer'}} onClick={InviteDriverDaiologHnadle}/>
              </Tooltip>
              <Tooltip title="Edit Owner Operator" placement="top">
                <SettingsIcon sx={{cursor:'pointer'}} onClick={handleEditDialog} />
              </Tooltip>
              <Tooltip title="Owner Operator Earnings" placement="top">
                <RequestQuoteIcon sx={{cursor:'pointer'}} onClick={HandleEarningDialog} />
              </Tooltip>
              <Tooltip title="Download Pending Reconcile Report" placement="top">
                <DownloadIcon sx={{cursor:'pointer'}} />
              </Tooltip>
              <Tooltip title="Archive Owner Operator" placement="top">
                <ArchiveIcon sx={{cursor:'pointer'}} onClick={openArchivealertDialog} />
              </Tooltip>
              <div className={styles.items}>Apply Payments</div>
            </div>
          </div>
        </div>
        <OwnerDetailTable height={remainingHeight} />
      </div>
    </>
  );
};

export default OwnerOperatorDetail;
