import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../authentication/AuthContext';
import Loader from '../component/loader/Loader';

export default function PrivateRoute({ children }) {
    const { user, isLoading } = useContext(authContext);

    const location = useLocation();

    if (isLoading) {
        return <Loader />
    }
    return user?.uid ? (
        children
    ) : (
        <Navigate state={{ from: location }} to="/login" replace />
    );
}
