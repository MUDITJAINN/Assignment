// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'; 
import CompanyManagement from './components/admin/CompanyManagement';
import CommunicationMethod from './components/admin/CommunicationMethod';
import Dashboard from './components/User/Dashboard';
import NotificationPanel from './components/User/NotificationPanel';
import CalendarView from './components/User/CalendarView';
import CommunicationFrequency from './components/Reports/CommunicationFrequency';
import EngagementEffectiveness from './components/Reports/EngagementEffectiveness';
import './App.css';
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <nav className="navbar">
            <NavLink to="/" className="nav-link" end>
              Dashboard
            </NavLink>
            <NavLink to="/notifications" className="nav-link">
              Notifications
            </NavLink>
            <NavLink to="/calendar" className="nav-link">
              Calendar
            </NavLink>
            <NavLink to="/admin/companies" className="nav-link">
              Company Management
            </NavLink>
            <NavLink to="/admin/methods" className="nav-link">
              Communication Methods
            </NavLink>
            <NavLink to="/log" className="nav-link">
              Log Communication
            </NavLink>
            <NavLink to="/reports/frequency" className="nav-link">
              Communication Frequency
            </NavLink>
            <NavLink to="/reports/effectiveness" className="nav-link">
              Engagement Effectiveness
            </NavLink>
          </nav>
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/notifications" element={<NotificationPanel />} />
              <Route path="/calendar" element={<CalendarView />} />
              <Route path="/admin/companies" element={<CompanyManagement />} />
              <Route path="/admin/methods" element={<CommunicationMethod />} />
              <Route path="/reports/frequency" element={<CommunicationFrequency />} />
              <Route path="/reports/effectiveness" element={<EngagementEffectiveness />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;