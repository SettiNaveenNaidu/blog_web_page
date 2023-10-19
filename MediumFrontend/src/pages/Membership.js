import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import CardSection from "./Card";

const handlebuy=()=>{
    <CardSection></CardSection>
}
const Membership=()=>{
    return(
        <>
        <div className="membership_page">Membership </div>
        <div className="member_cards">
            <div className="each_card">
                <span>Normal</span>
                <p>1 post per day</p>
                <Link to='/card'>Get Started</Link>
                <span className="top_color"></span>
            </div>
            <div className="each_card">
            <span>Silver</span>
            <p>3 post per day</p>
            <Link >Get Started</Link>
            <span className="top_color"></span>           
            </div>
            <div className="each_card">
            <span>Gold</span>
            <p>5 post per day</p>
            <Link>Get Started</Link>
            <span className="top_color"></span>
            </div>
            <div className="each_card">
            <span>Diamond</span>
            <p>10 post per day</p>
            <Link>Get Started</Link>
            <span className="top_color"></span>
            </div>
        </div>
        </>

    )
}
export default Membership