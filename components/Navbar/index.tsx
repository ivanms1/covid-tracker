import Link from 'next/link';

import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <Link href='/'>
        <span>Worldwide</span>
      </Link>
      <Link href='/country'>
        <span>By Country</span>
      </Link>
      <Link href='/what-to-do'>
        <span>What To Do</span>
      </Link>
    </div>
  );
};

export default Navbar;
