import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useSeller from '../../../Hook/useSeller';
import Loader from '../../../Shared/Loader/Loader';

const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useSeller(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Loader></Loader>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/' state={{ form: location }} replace></Navigate>
};

export default SellerRoute;