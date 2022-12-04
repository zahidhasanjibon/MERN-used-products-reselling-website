import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from "../authentication/AuthContext";
import Loader from '../component/loader/Loader';



export default function PublicRoute({ children }) {
    const { user, isLoading } = useContext(authContext);
    if (isLoading) {
        return <Loader />
    }

    return user?.uid ? <Navigate to="/" /> : children;
}