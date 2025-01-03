// src/components/Reports/EngagementEffectiveness.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import {
  ArcElement,
  Chart as ChartJS,
  Tooltip,
  Legend,
} from 'chart.js';

// Register components
ChartJS.register(ArcElement, Tooltip, Legend);


const EngagementEffectiveness = () => {
  const communications = useSelector(state => state.communication.communications);

  // Simulating response success rates for simplicity
  const effectiveness = communications.reduce((acc, comm) => {
    const randomSuccess = Math.random() > 0.5 ? 1 : 0; // Random success
    acc[comm.type] = (acc[comm.type] || 0) + randomSuccess;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(effectiveness),
    datasets: [
      {
        label: 'Effectiveness',
        data: Object.values(effectiveness),
      },
    ],
  };

  return (
    <div>
      <h3>Engagement Effectiveness</h3>
      <Pie data={data} />
    </div>
  );
};

export default EngagementEffectiveness;
