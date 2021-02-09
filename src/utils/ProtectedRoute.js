import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useGlobalState } from "./stateContext";

// restricting access to non-named routes and preventing non logged in users to access protected routes
export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { store } = useGlobalState();
  const { loggedInUser } = store;

  return (
    <Route
      {...rest}
      render={(props) => {
        if (loggedInUser) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
