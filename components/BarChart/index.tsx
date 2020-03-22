import {
  BarChart as LibBarChart,
  ResponsiveContainer,
  Cell,
  XAxis,
  YAxis,
  Bar
} from 'recharts';

import useWindowDimensions from '../UseWindowDimensions';

import { formatDataForChart, getBarColor } from '../helpers';

const CustomBarLabel = ({ payload, x, y, value, width }: any) => {
  return (
    <text x={x + width / 2} y={y} fill='#00000' dy={-6} textAnchor='middle'>
      {value}
    </text>
  );
};

const BarChart = ({ data }) => {
  const { width } = useWindowDimensions();
  const formattedData = formatDataForChart(data);
  return (
    <LibBarChart
      width={width > 800 ? 600 : 350}
      height={350}
      data={formattedData}
    >
      <XAxis dataKey='name' />
      <YAxis />
      <Bar dataKey='value' label={<CustomBarLabel />}>
        {formattedData.map(entry => (
          <Cell key={entry.name} fill={getBarColor(entry.name)} />
        ))}
      </Bar>
    </LibBarChart>
  );
};

export default BarChart;
