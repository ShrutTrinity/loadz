import React, { useState } from 'react';
import Button from '@mui/material/Button';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';

const FullScreenIcon = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <Button sx={{
      padding: '12px',
      minWidth: '0px',
      margin: '0px',
      color: 'black',
      backgroundColor: 'rgb(237, 202, 51)',
      boxShadow: 'none',
      ':hover': { backgroundColor: 'rgb(237, 202, 51)', boxShadow: 'none' }
    }}
      onClick={toggleFullscreen} variant="contained" color="primary"
    >
      {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
    </Button>
  )
}

export default FullScreenIcon