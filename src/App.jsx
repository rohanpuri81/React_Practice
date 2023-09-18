import { useEffect, useState } from 'react'
import axios from 'axios'
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom'
import './App.css'
import Home from './Home'
import Posts from './Posts'
import Comments from './Comments'

function App() {
  const [postsId,setPostsId]= useState()
  const [commentId,setCommentId]= useState()
  return (
    <BrowserRouter>
    <Link to={'/'}>Home</Link>
      <Routes>
        <Route path='/' element={<Home setPostsId={setPostsId}/>}/>
        <Route path='/posts' element={<Posts postsId={postsId} setCommentId={setCommentId}/>}/>
        <Route path='/comments' element={<Comments commentId={commentId}/>}/>
      </Routes>
       
    </BrowserRouter>
  )
}

export default App
