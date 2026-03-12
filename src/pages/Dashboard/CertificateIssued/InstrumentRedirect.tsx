import React from 'react';
import { Navigate } from 'react-router-dom';

interface InstrumentRedirectProps {
  instrumentType: string;
}

const InstrumentRedirect: React.FC<InstrumentRedirectProps> = ({ instrumentType }) => {
  return <Navigate to="/dashboard/add-certificate" state={{ instrumentType }} replace />;
};

export default InstrumentRedirect;
