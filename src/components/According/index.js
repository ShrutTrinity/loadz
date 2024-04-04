import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';



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
                        color:'black',
                        minHeight: '43px !important',
                        '& .css-eqpfi5-MuiAccordionSummary-content.Mui-expanded ':{
                            margin:'12px 0'
                        },
                        '.css-o4b71y-MuiAccordionSummary-content.Mui-expanded': {
                            margin: '0px',
                            justifyContent:'space-between'
                        },
                        '.css-o4b71y-MuiAccordionSummary-content': {
                            margin: '0px',
                            justifyContent:'space-between'
                        }
                    }}
                >
                  {Object.entries(props.header).map(([itemName, link]) =>  (
                    <Link key={itemName} to={link} style={{color:'black',textDecoration:'none'}}>
                                    <div>{itemName}</div>
                                </Link> 
                    ))}
                    {props.detail && Object.keys(props.detail).length > 0 && <ExpandMoreIcon  />}
                </AccordionSummary>
                { Object.keys(props.detail).length > 0 && (
                    <>
                    {Object.entries(props.detail).map(([itemName, link]) =>  (
                        <AccordionDetails
                         key={itemName} 
                            sx={{
                                borderTop: '1px solid black',
                                fontSize: '13px',
                                fontWeight: '700',
                                paddingLeft: '40px'
                            }}
                        >
                                <Link key={itemName} to={link} style={{color:'black',textDecoration:'none'}}>
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
