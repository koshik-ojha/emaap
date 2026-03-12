import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import { CustomButton } from '../../components';

const DashboardHome: React.FC = () => {
  return (
    <>
      <h1 className="mb-0 title-fm">Dashboard</h1>

      {/* Company Info Card */}
      <div className="card mb-4 companyInfoCard">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <h5 className="fw-bold mb-1">Test Company</h5>
            <small className="text-muted">AVCTT8324F</small>
          </div>
          <CustomButton variant="primary" className='w-auto fs-6 text-capitalize'>
            Add Sub User
          </CustomButton>
        </div>
      </div>

      {/* Dashboard Cards */}
      <div className="dashboardCardMain g-4">
        <Link to="/dashboard/gatc-list" className="text-decoration-none">
            <div className="dashboard-card card-draft">
              <div className="icon-wrap">
                <i className="bi bi-file-earmark"></i>
              </div>
              <h6>GATC</h6>
              <h3>1</h3>
          </div>
        </Link>
        
        <div className="dashboard-card card-submitted">
          <div className="icon-wrap">
            <i className="bi bi-send-check"></i>
          </div>
          <h6>Appeal</h6>
          <h3>6</h3>
        </div>
        
        <div className="dashboard-card card-rejected">
          <div className="icon-wrap">
            <i className="bi bi-info-circle"></i>
          </div>
          <h6>Notice</h6>
          <h3>1</h3>
        </div>
        
        <div className="dashboard-card card-pending">
          <div className="icon-wrap">
            <i className="bi bi-hourglass-split"></i>
          </div>
          <h6>Enforcement</h6>
          <h3>3</h3>
        </div>
        
        <Link to="/dashboard/certificate-list" className="text-decoration-none">
          <div className="dashboard-card card-issued">
            <div className="icon-wrap">
              <i className="bi bi-award"></i>
            </div>
            <h6>Certificate Issued</h6>
            <h3>2</h3>
          </div>
        </Link>
      </div>
    </>
  );
};

export default DashboardHome;
