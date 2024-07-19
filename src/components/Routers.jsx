import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NavRoutes from "./NavRoutes";
import Error from "./Error";
import { routesArray } from "../Utilities/Routes";

const Routers = () => {
  // const appRoute = createBrowserRouter([
  //     {
  //       path: '/',
  //       element: <NavRoutes/>,
  //       errorElement: <Error/>,
  //       children: [
  //         {
  //           path: '/',
  //           element: <TodoList />,
  //         },
  //         {
  //           path: '/counter',
  //           element: <Counter />,
  //         },
  //         {
  //           path: '/toggle',
  //           element: <Toggle />,
  //         },
  //         {
  //           path: '/Input',
  //           element: <Input/>,
  //         },

  //         // dynamic routing initialization
  //         {
  //           path: '/Input/:ID',
  //           element: <Toggle/>,
  //         },
  //       ],
  //     },
  //   ]);

  //  simple routing
  //   const appRoute = createBrowserRouter([
  //     {
  //         path: '/',
  //         element: <TodoList/>,
  //     },
  //     {
  //         path: '/counter',
  //         element: <Counter/>,
  //     },

  //     {
  //         path: '/toggle',
  //         element: <Toggle/>,
  //     },
  // ]);

  // another approach

  // const routesArray = [
  //   { path: '/', element: <TodoList /> },
  //   { path: '/counter', element: <Counter /> },
  //   { path: '/toggle', element: <Toggle /> },
  //   { path: '/Input', element: <Input /> },
  //   { path: '/Input/:ID', element: <Toggle /> }
  // ];

  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <NavRoutes />,
      errorElement: <Error />,
      children: routesArray.map((route) => ({
        path: route.path,
        element: route.element,
      })),
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRoute} />
    </div>
  );
};

export default Routers;
