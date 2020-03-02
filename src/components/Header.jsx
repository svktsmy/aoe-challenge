import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  return (
    <header className="header">
      <div className="header-logo">AoE Challenge</div>
      <nav className="header-nav">
        <ul>
          <li className={location.pathname === "/" ? "active" : undefined}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === "/units" ? "active" : undefined}>
            <Link to="/units">Units</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
