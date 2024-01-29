import {Navigate, useLocation} from "react-router-dom";
import React from "react";
import {useAuth} from "../hooks";


const ProtectedAuth = ({ element:E }:{element:React.ComponentType<unknown>}) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation()
  // const params = new URLSearchParams(location.pathname)

  return isAuthenticated ? <E/> : <Navigate to={`/login/?redirectTo=${location.pathname}`} replace />;
};

export default ProtectedAuth;
