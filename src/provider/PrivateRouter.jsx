import React, {use} from "react";
import {AuthContext} from "./Context";
import {Navigate, useLocation} from "react-router";
import Spinner from "../components/Spinner/Spinner";

const PrivateRouter = ({children}) => {
  const {user, loading} = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Spinner />;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={{from: location?.pathname}} to="/auth/login" />;
};

export default PrivateRouter;
