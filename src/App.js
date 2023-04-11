import React from 'react';
import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './auth/pages/Login';
import UserModule from './user';
import AllContects from './user/pages/contects';
import AddContect from './user/pages/contects/pages/add';
import ContectDetails from './user/pages/contects/pages/details';
export default function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<UserModule />}>
          <Route path="/" element={<AllContects />}>
            <Route path="add" element={<AddContect />} />
            <Route path="details" element={<ContectDetails />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
