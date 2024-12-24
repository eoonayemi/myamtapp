import { Navigate, Outlet } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const ProtectedRoute = () => {
  const { isLoggedIn } = useAppContext();

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
