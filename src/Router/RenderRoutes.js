import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { Setting } from "../Pages/Home/Setting/Setting";
import { News } from "../Pages/News/News";

const PublicRoutes = [
  {
    path: "/",
    component: <Home />,
  },

  {
    path: "/setting",
    component: <Setting />,
  },
  {
    path: "/news",
    component: <News />,
  },
];
const RenderRoutes = () => {
  return (
    <>
      <Routes>
        {PublicRoutes.map((item, index) => (
          <Route path={item.path} key={index} element={item.component} />
        ))}
      </Routes>
    </>
  );
};

export default RenderRoutes;
