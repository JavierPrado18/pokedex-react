import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
    const user=useSelector(state=>state.user)
		
    if(user.trim()!=""){
        return <Outlet />
    } else { 
        return <Navigate to='/' />
    }                     
};                        

export default ProtectedRoutes;
