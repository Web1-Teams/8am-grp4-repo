import React from "react";
import { Link } from "react-router-dom"; // استخدام Link للتنقل الديناميكي
import "./navbar.css"; // ملف CSS لتنسيق Sidebar

const Sidebar = ({ closeSidebar }) => {
  return (
    <div className="sidebar">
      {/* زر الإغلاق */}
      <button className="close-btn" onClick={closeSidebar}>
        ✖
      </button>

      {/* روابط Sidebar */}
      <ul className="sidebar-links">
        <li>
          <Link to="/" onClick={closeSidebar}>
            الرئيسية
          </Link>
        </li>
        <li>
          <span>العيادات الطبية</span>
          <ul>
            <li>
              <Link to="/clinic1" onClick={closeSidebar}>
                العيادة 1
              </Link>
            </li>
            <li>
              <Link to="/clinic2" onClick={closeSidebar}>
                العيادة 2
              </Link>
            </li>
            <li>
              <Link to="/clinic3" onClick={closeSidebar}>
                العيادة 3
              </Link>
            </li>
            <li>
              <Link to="/clinic4" onClick={closeSidebar}>
                العيادة 4
              </Link>
            </li>
            <li>
              <Link to="/clinic5" onClick={closeSidebar}>
                العيادة 5
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/team" onClick={closeSidebar}>
            الفريق الطبي
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeSidebar}>
            عن المشروع
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
