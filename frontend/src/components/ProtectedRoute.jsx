import react from "react";
import { Navigate } from "react-router-dom"
import { isAuthentication } from '../utils/auth.js'
const ProtectedRoute = ({ children }) => {

if( !isAuthentication ()) {
  return <Navigate to="/login" replace />;
}  
  return children

}

export default ProtectedRoute;