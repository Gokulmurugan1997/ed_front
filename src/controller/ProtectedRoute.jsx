import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, isAuthenticated }) => {
  // Check if the user is authenticated (this could be done using context, state, or localStorage)
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the children (i.e., the protected route content)
  return children;
};

export default ProtectedRoute;
