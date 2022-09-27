import React from 'react';
import { Outlet } from 'react-router-dom';

function User() {
  return (
    <div>
      유저
      <Outlet />
    </div>
  );
}

export default User;
