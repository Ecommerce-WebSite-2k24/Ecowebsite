
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  { id: 0, value: 10, label: 'series A' },
  { id: 1, value: 15, label: 'series B' },
  { id: 2, value: 20, label: 'series C' },
  { id: 2, value: 20, label: 'series C' },
  { id: 2, value: 20, label: 'series C' },  
];
const Chartt = () => {
  return (
    <div>
        <h3>Stats By Category</h3>
      <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={200}
    />
    </div>
  )
}

export default Chartt