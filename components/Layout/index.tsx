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
          <h1 className={styles.Title}>COVID-19 Tracker</h1>
        </div>
      )}
      {children}
    </div>
  );
};

export default Layout;
