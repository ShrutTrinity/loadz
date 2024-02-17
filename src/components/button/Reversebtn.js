import React from 'react'
import WestIcon from '@mui/icons-material/West';

const Reversebtn = ({onBack}) => {
  return (
    <>
      <WestIcon fontSize="small" sx={{cursor:'pointer'}}  onClick={onBack} />
    </>
  )
}

export default Reversebtn
