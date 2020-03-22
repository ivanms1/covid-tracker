import React, { useState } from 'react';
import useSWR from 'swr';
import fetch from 'isomorphic-unfetch';
import Select from 'react-select';

import Layout from '../../components/Layout';
import BarChart from '../../components/BarChart';

import { countries } from '../../assets/countries';

import styles from './Country.module.css';

const formattedCountries = countries.map(country => ({
  label: country.name,
  value: country.code.toLowerCase()
}));

const fetcher = url => fetch(url).then(r => r.json());

const Country = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const { data } = useSWR(
    selectedCountry
      ? `https://covid19.mathdro.id/api/countries/${selectedCountry.value}`
      : null,
    fetcher
  );

  return (
    <Layout>
      <Select
        options={formattedCountries}
        className={styles.Select}
        placeholder='Search Country'
        onChange={e => setSelectedCountry(e)}
      />
      <div className={styles.ChartContainer}>
        {selectedCountry && data && !data.error && process.browser && (
          <BarChart data={data} />
        )}
        {selectedCountry && !data && <h3>Loading...</h3>}
        {!selectedCountry && <h3>Please Select a Country</h3>}
        {data && data.error && <h3>Country not found</h3>}
      </div>
    </Layout>
  );
};

// export const getStaticPaths = () => {
//   return {
//     paths: [{ params: { id: 'us' } }],
//     fallback: true
//   };
// };

// export const getStaticProps: GetStaticProps = async context => {
//   const { params } = context;
//   const res = await fetch(
//     `https://covid19.mathdro.id/api/countries/${params.id}`
//   );
//   const data = await res.json();
//   return {
//     props: {
//       data
//     }
//   };
// };

export default Country;
