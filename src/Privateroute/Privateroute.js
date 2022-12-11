import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/Authprovider';
import { Navigate } from 'react-router-dom';

const Privateroute = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (user) {
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default Privateroute;