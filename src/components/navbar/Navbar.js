import React from 'react';
import './navbar.css';
import logo from '../../assests/Images/Main Page Images/logo.png';
import { TranslateIcon } from 'hugeicons-react';
import Sidebar from './Sidebar';
import { useState } from 'react';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} className="logo" alt="Logo" />
        <span className="clinic-name">فيتال كير</span>
      </div>
      <ul className="nav-links">
        <li><a href="/">الرئيسية</a></li>
        <li className="dropdown">
          <a href="#">العيادات الطبية</a>
          <ul className="dropdown-menu">
            <li><a href="#">العيادة 1</a></li>
            <li><a href="#">العيادة 2</a></li>
            <li><a href="#">العيادة 3</a></li>
            <li><a href="#">العيادة 4</a></li>
            <li><a href="#">العيادة 5</a></li>
          </ul>
        </li>
        <li><a href="#">الفريق الطبي</a></li>
      </ul>
      <button className="toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>
      {isSidebarOpen && <Sidebar closeSidebar={toggleSidebar} />}
      <div className="translate-icon">
        <a href="./Index_main en.html">
          <TranslateIcon />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
