import React from "react";
import { Link, NavLink } from "react-router-dom";
function Sidebar(props) {
  return (
    <div>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">Admin</div>
        </a>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <Link to="/Dashboard" className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />

        <li className="nav-item active">
          <Link to="/user" className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>User</span>
          </Link>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="charts.html">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Charts</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
