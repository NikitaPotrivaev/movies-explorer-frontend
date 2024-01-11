import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ element: Component, ...isLoggedin }) => {
  return(
      isLoggedin ? <Component { ...isLoggedin } /> : <Navigate to='/signin'/>
  )
}