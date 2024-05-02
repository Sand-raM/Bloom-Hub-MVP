import React from 'react';
import SummaryCards from './SummaryCards';
import Calendar from './Calendar';
import QuickLinks from './QuickLinks';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <SummaryCards />
      <Calendar />
      <QuickLinks />
    </div>
  );
};

export default Dashboard;
