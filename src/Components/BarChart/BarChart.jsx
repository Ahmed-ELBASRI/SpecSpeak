// import  from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// eslint-disable-next-line react/prop-types
const BarChart = ({ chartData }) => {
  // Set up options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Bar Chart Example',
      },
    },
  };

  return (
    <div style={{ width: '600px', height: '400px' }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
