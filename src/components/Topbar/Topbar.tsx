import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import './Topbar.css';

interface TopbarProps {
  onToggleSidebar: () => void;
  userName?: string;
}

const Topbar: React.FC<TopbarProps> = ({ onToggleSidebar, userName = 'Neelmani Tiwari' }) => {
  return (
    <div className="topbar d-flex align-items-center">
      {/* Hamburger Menu */}
      <span 
        onClick={onToggleSidebar} 
        style={{ cursor: 'pointer', fontSize: '20px' }}
      >
        ☰
      </span>

      {/* User Dropdown */}
      <div className="ms-auto dropdown">
        <Dropdown align="end">
          <Dropdown.Toggle 
            as="a" 
            id="user-dropdown" 
            className="text-white text-decoration-none dropdown-toggle"
            role="button"
          >
            <span>
              <img src="/images/user.png" alt="img" />
            </span> 
            {userName}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/my-profile">
              My Profile
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/change-password">
              Change Password
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/login">
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Topbar;
