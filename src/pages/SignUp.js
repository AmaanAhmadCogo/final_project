import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import { BiChevronDown } from "react-icons/bi";
import { useParams } from 'react-router-dom';

// import './Signup.css';

function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    console.log({ email, password })
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleApi = () => {
        console.log({ email, password })
        axios.post('https://reqres.in/api/login', {
            email: email,
            password: password
        }).then(result => {
            console.log(result.data)
            alert('success')
        })
            .catch(error => {
                alert('service error')
                console.log(error)
            })
    }

    return (
        <>
            <div className='header'>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                    <div className='logo'><img style={{ width: "40px" }} src="https://cdn0.iconfinder.com/data/icons/social-networks-and-media-flat-icons/136/Social_Media_Socialmedia_network_share_socialnetwork_network-22-512.png" /></div>
                    <div><p style={{ fontWeight: "bold", fontSize: "20px" }}>BlogStar</p></div>
                </div>
                <div className='headerStack'>
                    <div>Home</div>
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
                    <button className='login'>Log in</button>
                    <button className='signup'>Sign up</button>
                </div>
            </div>
            
            <div>
                <div className="App">
                    Email : <input value={email} onChange={handleEmail} type="text" /> <br />
                    Password : <input value={password} onChange={handlePassword} type="text" /> <br />
                    <button onClick={handleApi} >Login</button>
                </div>
            </div>
        </>
    );
}

export default SignUp;