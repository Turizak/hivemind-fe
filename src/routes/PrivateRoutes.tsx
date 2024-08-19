import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import SessionContext from '../context/SessionProvider'

const PrivateRoutes = () => {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error("Context is undefined");
  }
  const { session } = context
  
return (
    session.accessToken ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default PrivateRoutes