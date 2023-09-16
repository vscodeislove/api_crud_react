import { Link } from "react-router-dom";

import "./404.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>

      <p>The page you are looking for could not be found.</p>

      <Link to="/">Go Back Home</Link>
    </div>
  );
};

export default NotFound;
