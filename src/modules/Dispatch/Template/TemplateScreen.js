import React from 'react';
import styles from './style/templateScreen.module.scss';
import TemplateCard from '../Components/TemplateCard';
import TruckIcon from '@images/dt_dump_truck.png';
import NoImage from '@images/noImage.png';
import { Button } from '@mui/material';

const allStyles = {
  disable: {
    color: 'rgba(0, 0, 0, 0.26)',
    textTransform: 'capitalize',
    fontWeight: '700',
    borderRadius: '0px'
  },
  activeButton: {
    color: 'rgb(237, 202, 51)',
    borderColor: 'rgb(237, 202, 51)',
    borderRadius: '0px',
    textTransform: 'capitalize',
  }
}

const TemplateScreen = ({ open, handleDrawerClose, textSelectorOpen, toggleTextSelector }) => {

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
      <div className={styles.body}
        style={bodyStyles}
        onClick={textSelectorOpen ? toggleTextSelector : bodyclick}
      >
        <div className={styles.container}>

          {/* part1 */}
          <section className={styles.section1}>
            <div className={styles.content}>
              <div className={styles.heading}>
                Available Assets
              </div>

              {/* Driver Content */}
              <div className={styles.contents}>
                <TemplateCard headingName='Driver' />
                <div className={styles.details}>
                  <div className={styles.grid}>
                    <div className={styles.gridItem}>
                      feni Kothadiya
                    </div>
                    <div className={styles.gridItem}>
                      feni Kothadiya
                    </div>
                    <div className={styles.gridItem}>
                      Kothadiya Feniben VipulBhai
                    </div>
                  </div>
                </div>
              </div>

              {/* Trucks Content */}
              <div className={styles.contents}>
                <TemplateCard headingName='Trucks' />
                <div className={styles.details}>
                  <div className={styles.grid}>
                    <div className={styles.gridItem}>
                      <div className={styles.truckCover}>
                        <div className={styles.truckIndex}>
                          1
                        </div>
                        <div className={styles.truckIcon}>
                          <img src={TruckIcon} alt='Truck' />
                        </div>
                      </div>
                    </div>
                    <div className={styles.gridItem}>
                      <div className={styles.truckCover}>
                        <div className={styles.truckIndex}>
                          1
                        </div>
                        <div className={styles.truckIcon}>
                          <img src={TruckIcon} alt='Truck' />
                        </div>
                      </div>
                    </div>
                    <div className={styles.gridItem}>
                      <div className={styles.truckCover}>
                        <div className={styles.truckIndex}>
                          1
                        </div>
                        <div className={styles.truckIcon}>
                          <img src={TruckIcon} alt='Truck' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trailers */}
              <div className={styles.contents}>
                <TemplateCard headingName='Trailers' />
                <div className={styles.details}>
                  <div className={styles.grid}>
                    <div className={styles.gridItem}>
                      <div className={styles.truckCover}>
                        <div className={styles.truckIndex}>
                          122
                        </div>
                        <div className={styles.truckIcon}>
                          <img src={NoImage} alt='trailer' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr className={styles.divider}></hr>
            </div>
          </section>

          {/* part2 */}
          <section className={styles.section1}>
            <div className={styles.content}>
              <div className={styles.heading}>
                Create a Unit
              </div>
              <span className={styles.UnitInstructions}>
                Drag Available Assets onto this space to create unit. The Assets will automatically attach to each when placed in proximity..
              </span>

              <section className={styles.createUnitBox}>
                <div className={styles.dropFields}>
                  <div className={styles.dropFieldOne}>
                    Driver
                  </div>
                  <div className={styles.dropFieldOne}>
                    Truck
                  </div>
                  <div className={styles.dropFieldOne}>
                    Trailer
                  </div>
                </div>

                <div className={styles.buttons}>
                  <Button variant="contained" disabled style={allStyles.disable}>Create Unit</Button>
                  <Button variant="outlined" style={allStyles.activeButton}>Clear</Button>
                </div>
              </section>

              <section className={styles.dispatchList}>
                <div className={styles.listHeading}>
                  Available Units For Dispatch
                </div>
              </section>

            </div>
          </section>

        </div>
      </div>
    </>
  )
}

export default TemplateScreen;