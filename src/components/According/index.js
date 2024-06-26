import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Tooltip } from '@mui/material';

const According = (props) => {
  return (
    <>
      <Accordion sx={{ boxShadow: 0, margin: '0 !important' }} >
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            borderTop: '1px solid black',
            fontSize: '13px',

            fontWeight: '700',
            color: 'black',
            minHeight: '43px !important',
            '& .css-eqpfi5-MuiAccordionSummary-content.Mui-expanded ': {
              margin: '12px 0'
            },
            '& .css-eqpfi5-MuiAccordionSummary-content': {
              justifyContent: 'space-between'
            },

          }}
        >
          {Object.entries(props.header).map(([itemName, link]) => (
            <Link key={itemName} to={link} style={{ color: 'black', textDecoration: 'none' }}>
              <div>{itemName}</div>
            </Link>
          ))}
          {Object.entries(props.header).map(([itemName, link]) => (
            <Link key={itemName} to={link} style={{ color: 'black', textDecoration: 'none' }}>
              {itemName === 'SUBCONTRACTORS' && (
                <Tooltip title="Subcontractors are independent truck owners who operate under their own authority. They maintain ownership of their trucks and are responsible for their own subscriptions. As a result, subcontractors do not contribute towards your subscription count">
                  <ErrorOutlineIcon />
                </Tooltip>
              )}
              {itemName === 'OWNER OPERATORS' && (
                <Tooltip sx={{'& .css-ja5taz-MuiTooltio-tooltip':{
                  'fontSize':'20px'
                }}} title="Owner Operators are independent truck owners without their own Loadz subscription. They count as a subscription seat per driver.">
                  <ErrorOutlineIcon />
                </Tooltip>
              )}
            </Link>
          ))}
          {props.detail && Object.keys(props.detail).length > 0 && <ExpandMoreIcon />}
        </AccordionSummary>
        {Object.keys(props.detail).length > 0 && (
          <>
            {Object.entries(props.detail).map(([itemName, link]) => (
              <AccordionDetails
                key={itemName}
                sx={{
                  borderTop: '1px solid black',
                  fontSize: '13px',
                  fontWeight: '700',
                  paddingLeft: '40px'
                }}
              >
                <Link key={itemName} to={link} style={{ color: 'black', textDecoration: 'none' }}>
                  <div>{itemName}</div>
                </Link>
              </AccordionDetails>
            ))}
          </>
        )}

      </Accordion>
    </>
  )
}

export default According
