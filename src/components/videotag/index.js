import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Video = (props) => {


  const [isBoxVisible, setBoxVisibility] = useState(true);

  const handleCloseButtonClick = () => {
    setBoxVisibility(false);
    props.setIsOpen(false)
  };
  return (
    <>
      {isBoxVisible && (
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', position: 'absolute' }}>
          <Box
            sx={{
              width: '80vw',
              position: 'relative',
              backgroundColor: '#424242',
              border: '2px solid rgb(237, 202, 51)',
              overflowY: 'auto',
              borderRadius: '5px',
              height: '90%',
              padding: '40px',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              '@media (max-width: 1000px)': {
                height: 'auto',
                padding: '20px'
              },

            }}
          >
            <IconButton
              sx={{
                position: 'absolute',
                top: '0px',
                right: '0px',
                color: 'white',
          
                '@media (max-width: 1000px)': {
                  fontSize: '14px', // Adjust the font size for smaller screens
                },
              }}
              onClick={handleCloseButtonClick}
            >
              <CloseIcon fontSize="12" />
            </IconButton>
            <div style={{ position: 'relative', width: '100%', paddingBottom: '56.33%' }}>
              <iframe
                src={props.srcLink}
                title="Vimeo video"
                allowFullScreen
                style={{ width: '100%', position: 'absolute', top: 0, left: 0, height: '100%', border: '2px solid rgb(237, 202, 51)' }}
              ></iframe>
            </div>
            <Box sx={{ mt: 2 }}>
              <Typography gutterBottom variant="body2"
                sx={{
                  color: 'rgb(237, 202, 51)',
                  fontSize: '24px',
                  fontWeight: 600,
                  '@media (max-width: 600px)': {
                    fontSize: '16px',

                  },
                }}

              >

                {props.title}
              </Typography>

              <Typography display="block" variant="caption" color="text.secondary" sx={{ color: 'white', fontSize: '14px' }}>
                {props.discription}
              </Typography>
            </Box>
          </Box>
        </Grid>
      )}
    </>
  );
};

export default Video;
