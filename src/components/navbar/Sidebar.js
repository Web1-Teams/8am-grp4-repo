import React from "react";

const Sidebar = ({ closeSidebar }) => {
  return (
    <div className="sidebar">
      <button className="close-btn" onClick={closeSidebar}>
        ✖
      </button>
      <ul className="sidebar-links">
        <li><a href="/">الرئيسية</a></li>
        <li>
          <a href="#">العيادات الطبية</a>
          <ul>
            <li><a href="#">العيادة 1</a></li>
            <li><a href="#">العيادة 2</a></li>
            <li><a href="#">العيادة 3</a></li>
            <li><a href="#">العيادة 4</a></li>
            <li><a href="#">العيادة 5</a></li>
          </ul>
        </li>
        <li><a href="#">الفريق الطبي</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
