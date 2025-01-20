import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TimeSeriesChart = ({ bills }) => {
  const monthlyData = bills.reduce((acc, bill) => {
    const date = new Date(bill.date);
    const month = date.toLocaleString('default', { month: 'long' });
    acc[month] = (acc[month] || 0) + parseFloat(bill.amount);
    return acc;
  }, {});

  const labels = Object.keys(monthlyData);
  const data = Object.values(monthlyData);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Monthly Billing Amount (₹)',
        data,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Monthly Billing Cycle' },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div >
      <h4 className='pt-5'>Monthly Billing Cycle</h4>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default TimeSeriesChart;
