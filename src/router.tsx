import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";

interface RouterType {
  path: string;
  element: React.ReactElement;
  children?: RouterType[];
}

const pagesData: RouterType[] = [
  {
    path: "/login",
    element: <Login />,
  },
];

const renderRoutes = (pagesData: RouterType[]) =>
  pagesData.map(({ path, element, children }, i) => (
    <Route path={path} element={element} key={i}>
      {children && renderRoutes(children)}
    </Route>
  ));

const Router = () => <Routes>{renderRoutes(pagesData)}</Routes>;

export default Router;
