import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const auth = useSelector(state => state.auth)
    const history = useHistory()

    useEffect(() => {if(!auth.isAuthenticated){
        history.push('/login')
    }},[])
    if(!auth.isAuthenticated){
        history.push('/login')
    }
    return (
        {children}
    )
}

export default PrivateRoute
