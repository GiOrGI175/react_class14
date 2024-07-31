import React, { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

import { UseAuth } from '../../AuthProvaider';

const RequerAuth = (children) => {
  const location = useLocation();
  const { user } = UseAuth();

  if (!user) {
    return <Navigate to='/' />;
  }

  return children;
};

export default RequerAuth;
