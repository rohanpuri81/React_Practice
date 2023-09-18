import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Comments = ({commentId}) => {
    const navigate = useNavigate()
    const [data,setData]= useState([])
    useEffect(()=>{
       axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${commentId}`)
        .then((val)=> setData(val.data))
    },[])
  return (
    <div>
        <h1 className='h'>Comments</h1>

        {
            data.map((val)=>{
                if(val.postId==commentId){
                    return <div className='ussrs'>
                        <h3>{val.id}</h3>
                        <h4>{val.name}</h4>
                        <h5>{val.email}</h5>
                        <p>{val.body}</p>
                        
                        </div>
                }
            })
        }
    </div>
  )
}

export default Comments