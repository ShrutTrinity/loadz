import React from 'react'
import MiscpayContainer from '../../Driver/MiscpayContainer'
 

const MiscPayDetail = (props) => {

  return (
    <>
      <div style={{
       position:'relative',
       height:`${props.height-65}px`,
       overflow:'auto'
      }} >
        <MiscpayContainer />
      </div>
    </>
  )
}

export default MiscPayDetail
