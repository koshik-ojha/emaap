import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import './DashboardLayout.css';

interface DashboardLayoutProps {
  children: React.ReactNode;
  userName?: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, userName = 'Neelmani Tiwari' }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <Sidebar collapsed={sidebarCollapsed} />

      {/* Main Content */}
      <div className={`content ${sidebarCollapsed ? 'full' : ''}`} id="content">
        {/* Topbar */}
        <Topbar onToggleSidebar={toggleSidebar} userName={userName} />

        {/* Page Content */}
        <div className=" form-part">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
