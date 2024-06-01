import React from 'react';
import styles from './style/templateScreen.module.scss';
import TemplateCard from '../Components/TemplateCard';

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
          <section className={styles.section1}>
            <div className={styles.content}>
              <div className={styles.heading}>
                Available Assets
              </div>
              <div className={styles.driverContent}>
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

              <hr className={styles.divider}></hr>
            </div>
          </section>
          <section className={styles.section1}>
            <div className={styles.content}>
              <div className={styles.heading}>
                Create a Unit
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default TemplateScreen;