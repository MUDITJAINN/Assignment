// src/components/User/NotificationPanel.js
import React from 'react';
import { useSelector } from 'react-redux';

const NotificationPanel = () => {
  const communications = useSelector(state => state.communication.communications);
  const overdue = communications.filter(comm => new Date(comm.date) < new Date());
  const dueToday = communications.filter(comm => {
    const today = new Date();
    const commDate = new Date(comm.date);
    return commDate.getDate() === today.getDate() &&
           commDate.getMonth() === today.getMonth() &&
           commDate.getFullYear() === today.getFullYear();
  });

  return (
    <div>
      <h3>Notifications</h3>
      <div>
        <h4>Overdue Communications</h4>
        {overdue.length > 0 ? (
          <ul>
            {overdue.map((comm, index) => (
              <li key={index}>{comm.companyName} - {comm.type} ({comm.date})</li>
            ))}
          </ul>
        ) : (
          <p>No overdue communications.</p>
        )}
      </div>
      <div>
        <h4>Today's Communications</h4>
        {dueToday.length > 0 ? (
          <ul>
            {dueToday.map((comm, index) => (
              <li key={index}>{comm.companyName} - {comm.type} ({comm.date})</li>
            ))}
          </ul>
        ) : (
          <p>No communications due today.</p>
        )}
      </div>
    </div>
  );
};

export default NotificationPanel;
