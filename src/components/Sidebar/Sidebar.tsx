import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
import { 
  Building,
  Speedometer2,
  Award,
  FileEarmarkPlus,
  ChatLeftText,
  Megaphone,
  CalendarEvent
} from 'react-bootstrap-icons';
import './Sidebar.css';

interface SubMenuItem {
  label: string;
  path: string;
}

interface MenuItem {
  type: 'link' | 'accordion';
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  path?: string;
  eventKey?: string;
  submenu?: SubMenuItem[];
}

// Sidebar Menu Configuration
const menuItems: MenuItem[] = [
  {
    type: 'link',
    icon: Speedometer2,
    label: 'Dashboard',
    path: '/dashboard'
  },
  {
    type: 'accordion',
    icon: Award,
    label: 'Create Certificate',
    eventKey: '0',
    submenu: [
      { label: 'Certificate List', path: '/dashboard/certificate-list' },
      { label: 'Certificate Upload', path: '/dashboard/certificate-upload' },
      { label: 'Energy Meters', path: '/dashboard/energy-meters' },
      { label: 'Gas Meters', path: '/dashboard/gas-meters' },
      { label: 'NAWI Class III (≤150kg)', path: '/dashboard/nawi-class-iii' },
      { label: 'Tape Measures', path: '/dashboard/tape-measures' }
    ]
  },
  {
    type: 'link',
    icon: FileEarmarkPlus,
    label: 'Apply for GATC',
    path: '/dashboard/gatc-list'
  },
  {
    type: 'link',
    icon: ChatLeftText,
    label: 'Appeal',
    path: '/dashboard/appeal'
  },
  {
    type: 'link',
    icon: Megaphone,
    label: 'Notices',
    path: '/dashboard/notices'
  },
  {
    type: 'link',
    icon: CalendarEvent,
    label: 'Inspection Date',
    path: '/dashboard/inspection-date'
  },
  {
    type: 'link',
    icon: Award,
    label: 'Certificate Issue',
    path: '/dashboard/certificate-issue'
  }
];

interface SidebarProps {
  collapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
  const location = useLocation();

  const instrumentPathMap: Record<string, string> = {
    'Energy Meter': '/dashboard/energy-meters',
    'Gas Meter': '/dashboard/gas-meters',
    'Tape Measure': '/dashboard/tape-measures',
    'Non-Automatic Weighing Instrument of Accuracy Class': '/dashboard/nawi-class-iii',
  };

  const isActive = (path: string): boolean => {
    if (location.pathname === path) return true;
    if (location.pathname === '/dashboard/add-certificate') {
      const instrumentType = (location.state as { instrumentType?: string })?.instrumentType;
      return !!instrumentType && instrumentPathMap[instrumentType] === path;
    }
    return false;
  };

  const renderMenuItem = (item: MenuItem, index: number): React.ReactNode => {
    const IconComponent = item.icon;

    if (item.type === 'link') {
      return (
        <Link 
          key={index}
          to={item.path!} 
          className={`d-block text-white text-decoration-none ${isActive(item.path!) ? 'active' : ''}`}
        >
          <IconComponent size={16} className="me-2" />{item.label}
        </Link>
      );
    }

    if (item.type === 'accordion') {
      return (
        <Accordion key={index} id="sidebarMenu">
          <Accordion.Item eventKey={item.eventKey!} className="border-0">
            <Accordion.Button className="text-white shadow-none">
              <IconComponent size={16} className="me-2" /> {item.label}
            </Accordion.Button>
            <Accordion.Body>
              {item.submenu?.map((subItem, subIndex) => (
                <Link 
                  key={subIndex}
                  to={subItem.path} 
                  className={`d-block text-white text-decoration-none mb-1 ${isActive(subItem.path) ? 'active' : ''}`}
                >
                  {subItem.label}
                </Link>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      );
    }

    return null;
  };

  return (
    <div className={`sidebar text-white ${collapsed ? 'collapsed' : ''}`} id="sidebar">
      {/* Logo Section */}
      <h4 className="logo-sec">
        <img src="/images/logo.png" alt="Logo" />
      </h4>

      {/* Dynamic Menu Items */}
      <div className='dashboardMenu'>
        {menuItems.map((item, index) => renderMenuItem(item, index))}
      </div>
    </div>
  );
};

export default Sidebar;
