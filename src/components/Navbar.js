import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import '../css/navbar.css'
const Navbar = () => {

    const history=useHistory();

    //on scrolling navbar will be black
    const [show,handleshow]=useState(false);

    const transitionNavbar=()=>{
        if(window.screenY>100){
            handleshow(true);
        }else{
            handleshow(false);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",transitionNavbar);
        return()=>{
            window.removeEventListener("scroll",transitionNavbar);
        }
    },[])

    return (
        <div className={`navbar ${show && "nav_blac"}`}>
            <div className="nav_contents">
            <Link to="home"><img className="logo"
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="logo"
                /></Link>
                
                <img className="nav_avatar" 
                onClick={()=>history.push("/profile")}
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar"
                />
                
            </div>


        </div>
    )
}

export default Navbar
