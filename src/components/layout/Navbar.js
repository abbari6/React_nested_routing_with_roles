import React from 'react';
import './Navbar.css'; // import custom styling

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">
            Contect
          </a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link">
            brand
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">
            profile
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
