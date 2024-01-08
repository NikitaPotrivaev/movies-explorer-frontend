import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ element: Component, ...props }) => {
    return(
        props.isLoggedin ? <Component { ...props } /> : <Navigate to='/signin'/>
    )
}