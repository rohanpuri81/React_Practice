import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Posts = ({postsId,setCommentId}) => {
    const navigate = useNavigate()
    const [data,setData]= useState([])
    useEffect(()=>{
       axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${postsId}`)
        .then((val)=> setData(val.data))
    },[])
  return (
    <div>
        <h1 className='h'>Posts</h1>
        {
            data.map((val)=>{
                if(val.userId==postsId){
                    return <div className='ussrs'  onClick={()=>{
                        setCommentId(val.id)
                        navigate('/comments')
                    }}>
                        <h3>{val.id}</h3>
                        <h5>{val.title}</h5>
                        <p>{val.body}</p>
                        </div>
                }
            })
        }
    </div>
  )
}

export default Posts