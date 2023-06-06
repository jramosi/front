import { Link, useRouteError } from "react-router-dom";

const Notfound = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/">volver al Home</Link>
    </div>
  );
};

export default Notfound;
