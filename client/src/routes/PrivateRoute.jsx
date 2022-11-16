import { isAuth } from "../helpers/auth";

import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const auth = null; // determine if authorized, from context or however you're doing it

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return isAuth() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
