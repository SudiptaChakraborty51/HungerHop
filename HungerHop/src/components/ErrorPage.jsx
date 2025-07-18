import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="error-page">
      <h1>
        {error?.status} - {error?.statusText}
      </h1>
      <p>
        {error?.data || "Sorry, the page you are looking for does not exist."}
      </p>
    </div>
  );
};

export default ErrorPage;
