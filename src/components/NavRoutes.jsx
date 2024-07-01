import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const NavRoutes = () => {
  return (
    <div>

      <nav>
        <ul style={{display: 'flex'}}>
          <li>
            <NavLink to="/" end activeClassName="active">Todo List</NavLink>
          </li>
           
           {/* Not a good practice to use a tag becoz it reloads the page  */}
          <li>
            <a href="/Input" >Input</a>
          </li>

          <li>
            <NavLink to="/counter" activeClassName="active">Counter</NavLink>
          </li>
          <li>
            <NavLink to="/toggle" activeClassName="active">Toggle</NavLink>
          </li>
        </ul>
      </nav>

      {/* child will render from the router */}
      <Outlet />

    </div>
  );
};

export default NavRoutes;
