import React from 'react'
import { useParams, Link } from 'react-router-dom'

import { IoMdOptions } from "react-icons/io";
import { BiChevronDown } from "react-icons/bi";

import './Login.css'
import './Home.css'

function SignUp() {
    const param = useParams();
    const signup = "signup";
    const login = "login";

    console.log("welcome to sign up page")

    return (
        <>
            {/* header */}
            <div className='header'>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                    <div className='logo'><img style={{ width: "40px" }} src="https://cdn0.iconfinder.com/data/icons/social-networks-and-media-flat-icons/136/Social_Media_Socialmedia_network_share_socialnetwork_network-22-512.png" /></div>
                    <div><p style={{ fontWeight: "bold", fontSize: "20px" }}>BlogStar</p></div>
                </div>
                <div className='headerStack'>
                    <Link to={'/'} style={{ textDecoration: 'none' }}>Home</Link>
                    <div className='pr_re'>
                        Create Blog
                        <BiChevronDown fill={"#475467"} />
                    </div>
                    <div className='pr_re'>
                        Search Blog
                        <BiChevronDown fill={"#475467"} />
                    </div>
                    <div>Pricing</div>
                </div>
                <div className='log'>
                    <Link to={'/login'}>
                        <button className='login'>Log in</button>
                    </Link>
                    <Link to={'/signup'}>
                        <button className='signup'>Sign up</button>
                    </Link>
                </div>

                <div className='headerOption'>
                    <IoMdOptions size={25} />
                </div>
            </div>

            {/* loginBox */}
            <div className='loginMain'>
                <div className='loginBox'>
                    <div className='logo'><img style={{ width: "60px" }} src="https://cdn0.iconfinder.com/data/icons/social-networks-and-media-flat-icons/136/Social_Media_Socialmedia_network_share_socialnetwork_network-22-512.png" /></div>
                    <div className='login-heading'><h1>Sign Up</h1></div>
                    <div style={{ color: "#475467" }}><h6>Start your 30 days free trial.</h6></div>
                    <div>
                        <h6 style={{ padding: "0 0 2px 6px" }}>Name:</h6>
                        <input className='email-input' placeholder='Enter your full name' />
                    </div>
                    <div>
                        <h6 style={{ padding: "0 0 2px 6px" }}>Email:</h6>
                        <input className='email-input' placeholder='Enter your email' />
                    </div>
                    <div>
                        <h6 style={{ padding: "0 0 2px 6px" }}>Password:</h6>
                        <input className='email-input' placeholder='Enter your password' />
                        <h6 style={{ padding: "0 0 0 8px", color: "#475467" }}>Must be atleast 8 characters* </h6>
                    </div>
                    <Link to={"/Profile"} className='login-log'>
                        <button className='login-signin'>Get Started</button>
                    </Link>
                    <div className='login-account'>
                        <h6>Already have an account? &nbsp; </h6>
                        <Link to={'/login'} className='SignupBox'><h6>Log in</h6></Link>
                    </div>
                </div>
            </div>
        </>
    )
}


export default SignUp;