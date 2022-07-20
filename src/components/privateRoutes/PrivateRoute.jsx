import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({children}) {
    const { userToken } =useSelector((store)=> store.authentication);
    const location = useLocation();

    
  return userToken ? children :<Navigate to={'/login'} state={{ from : location }} replace />
}
export default PrivateRoute;
