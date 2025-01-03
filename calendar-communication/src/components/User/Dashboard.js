// src/components/User/Dashboard.js
import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const companies = useSelector(state => state.company.companies);
  const communications = useSelector(state => state.communication.communications);

  const getLastFiveCommunications = (companyId) => {
    return communications
      .filter(comm => comm.companyId === companyId)
      .slice(-5)
      .map(comm => `${comm.type} (${comm.date})`);
  };

  const getNextCommunication = (companyId) => {
    const upcoming = communications
      .filter(comm => comm.companyId === companyId && new Date(comm.date) > new Date())
      .sort((a, b) => new Date(a.date) - new Date(b.date));
    return upcoming.length > 0 ? `${upcoming[0].type} (${upcoming[0].date})` : 'None';
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Last Five Communications</th>
            <th>Next Scheduled Communication</th>
          </tr>
        </thead>
        <tbody>
          {companies.map(company => {
            const lastCommunications = getLastFiveCommunications(company.id);
            const nextCommunication = getNextCommunication(company.id);
            const highlight = nextCommunication === 'None' ? 'red' : new Date(nextCommunication.split('(')[1].slice(0, -1)) < new Date() ? 'yellow' : '';

            return (
              <tr key={company.id} style={{ backgroundColor: highlight }}>
                <td>{company.name}</td>
                <td>{lastCommunications.join(', ')}</td>
                <td>{nextCommunication}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
