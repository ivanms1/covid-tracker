import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';
import BarChart from '../components/BarChart';

import styles from './Index.module.css';

const Index = ({ data }) => {
  return (
    <Layout>
      <h2 className={styles.Title}>Worldwide</h2>
      <BarChart data={data} />
    </Layout>
  );
};

Index.getInitialProps = async () => {
  const res = await fetch('https://covid19.mathdro.id/api');
  const data = await res.json();

  return {
    data
  };
};

export default Index;
