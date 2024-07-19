import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { routesArray } from "../Utilities/Routes";

const NavRoutes = () => {
  return (
    <div>
      <nav>
        <ul style={{ display: "flex", flexWrap: 'wrap' }}>
          {routesArray.map((route) => (
            <li key={route.path}>
              <NavLink to={route.path} end activeClassName="active">
                {route.path === "/"
                  ? "Todo List"
                  : route.path.substring(1).charAt(0).toUpperCase() +
                    route.path.slice(2)}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default NavRoutes;
