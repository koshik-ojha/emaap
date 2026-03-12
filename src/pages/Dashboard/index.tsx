import React from 'react';
import { Outlet } from 'react-router-dom';
import { DashboardLayout } from '../../components';

const Dashboard: React.FC = () => {
  return (
    <DashboardLayout userName="Neelmani Tiwari">
      <Outlet />
    </DashboardLayout>
  );
};

export default Dashboard;
