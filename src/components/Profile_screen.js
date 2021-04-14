import React from 'react'
import '../css/Profile_screen.css'
import Navbar from './Navbar'

const Profile_screen = () => {
    return (
        <div className="profile_screen">
           <Navbar/>
           <div className="profile_screen_body">
               <h1>Edit Profile</h1>
               <div className="profile_screen_info">
                   <img 
                   src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                   alt=""
                   />
                <div className="profile_screen_details">
                    <h2>test@gmail.com</h2>
                    <div className="profile_screen_plans">
                        <div className="active_plan" >
                            <h4>Active Plan<spna> :</spna> Normal</h4>
                        </div>
                        <div className="more_plans">
                            <div className="more_plans_items">
                                <h4 >Normal</h4>
                                <p>100 Rs/Month</p>
                                <button>Subscribe</button>
                            </div>
                            <div className="more_plans_items">
                                <h4>Medium</h4>
                                <p>200 Rs/Month</p>
                                <button>Subscribe</button>
                            </div>
                            <div className="more_plans_items">
                                <h4>Prenium</h4>
                                <p>400 Rs/Month</p>
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="profile_screen_plans">
                        <button className="profile_screen_signout">Sign out</button>
                    </div>
                </div>
               </div>
           </div>
        </div>
    )
}

export default Profile_screen
