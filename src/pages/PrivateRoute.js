import React, { Children } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const { isAuthenicated, user } = useAuth0;
  const isUser = isAuthenicated && user;

  if (!isUser) {
    return <Navigate to="login" />;
  }
  return Children;
};
export default PrivateRoute;
