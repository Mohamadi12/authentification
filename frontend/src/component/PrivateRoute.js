import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {fetchAcountAuth} from '../api/auth'

// Cette partie est lié à utilisateur
import Admin from './admin/Admin'
import User from './user/User'
import Navbar from './Navbar'
import Login from './Login'
const PrivateRoute = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()

    // Utilisez redux et remplacer la state redux par la state database
    const auth=useSelector(state=>state.authUser)
    console.log('authentification user redux', auth)
    
    const getUserAuth=async ()=>{
        const data=await fetchAcountAuth()
        console.log('data fetched database',data)
    }

    useEffect(()=>{
        getUserAuth()
        },[])

    // La fonction de logOut
    // Une partie de objet utilisateur role comp admin ou user
    const token = localStorage.getItem('token')
console.log('token el user specifique ', token )

    // La fonction de logOut, utilisé pour sortie l'utilisateur diriger vers login
    const logout=()=>{
        localStorage.removeItem('token')
        navigate('/login')
    }
   // Avec retur,selon le token on a une directon
  // selon le resolvePath,on a une direction plus precise

  return (
    <div>
      {
        token? (<> <Navbar auth={auth} logout={logout}/> 
        {auth.role==='admin'? (<Admin auth={auth}/>):(<User auth={auth}/>)} </>)
             :(<Login/>)
      }
    </div>
  )
}

export default PrivateRoute
