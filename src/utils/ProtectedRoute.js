import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useGlobalState } from "./stateContext";

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
