import React from "react";
import { Link } from "react-router-dom";
function Unauthorized() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      Unauthorized
      <Link to="/login">
        <button type="button" className="btn btn-primary bg-red-600">
          login
        </button>
      </Link>
    </div>
  );
}

export default Unauthorized;
