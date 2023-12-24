import axios from 'axios'


export const postAuthContact=async (values)=>{
    const addingAuth=await axios.post('http://localhost:4000/auth/register', {...values})
}

export const fetchAcountAuth=async ()=>{
    const token=localStorage.getItem('token')
    const {data}= await axios.get('http://localhost:4000/auth/moncompte',{headers:{Authorization:token}})
    return data
}