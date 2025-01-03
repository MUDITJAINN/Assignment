// src/components/User/CalendarView.js
import React from 'react';
import Calendar from 'react-calendar';
import { useSelector } from 'react-redux';

const CalendarView = () => {
  const communications = useSelector(state => state.communication.communications);

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const comms = communications.filter(comm => new Date(comm.date).toDateString() === date.toDateString());
      return comms.map((comm, index) => <p key={index}>{comm.type}</p>);
    }
  };

  return (
    <div>
      <h2>Calendar View</h2>
      <Calendar tileContent={tileContent} />
    </div>
  );
};

export default CalendarView;
