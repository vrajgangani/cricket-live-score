import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import News from "../Pages/News/News";
import RateApp from "../Pages/Setting/RateApp";
import ShareApp from "../Pages/Setting/ShareApp";
import PrivacyPolicies from "../Pages/Setting/PrivacyPolicies";
import TermsAndConditions from "../Pages/Setting/TermsAndConditions";
import Setting from "../Pages/Setting/Setting";

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
  {
    path: "/rateApp",
    component: <RateApp />,
  },
  {
    path: "/shareApp",
    component: <ShareApp />,
  },
  {
    path: "/privacyPolicies",
    component: <PrivacyPolicies />,
  },
  {
    path: "/termsAndConditions",
    component: <TermsAndConditions />,
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
