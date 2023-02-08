import React from 'react'
import { useParams, Link } from 'react-router-dom'

import { IoMdOptions } from "react-icons/io";
import { BiChevronDown } from "react-icons/bi";

import './Login.css'
import './Home.css'

function Login() {
    const param = useParams();

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
                    <div className='login-heading'><h1>Log in to your account</h1></div>
                    <div style={{color:"#475467"}}><h6>Welcome! Please enter your details.</h6></div>
                    <div>
                        <h6 style={{padding:"0 0 2px 6px"}}>Email:</h6>
                        <input className='email-input' placeholder='Enter your email' />
                    </div>
                    <div>
                        <h6 style={{padding:"0 0 2px 6px"}}>Password:</h6>
                        <input className='email-input' placeholder='Enter your password' />
                    </div>
                    <div className='login-log'>
                        <button className='login-signin'>Sign in</button>
                        <button className='login-google'><img style={{width:"15px"}} src="https://image.similarpng.com/very-thumbnail/2020/12/Illustration-of-Google-icon-on-transparent-background-PNG.png"/>Sign in with Google</button>
                    </div>
                    <div className='login-account'>
                        <h6>Don't have an account? &nbsp; </h6>
                        <Link to={"/signup"} className='SignupBox'><h6>Sign Up</h6></Link>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Login