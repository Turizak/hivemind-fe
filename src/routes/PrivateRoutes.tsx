import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {

return (
    localStorage.getItem("accessToken") ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default PrivateRoutes