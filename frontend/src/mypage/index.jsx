import React from 'react';
import { Outlet } from 'react-router-dom';

const RootMyPage = () => {
  return (
    <div className="flex items-center justify-center">
      <Outlet />
    </div>
  );
};

export default RootMyPage;
