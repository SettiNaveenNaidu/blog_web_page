import React from "react";

const Large=()=>{
    const token=localStorage.getItem('jwtToken')
    return(
        <div className="large_image" style={{height:'40vh',borderRadius:'4px',width:'90vw',display:'flex',gap:'20px'}}>
            <div className="large_text" style={{width:'90vw',display:'flex',alignContent:'flex-start',padding:'80px',margin:'10px',display:'flex',gap:'20px'}}>
                <div>Stay Curiues</div>
                <div style={{fontSize:'20px'}}>Discover stories, thinking, and expertise from writers on any topic.</div>
                <button className="start_reading">Start Reading</button>
            </div>
        </div>
    )
}
export default Large