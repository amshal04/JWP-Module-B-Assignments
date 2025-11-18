import React from 'react';
import styles from './CampusLife.module.css';

import campusImage from '../../assets/campus-2.png';
import pencilIcon from '../../assets/pencil.png';
import graphIcon from '../../assets/graph.png';
import settingIcon from '../../assets/setting.png';
import design from '../../assets/design.png';
import arrowIcon from '../../assets/right-arrow.png';
import bgImage from '../../assets/campus-1.png'; 

const CampusLife = () => {
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <h1 className={styles.sectionTitle}>
        Campus Life
        <img src={design} alt="decorative underline" className={styles.design} />
      </h1>

      <div className={styles.campusContainer}>
  <div className={styles.leftContent}>
  
    <div className={styles.allCardsWrapper}>
    
      {/* CARD 1 */}
      <div className={styles.cardMain}>
        <img src={pencilIcon} alt="icon" className={styles.icon} />
        <div className={styles.cardText}>
          <h2>Do More, Stress Less</h2>
          <p>Why I say old chap that is spiffing he legged it in my flat easy peasy.</p>
        </div>
        <button className={styles.arrowBtn}>
          <img src={arrowIcon} alt="arrow" />
        </button>
      </div>

      {/* CARD 2 */}
      <div className={styles.cardMain}>
        <img src={graphIcon} alt="icon" className={styles.icon} />
        <div className={styles.cardText}>
          <h2>The Business Intelligence</h2>
          <p>Why I say old chap that is spiffing he legged it in my flat easy peasy.</p>
        </div>
        <button className={styles.arrowBtn}>
          <img src={arrowIcon} alt="arrow" />
        </button>
      </div>

      {/* CARD 3 */}
      <div className={styles.cardMain}>
        <img src={settingIcon} alt="icon" className={styles.icon} />
        <div className={styles.cardText}>
          <h2>System Administration</h2>
          <p>Why I say old chap that is spiffing he legged it in my flat easy peasy.</p>
        </div>
        <button className={styles.arrowBtn}>
          <img src={arrowIcon} alt="arrow" />
        </button>
      </div>

    </div>
    
  </div>

  <div className={styles.imageWrapper}>
    <img src={campusImage} alt="Campus" className={styles.campusImage} />
  </div>
</div>


      <div className={styles.buttonWrapper}>
        <button className={styles.ctaButton}>More About Campus Life →</button>
      </div>
    </div>
  );
};

export default CampusLife;