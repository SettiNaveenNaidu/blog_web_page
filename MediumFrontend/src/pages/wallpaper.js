import React from "react";

const Large=()=>{
    const token=localStorage.getItem('jwtToken')
    return(
        <div className="large_image">
            <div className="large_text">
            <div>Stay Curiues</div>
            <div style={{fontSize:'20px'}}>Discover stories, thinking, and expertise from writers on any topic.</div>
            <button className="start_reading">Start Reading</button>
            </div>
        </div>
    )
}
export default Large