import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Home = ({setPostsId}) => {
    const navigate = useNavigate()
    
    const [users, setUsers] = useState([])
  

  useEffect(()=>{
     axios.get("https://jsonplaceholder.typicode.com/users")
     .then((val)=>setUsers(val.data))
  },[])

 
  return (
    
    <div>
        <h1 className='h'>Users</h1>
        {
          users.map((user)=>{
             return <div className='ussrs' onClick={()=>{
                setPostsId(user.id)
                navigate('/posts')
                
              }}>
              <li>{user.id}</li>
              <li>{user.name}</li>
              <li>{user.email}</li>
              <li>{user.website}</li>
             </div>
          })
        }
    </div>
  )
}

export default Home