import React from 'react';
import styles from './style/InvitationModel.module.scss';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
  },
  {
    field:'inviteValid',
    headerName:'Invite Valid',
    width:135
  }
];

const rows = [
  {id:'1',firstName: 'John', lastName:'kl', age:'20'}
];


const Invitation = ({ openInvitationDialog, closeInvitationDialog }) => {
  return (
    <>
      <Dialog
        open={openInvitationDialog}
        onClose={closeInvitationDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"

        sx={{
          '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper ': {
            maxWidth: 'unset',
            width: '90vw',
            borderRadius: '20px',
            fontSize: '10px !important'
          }
        }}
      >
        <div className={styles.container}>
          <div className={styles.heading}>
            Invitations
          </div>
          <div className={styles.content}>
            <Box sx={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
              />
            </Box>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default Invitation
