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
        <span className="clinic-name">فيتال كير</span>
      </div>

      {/* الروابط الرئيسية */}
      <ul className="nav-links">
        <li>
          <Link to="/">الرئيسية</Link>
        </li>
        <li className="dropdown">
          <span>العيادات الطبية</span>
          <ul className="dropdown-menu">
            <li>
              <Link to="/clinic1">العيادة 1</Link>
            </li>
            <li>
              <Link to="/clinic2">العيادة 2</Link>
            </li>
            <li>
              <Link to="/clinic3">العيادة 3</Link>
            </li>
            <li>
              <Link to="/clinic4">العيادة 4</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/team">الفريق الطبي</Link>
        </li>
      </ul>

      {/* زر القائمة الجانبية */}
      <button className="toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>
      {isSidebarOpen && <Sidebar closeSidebar={toggleSidebar} />}

      {/* أيقونة الترجمة */}
      <div className="translate-icon">
        <a href="./Index_main en.html">
          <TranslateIcon />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
