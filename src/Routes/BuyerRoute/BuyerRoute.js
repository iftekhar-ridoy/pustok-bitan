import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useBuyer from '../../Hook/useBuyer';
import Loader from '../../Shared/Loader/Loader';

const BuyerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
    const location = useLocation();

    if (loading || isBuyerLoading) {
        return <Loader></Loader>
    }

    if (user && isBuyer) {
        return children;
    }
    return <Navigate to='/' state={{ form: location }} replace></Navigate>
};

export default BuyerRoute;