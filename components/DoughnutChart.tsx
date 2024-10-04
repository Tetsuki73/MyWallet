"use client";
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

// Register necessary elements
Chart.register(ArcElement, Tooltip, Legend);

// Define the props interface if you're using TypeScript
interface DoughnutChartProps {
  accounts: string[]; // Modify this type according to your data structure
}

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [{
      label: 'banks', // Fixing typo: 'lable' -> 'label'
      data: [10, 20, 30], // You can replace this with dynamic data from 'accounts' if needed
      backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'],
    }],
    labels: ['bank 1', 'bank 2', 'bank 3'], // This can also be dynamic based on 'accounts'
  };

  return (
    <Doughnut
      data={data}
      options={{
        cutout: '60%',
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};

export default DoughnutChart;
