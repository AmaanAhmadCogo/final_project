import React, { useState, useEffect } from 'react'
import { BiChevronDown } from "react-icons/bi";
import { IoMdOptions } from "react-icons/io";
import { Link } from 'react-router-dom';
import './Create.css'

function Create() {

  const [search_item, setSearchItem] = useState("");


  // console.log(articles);

  return (
    <>
      {/* header    */}
      {/* bold heading ?  */}
      <div className='header'>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
          <div className='logo'><img style={{ width: "40px" }} src="https://cdn0.iconfinder.com/data/icons/social-networks-and-media-flat-icons/136/Social_Media_Socialmedia_network_share_socialnetwork_network-22-512.png" /></div>
          <div><p style={{ fontWeight: "bold", fontSize: "20px" }}>BlogStar</p></div>
        </div>
        <div className='headerStack'>
          <Link to={'/'} style={{ textDecoration: 'none' }}>Home</Link>
          <Link to={'/create'} style={{ textDecoration: 'none' }} className='pr_re'>
            Create Blog
            <BiChevronDown fill={"#475467"} />
          </Link>
          <div className='pr_re'>
            Search Blog
            <BiChevronDown fill={"#475467"} />
          </div>
          <div>Pricing</div>
        </div>
        <div className='log'>
          <Link to={"/login"}>
            <button className='login'>Log in</button>
          </Link>
          <Link to={"/signup"}>
            <button className='signup'>Sign up</button>
          </Link>
        </div>

        <Link to={"/login"} className='headerOption'>
          <IoMdOptions size={25} />
        </Link>
      </div>

      <div className='blog-input-main'>
        <h1>Create Blog :</h1>
        <div className='blog-input'>
          <h5>Name:</h5>
          <input className='blog-input-space' placeholder='Enter your name..' />
        </div>
        <div className='blog-input'>
          <h5>Title:</h5>
          <input className='blog-input-space' placeholder='Enter the title..' />
        </div>
        <div className='blog-input'>
          <h5>Industry:</h5>
          <input className='blog-input-space' placeholder='Category..' />
        </div>
        <div className='blog-input'>
          <h5>Content:</h5>
          <textarea className='blog-input-content' placeholder='Content...'></textarea>
        </div>
        <div><button className='signup' onClick={()=>{alert("submitted")}}>Create Blog</button></div>
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

export default Create;