import React from 'react'
import '../css/signup.css'


const Signup = () => {
    
    return (
        <div className="signup">
            <form>
                <h1 >Sign In</h1>
                <input placeholder='Email' type="email"  autoComplete/>
                <input placeholder="password" type="password"  />
                <button type="submit">Sign in</button>
                <h4>
                <span className="gray">New to Netflix?</span>
                <span> </span>
                <b className="link">Sign Up now.</b></h4>
            </form>
        </div>
    )
}

export default Signup
