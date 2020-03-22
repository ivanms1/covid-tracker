export const formatDataForChart = data => {
  return [
    {
      name: 'Confirmed',
      value: data.confirmed.value
    },
    { name: 'Recovered', value: data.recovered.value },
    { name: 'Deaths', value: data.deaths.value }
  ];
};

export const getBarColor = name => {
  if (name === 'Confirmed') return '#d63447';
  if (name === 'Recovered') return '#21bf73';
  return '#00000';
};
