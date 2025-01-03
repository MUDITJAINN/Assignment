// src/components/Reports/CommunicationFrequency.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import {
  Chart as ChartJS, Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

let chartInstance;

function renderChart(canvas, data, options) {
  if (chartInstance) {
    chartInstance.destroy(); // Destroy the previous chart instance
  }

  chartInstance = new Chart(canvas, {
    type: 'bar', // or any other chart type
    data,
    options,
  });
}

const CommunicationFrequency = () => {
  const communications = useSelector(state => state.communication.communications);
  const frequencies = communications.reduce((acc, comm) => {
    acc[comm.type] = (acc[comm.type] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(frequencies),
    datasets: [
      {
        label: 'Frequency',
        data: Object.values(frequencies),
      },
    ],
  };

  return (
    <div>
      <h3>Communication Frequency</h3>
      <Bar data={data} />
    </div>
  );
};

export default CommunicationFrequency;
