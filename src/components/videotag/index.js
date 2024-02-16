import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Index = (props) => {
    
        const [isBoxVisible, setBoxVisibility] = useState(true);
      
        const handleCloseButtonClick = () => {
          setBoxVisibility(false);
        };
  return (
    <>
     {isBoxVisible && (
      <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <Box
          sx={{
            width: '80vw',
            position: 'relative',
            backgroundColor: '#424242',
            border: '2px solid rgb(237, 202, 51)',
            overflowY: 'auto',
            borderRadius: '5px',
            height:'90vh',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            // alignItems: 'center',
            
          }}
        >
          <IconButton
            style={{ position: 'absolute', top: '8px', right: '8px', color: 'white' }}
            onClick={handleCloseButtonClick}
          >
            <CloseIcon />
          </IconButton>
          <div style={{position:'relative', width: '100%', height: 'calc(80vh - 32px)',paddingBottom:'56.33%' }}>
            <iframe
              src="https://player.vimeo.com/video/785867459?h=9407503e01"
              title="Vimeo video"
              allowFullScreen
              style={{ width: '100%',position:'absolute', top:0,left:0, height: '100%', border:'2px solid rgb(237, 202, 51)' }}
            ></iframe>
          </div>
          <Box sx={{ mt: 2 }}>
            <Typography gutterBottom variant="body2" sx={{color:'rgb(237, 202, 51)',fontSize:'24px',fontWeight:600}}>
              Heading
            </Typography>
            <Typography display="block" variant="caption" color="text.secondary" sx={{color:'white',fontSize:'14px'}}>
              Description
            </Typography>
          </Box>
        </Box>
      </Grid>
     )}
    </>
  );
};

export default Index;
