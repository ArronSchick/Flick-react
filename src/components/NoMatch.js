import React from "react";
// if trying to access any routes other than allowed/protected routes will return this page
const NoMatch = () => {
  return (
    <div>
      <h1>404: page not found</h1>
    </div>
  );
};

export default NoMatch;
