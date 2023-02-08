import React from 'react'

import { BiChevronDown } from "react-icons/bi";
import { useParams } from 'react-router-dom'

import { Link } from 'react-router-dom';

import { IoMdOptions } from "react-icons/io";

import './Details.css'

function Details() {
    const param = useParams();


    const signup = "signup";
    const blog = "blog";
    const login = "login";

    return (
        // <div>{param.title}</div>
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
                    <Link to={login}>
                        <button className='login'>Log in</button>
                    </Link>
                    <Link to={signup}>
                        <button className='signup'>Sign up</button>
                    </Link>
                </div>

                <div className='headerOption'>
                    <IoMdOptions size={25} />
                </div>
            </div>

            <div className='titleDetails'>
                <div className='titleDetailsUp'>
                    <div style={{ color: "#7F56D9" }}><h5>Design</h5></div>
                    <div><h1>UX Review Presentations</h1></div>
                    <div>How do you create compelling presentations that wow your colleagues and impress your managers? Here’s how to get started.</div>
                    <div>
                        <div><h5>Olivia Ryukli</h5></div>
                        <div><h6>20 Jan 2022</h6></div>
                    </div>
                </div>
                <div className='titleDetailsDown'><img id='blogImage' src="https://images.pexels.com/photos/7034439/pexels-photo-7034439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" /></div>
            </div>

            <div className='allInfo'>
                <div className='infoBox'>
                    Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
                    Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
                </div>
            </div>

            {/* footer */}
            <div className='footer'>
                <div className='upperFooter'>
                    <div className='footerColumn'>
                        <div>Product</div>
                        <div>Overview</div>
                        <div>Features</div>
                        <div>Solutions</div>
                        <div>Pricing</div>
                    </div>
                    <div className='footerColumn'>
                        <div>Company</div>
                        <div>About us</div>
                        <div>Careers</div>
                        <div>Press</div>
                        <div>Contact</div>
                    </div>
                    <div className='footerColumn'>
                        <div>Product</div>
                        <div>Overview</div>
                        <div>Features</div>
                        <div>Solutions</div>
                        <div>Pricing</div>
                    </div>
                    <div className='footerColumn'>
                        <div>Company</div>
                        <div>About us</div>
                        <div>Careers</div>
                        <div>Press</div>
                        <div>Contact</div>
                    </div>
                </div>
                <div className='lowerFooter'>
                    <div style={{ padding: "0 50px" }}>
                        <p>© 2077 Untitled UI. All rights reserved.</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Details;