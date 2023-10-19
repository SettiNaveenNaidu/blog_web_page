import React, { useState,useEffect } from "react"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import SignUp from "./pages/Signup"
import SignIn from "./pages/SignIn"
import Navbar from './components/Navbar'
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Add from './pages/Adding'
import Eachpost from "./pages/EachPost"
import EditPost from "./pages/EditPost"
import Userposts from "./pages/Userposts"
import Userprofile from "./pages/Profile" 
import Story from "./pages/Ourstory"
import Membership from "./pages/Membership"
import Saved from "./pages/Savedpost"
import Draftposts from "./pages/UserDrafts"
import Viewother from "./pages/Otherprofiles"
import UserPayment from "./pages/Payment"
import Large from "./pages/wallpaper"
import CardSection from "./pages/Card"

const App=()=>{

  return(
  <Router>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path='/eachpost/:postId' element={<Eachpost/>}/>
      <Route path="/addpost" element={<Add/>} />
      <Route path="/eachpost/:postId/edit" element={<EditPost/>}/>  
      <Route path='/ourstory' element={<Story></Story>}/>
      <Route path="/membership" element={<Membership/>} />
      <Route path='/userposts' element={<Userposts/>}/>
      <Route path='/userprofile' element={<Userprofile/>}/>
      <Route path='/savedposts' element={<Saved/>}/>
      <Route path='/userdrafts' element={<Draftposts/>}/>
      <Route path='/otheruser/:authorId' element={<Viewother/>}/>
      <Route path='/card' element={<CardSection/>}/>      
    </Routes>
  </Router>)
}

export default App

