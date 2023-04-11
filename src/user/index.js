import React from 'react';
import Navbar from '../components/layout/Navbar.js';
import { Outlet } from 'react-router-dom';
export default function UserModule() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
