import { Link, Outlet, useLocation } from "react-router-dom";

export default function Layout() {

  const { pathname } = useLocation();

  return (
    <>
      {pathname !== '/' && (
        <p>
          <Link to="/">&#10094; Back</Link>
        </p>
      )}

      <Outlet />
    </>
  )
}