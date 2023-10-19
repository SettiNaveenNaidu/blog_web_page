import React from "react"
import { useEffect,useState} from "react"
import { useParams } from 'react-router-dom'
import OtherProfile from "./Following"
import axios from "axios"
import './OtherProfile.css'



const Viewother=()=>{
    
    const {authorId}=useParams()
    const [otherdetail,setOtherdetail]=useState('')
    const [name,setName]=useState()
    useEffect(()=>{
       axios.get(`http://127.0.0.1:3000//author/details/${authorId}`).then((res)=>{       
        console.log(res.data)
        setOtherdetail(res.data)
        })
        .catch((err)=>console.log(err))    
    },[])
    
    return(
        <div>
            <h3 style={{marginLeft:'620px',fontSize:'30px'}}>{otherdetail.name}'s Profile</h3>
            <div className="other_user">
                <div>User-Name : {otherdetail.name}</div>
                <div>E-Mail : {otherdetail.email}</div>
                <div>Followers : {otherdetail.followers_count}</div>
                <div> About : {otherdetail.about}</div>
            </div>
            
           
        </div>        
    )
}
export default Viewother