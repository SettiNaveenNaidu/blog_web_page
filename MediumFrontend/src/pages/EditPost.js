import React,{useState,useEffect} from "react"
import axios from 'axios' 
import './style.css'
import { useNavigate,useParams } from "react-router-dom"

const Edit = ()=> {
    const [title, setTitle] = useState('')
    const [topic,setTopic]=useState('')
    const [content,setContent]=useState('')
    const [img,setImg]=useState(null)
    const {postId}=useParams()
    const navigate=useNavigate()

    useEffect(()=>{
        const res=axios.get(`http://127.0.0.1:3000/get/post/${postId}`).then((res)=>{
            const data=res.data
        setTitle(data.title)
        setTopic(data.topic)
        setContent(data.text)
        setImg(data.image)
        })
        .catch((err)=>console.log(err))
       
    },[])
    
    const handleImage=(e)=>{
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file, 'filename.jpg', { charset: 'utf-8' });

        axios.post('http://127.0.0.1:3000/upload',formData).then((res)=>{
        setImg(res.data.file_url);
    })
    .catch((error)=>{
        console.log("hello");
        console.error(error);
    })
    }   
    const handleUpdate=()=>{
        const postdata={
            title:title,
            topic:topic,
            text:content,
            featured_image:img
        }
        axios.put(`http://127.0.0.1:3000/edit/post/${postId}`, postdata)
        .then((res)=>{
            console.log('successfully updated')
        })
        .catch((err)=>{
            console.log('updation failed')
        })
        navigate('/')           
    }


    return(
        <>
        <div className="add_post">
            <h3 children='adding_title' style={{marginLeft:'0px'}}>Edit</h3>
            <form onSubmit={handleUpdate} className="add_form">
                <input type='text' placeholder="Enter Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <input type='text' placeholder="Enter Topic" value={topic} onChange={(e)=>setTopic(e.target.value)}/> 
                <textarea placeholder="Enter Content ...." value={content} onChange={(e)=>setContent(e.target.value)}/>
                <input type='file' placeholder="upload Image" onChange={handleImage}/>
                <button type="submit">Update</button>
            </form>
        </div>
        </>
    )
}
export default Edit

