import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  return (
    <header className="app-header">
      <div class="app-header-logo">AoE Challenge</div>
      <nav class="app-header-nav">
        <ul>
          <li class={location.pathname === "/" ? "active" : undefined}>
            <Link to="/">Home</Link>
          </li>
          <li class={location.pathname === "/units" ? "active" : undefined}>
            <Link to="/units">Units</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
