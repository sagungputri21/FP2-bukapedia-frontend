import React from "react";
import { Navigate } from "react-router-dom";
import useGlobalState from "../../useGlobal";


const PrivateRoute = ({ children, redirectedPath = "/" }) => {
  const [state, dispatch] = useGlobalState()

  console.log("ini di private", state)
    if (state.user===0) {
      /** Redirect them to the /login page, but save the current location they were
      trying to go to when they were redirected. This allows us to send them
      along to that page after they login, which is a nicer user experience
      than dropping them off on the home page. */
      return <Navigate to={redirectedPath} replace />;
    } 
    return children;
}

export default PrivateRoute