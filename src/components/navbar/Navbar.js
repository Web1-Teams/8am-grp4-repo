import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assests/Images/Main Page Images/logo.png";
import { TranslateIcon } from "hugeicons-react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="navbar">
      {/* شعار العيادة */}
      <div className="logo-container">
        <img src={logo} className="logo" alt="Logo" />
        <span className="clinic-name"> Vital Care</span>
      </div>

      {/* الروابط الرئيسية */}
      <ul className="nav-links">
        <li>
          <Link to="/">Main Page</Link>
        </li>
        <li className="dropdown">
          <span> Clinics </span>
          <ul className="dropdown-menu">
            <li>
              <Link to="/clinic1">Physiotherapy clinic</Link>
            </li>
            <li>
              <Link to="/clinic2">Self Care Clinic</Link>
            </li>
            <li>
              <Link to="/clinic3">Mental Health Clinic</Link>
            </li>
            <li>
              <Link to="/clinic4">Nutrition Clinic</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/MedicalTeam">Medical Team</Link>
        </li>
      </ul>

      {/* زر القائمة الجانبية */}
      <button className="toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>
      {isSidebarOpen && <Sidebar closeSidebar={toggleSidebar} />}

      {/* أيقونة الترجمة */}
      <div className="translate-icon">
        <a href="#">
          <TranslateIcon />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
