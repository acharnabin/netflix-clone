import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../css/welcomepage.css'
import Signup from './Signup'
const Login = () => {
    const [signIn,set_signin]=useState(false);

    return (
        <div className="loginScreen">
            <div className="loginscreen_bg">
            <img className="loginscreen_logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo"/>
            <button className="loginscreen_button" onClick={()=>set_signin(true)}>Sign in</button>
            <div className="gradient"></div>
            </div>
            <div className="body">
                {
                    signIn?(
                        <Signup/>
                    ):(
                        <>
                    <h1>Unlimited movies, TV shows and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <div className="input">
                        <form>
                            <input placeholder="Email Adress" type="email" />
                            <Link to="home"><button className="input_button" >GO TO HOME PAGE</button></Link>

                        </form>
                    </div>
                </>
                    )
                }
            </div>
        </div>
        
    )
}

export default Login
