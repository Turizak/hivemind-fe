import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react';
import SessionContext from '../context/SessionProvider';
import { TSession } from '../types';

const PrivateRoutes = () => {

// @ts-expect-error
const { session } = useContext<TSession>(SessionContext);

return (
    session.accessToken ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default PrivateRoutes