import React from 'react';
import { Outlet } from 'react-router-dom';

const RootMyPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[375px] h-[812px]">
        <Outlet />
      </div>
    </div>
  );
};

export default RootMyPage;
