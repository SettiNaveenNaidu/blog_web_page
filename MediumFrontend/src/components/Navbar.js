import React, { useContext,useState,useEffect} from "react"
import {Link } from 'react-router-dom'
import './file.css'
import { useNavigate } from "react-router-dom"
import img from './logo.png'

const Navbar=()=>{
    const [status,setStatus]=useState(false)
    const [flag,setFlag]=useState(false)
    const token=localStorage.getItem('jwtToken')
    const navigate=useNavigate()

    useEffect(()=>{
        setStatus(!!token)
    })

    const hanglelog=()=>{
        navigate('/')
        localStorage.removeItem('jwtToken')
        localStorage.clear()
        setStatus(false)
    }
    const toggleDropdown = () => {
        setFlag(!flag);
      }

    console.log(status)

    return(
        <div className="navbar">
            <div className="nav_container">
                <div >
                    <img src={img} className="logo"></img>
                </div>
                <div className="nav_elements">
                    <Link className="nav_home" to='/'>Home</Link>
                   <Link className="ourstory" to='/ourstory'>Our Story</Link>
                   <Link className="membership" to='/membership'>MemberShip</Link>
                   <Link className="write" to='/addpost'>Write</Link> 
                   <Link className="ourstory" to='/ourstory'>Contact Us</Link>
                   {  status ? (<Link onClick={hanglelog}>Logout</Link>):(<Link to='/signin' className="sign_nav">Sign In</Link>)
                   }
                   <div className="Profile_view">
                   {status && (
                    <div>
                    <div className="nav_profile"><Link to='/userprofile'><Link style={{marginRight:'8px',color:'white'}}></Link>My Profile</Link></div>
                 </div>
                  
                   )}
                   </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar