import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ isAuth, children }) {
  const location = useLocation();
  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }
  return children;
}
