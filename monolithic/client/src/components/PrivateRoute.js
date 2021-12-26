import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useNavigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const auth = useSelector(state => state.auth)
    const navigate = useNavigate()

    useEffect(() => {if(!auth.isAuthenticated){
        navigate('/login')
    }},[])
    if(!auth.isAuthenticated){
        navigate('/login')
    }
    return (
        {children}
    )
}

export default PrivateRoute
