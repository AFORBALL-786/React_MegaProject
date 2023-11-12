import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useNavigate } from 'react-router-dom'

export default Protected = ({children, authentication = true}) => {
    
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const authStatus = useSelector( (state) => state.auth.status)

    useEffect( () => {
        if(authentication && authStatus !== authentication){
            navigate("/login")
        }else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoading(false);
        
    }, [authStatus, authentication, navigate])

  return (
    <div>AuthLayout</div>
  )
}
