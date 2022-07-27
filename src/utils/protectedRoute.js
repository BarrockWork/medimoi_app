// import {useAuth} from "../contexts/AuthContext";
// import { Route, Redirect } from "react-router-dom";
// export const ProtectedRoute = ({...rest }) => {
//     let { user } = useAuth();
//
//     if (!user || !user.token || user.token === "") {
//         return (
//             // component which inform the user that they must be logged in
//             // console.log('Vous devez vous connecter')
//             <Redirect to='/' />
//         );
//     }
//
//     // let user through if they're logged in
//     return <Route {...rest} />;
// };
import React, { useEffect } from 'react'
import {Navigate, useLocation} from "react-router-dom"
import jwtHandler from "./jwtHandler";

const ProtectedRoute = ({ children }) => {
    let user = jwtHandler.getUser();
    const location = useLocation()

    if (!user || !user.token || user.token === "") {
        return <Navigate to="/login" state={{ from: location }} replace/>
    }
    return children
}

export default ProtectedRoute