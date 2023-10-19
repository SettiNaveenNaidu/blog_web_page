import React from "react"
import { useState,useEffect } from "react"
import axios from "axios"
import {Link} from 'react-router-dom'

const Draftposts=()=>{
    const token=localStorage.getItem('jwtToken')
    const [drafts,setDrafts]=useState([])
    const headers={
        'authToken':token
    }
    
    useEffect(()=>{
        axios.get('http://127.0.0.1:3000/draft/get/all', { headers }).then((res)=>setDrafts(res.data))
        .catch((err)=>console.log(err))
    },[])

    const handledelete=()=>{
        axios.delete(`http://127.0.0.1:3000/delete/posts/}`,{headers}).then((res)=>console.log(res.data))
        .catch((err)=>console.log(err))
        axios.get('http://127.0.0.1:3000/get/myPost', { headers }).then((res)=>setDrafts(res.data))
        .catch((err)=>console.log(err))
    }
    return (
        <div>
            
        </div>

    )
    

}

export default Draftposts