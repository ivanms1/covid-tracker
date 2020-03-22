import Layout from '../../components/Layout';

import washHands from '../../assets/svg/wash-hands.svg';
import socialDistancing from '../../assets/svg/social-distancing.svg';
import stayHome from '../../assets/svg/stay-home.svg';

import styles from './WhatToDo.module.css';

const WhatToDo = () => {
  return (
    <Layout showHeader={false}>
      <div className={styles.Container}>
        <div className={styles.ImageContainer}>
          <img src={washHands} alt='wash hands' />
          <span>Wash Your Hands</span>
        </div>
        <div className={styles.ImageContainer}>
          <img src={stayHome} alt='stay home' />
          <span>Stay Home</span>
        </div>
        <div className={styles.ImageContainer}>
          <img src={socialDistancing} alt='keep your distance' />
          <span>Keep Your Distance</span>
        </div>
      </div>
    </Layout>
  );
};

export default WhatToDo;
