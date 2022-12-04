import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../authentication/AuthContext';
import UseCheckUserRole from '../component/hook/useCheckuserRole';
import Loader from '../component/loader/Loader';

export default function AdminRoute({ children }) {
    const { user, isLoading } = useContext(authContext);
            const[roleName,isRoleLoading] = UseCheckUserRole(user?.email)

    const location = useLocation();

    if (isLoading || isRoleLoading) {
        return <Loader />
    }

    return user?.uid  && roleName === "admin" ? (
        children
    ) : (
        <Navigate state={{ from: location }} to="/login" replace />
    );
}
