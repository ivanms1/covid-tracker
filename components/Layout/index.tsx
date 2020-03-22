import Navbar from '../Navbar';

import doctor from '../../assets/svg/doctor.svg';

import styles from './Layout.module.css';

const Layout = ({ children, showHeader = true }) => {
  return (
    <div className={styles.Container}>
      <Navbar />
      {showHeader && (
        <div className={styles.Header}>
          <img className={styles.DoctorIcon} src={doctor} alt='doctor' />
          <div className={styles.Title}>
            <h1>COVID-19 Tracker</h1>
            <p className={styles.Credit}>
              Made by <a href='https://github.com/ivanms1'>Ivan</a>
            </p>
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default Layout;
