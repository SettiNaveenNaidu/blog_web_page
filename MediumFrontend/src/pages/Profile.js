import React from "react"
import {useState,useEffect} from 'react'
import axios from 'axios'
import './style.css'
import {Link} from 'react-router-dom'
import {useParams} from "react-router-dom"
import './Profile.css'


const UserProfile=()=>{
    const token=localStorage.getItem('jwtToken')
    const [usertext,setUserdata]=useState('')
    const [userposts,setUserposts]=useState([])
    const [details,setDetails]=useState('')
    const headers={
        'authToken':token
    }
    useEffect(()=>{
        axios.get('http://127.0.0.1:3000/author/my/details',{headers})
        .then((res)=>{
            setDetails(res.data)
            setUserdata(res.data.about)
        })
        .catch((err)=>console.log(err))
    },[])

    const handelUpdateBio=()=>{
        const val={
            about:usertext,
        }
        console.log(val)
        axios.put('http://127.0.0.1:3000/authors/edit',{val},{headers})
        .then((res)=>{
            console.log(res.data)
            
        })
        .catch((err)=>console.log(err))
    }
    return (
        <div className="my_profile">
           <span>E-Mail : {details.email}</span><br/>
           <span>No Of Followers : {details.followers_count}</span>       
           <p>{details.about }</p>     
            <textarea value={usertext} onChange={(e)=>setUserdata(e.target.value)} placeholder="enter to update bio" className="text_area" rows={10} style={{fontSize:'15px'}}/> 
            <button onClick={handelUpdateBio} className="update_button">Update Details</button>
            <div className="prof_btn">
           <Link to='/userdrafts'>Draft Posts</Link>
           <Link to='/savedposts'>Saved Posts</Link>
           <Link to='/userposts'>My Posts</Link>
           </div>         
        </div>
    )
}

export default UserProfile