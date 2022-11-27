import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { SpinnerCircular } from "spinners-react";
import { authContext } from '../authentication/AuthContext';
import UseCheckUserRole from '../component/hook/useCheckuserRole';

export default function SellerRoute({ children }) {
    const { user, isLoading } = useContext(authContext);
            const[roleName,isRoleLoading] = UseCheckUserRole(user?.email)

    const location = useLocation();

    if (isLoading || isRoleLoading) {
        return <div className="h-[70vh] text-center"> <SpinnerCircular color="blue" style={{ display: "inline" }} /></div>;
    }
 

    return user?.uid  && roleName === "seller" ? (
        children
    ) : (
        <Navigate state={{ from: location }} to="/login" replace />
    );
}
