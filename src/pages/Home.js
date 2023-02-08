import React, { useState } from 'react'
import './Home.css';

import { BiChevronDown } from "react-icons/bi";
import { IoMdOptions } from "react-icons/io";

import { Link } from 'react-router-dom';

function Home() {

    const signup = "signup";
    const blog = "blog";
    const login = "login";

    const [search_item, setSearchItem] = useState("");

    const [options, setOptions] = useState([
        { label: 'View All', val: '' },
        { label: 'Design', val: 'design' },
        { label: 'Product', val: 'product' },
        { label: 'Software', val: 'software' },
    ]);

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
                    <Link to={"login"}>
                        <button className='login'>Log in</button>
                    </Link>
                    <Link to={"signup"}>
                        <button className='signup'>Sign up</button>
                    </Link>
                </div>

                <Link to={"login"} className='headerOption'>
                    <IoMdOptions size={25} />
                </Link>
            </div>

            {/*  Stories and Interviews   // blog heading*/}
            <div className='blogHead'>
                <div className='leftBlogHead'>
                    <div style={{ fontSize: "12px", color: "#7F56D9" }}>Our Blog</div>
                    <div style={{ color: "black" }}><h1>Stories and Interviews</h1></div>
                    <br />
                    <div className='blogHeadFiller'>
                        <p>The blog is the best source of information for interviews, tips, guides, industry best practices, and news. Subscribe for updates in your inbox every week. No spam.</p>
                    </div>
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <div>
                                <input className='emailInput' placeholder='Enter your email' />
                            </div>
                            <div>
                                <button className='signup' >Get Started</button>
                            </div>
                        </div>
                        <br />
                        <div><p>We care about your data in our privacy policy.</p></div>
                    </div>

                </div>
                <div className='supportingText'>
                    <p>Subscribe to learn about new product features, the latest in technology, solutions, and updates.</p>
                </div>
            </div>

            {/* Blogs */}
            <div className='blogArea'>

                {/* buttons to view by category */}
                <div className='buttonSpace'>
                    <button className="btnP">View All</button>
                    <button className="btnP">Design</button>
                    <button className="btnP">Product</button>
                    <button className="btnP">Software Development</button>
                    <button className="btnP">Customer Services</button>
                </div>

                <div className='btnScrollDiv'>
                    <select
                        className='btnScroll'
                        value={search_item}
                        onChange={(e) => {
                            setSearchItem(e.target.value)
                        }}
                    // style={{ width: "150px", height: "26px", fontFamily: "Caveat", fontSize: "20px" }}
                    >
                        {options.map((option) => (
                            <option val={option.val}>{option.label}</option>
                        ))}
                    </select>
                </div>

                <div className='blogs'>
                    <div className='blogRow'>
                        <Link to={"blog"} className='blog'>
                            {/* <div className='blog'> */}
                            <div className='blogImageDiv' ><img className='blogImage' src="https://studyonline.rmit.edu.au/sites/default/files/RMIT_MHRM_Skyscraper_Article_%232_-Creating_and_Sustaining_a_Positive_Workplace_Culture_Header_0.jpg" /></div>
                            <div className='blogContent'>
                                <h6 style={{ color: "#7F56D9" }}>Article Category</h6>
                                <p>Blog 1</p>
                                <h5>lorem hioivhjwoijvwpoijvowivjpqovjpwov</h5>
                                <div>
                                    <h6>Blogger's Name</h6>
                                    <h6>Publishing Date</h6>
                                </div>
                            </div>
                            {/* </div> */}
                        </Link>

                        <div className='blog'>
                            <div className='blogImageDiv' ><img className='blogImage' src="https://studyonline.rmit.edu.au/sites/default/files/RMIT_MHRM_Skyscraper_Article_%232_-Creating_and_Sustaining_a_Positive_Workplace_Culture_Header_0.jpg" /></div>
                            <div className='blogContent'>
                                <h6 style={{ color: "#7F56D9" }}>Article Category</h6>
                                <p>Blog 2</p>
                                <h5>lorem hioivhjwoijvwpoijvowivjpqovjpwov</h5>
                                <div>
                                    <h6>Blogger's Name</h6>
                                    <h6>Publishing Date</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='blogRow'>
                        <div className='blog'>
                            <div className='blogImageDiv' ><img className='blogImage' src="https://studyonline.rmit.edu.au/sites/default/files/RMIT_MHRM_Skyscraper_Article_%232_-Creating_and_Sustaining_a_Positive_Workplace_Culture_Header_0.jpg" /></div>
                            <div className='blogContent'>
                                <h6 style={{ color: "#7F56D9" }}>Article Category</h6>
                                <p>Blog 1</p>
                                <h5>lorem hioivhjwoijvwpoijvowivjpqovjpwov</h5>
                                <div>
                                    <h6>Blogger's Name</h6>
                                    <h6>Publishing Date</h6>
                                </div>
                            </div>
                        </div>
                        <div className='blog'>
                            <div className='blogImageDiv' ><img className='blogImage' src="https://studyonline.rmit.edu.au/sites/default/files/RMIT_MHRM_Skyscraper_Article_%232_-Creating_and_Sustaining_a_Positive_Workplace_Culture_Header_0.jpg" /></div>
                            <div className='blogContent'>
                                <h6 style={{ color: "#7F56D9" }}>Article Category</h6>
                                <p>Blog 2</p>
                                <h5>lorem hioivhjwoijvwpoijvowivjpqovjpwov</h5>
                                <div>
                                    <h6>Blogger's Name</h6>
                                    <h6>Publishing Date</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='blogRow'>
                        <div className='blog'>
                            <div className='blogImageDiv' ><img className='blogImage' src="https://studyonline.rmit.edu.au/sites/default/files/RMIT_MHRM_Skyscraper_Article_%232_-Creating_and_Sustaining_a_Positive_Workplace_Culture_Header_0.jpg" /></div>
                            <div className='blogContent'>
                                <h6>Article Category</h6>
                                <p>Blog 1</p>
                                <h5>lorem hioivhjwoijvwpoijvowivjpqovjpwov</h5>
                                <div>
                                    <h6>Blogger's Name</h6>
                                    <h6>Publishing Date</h6>
                                </div>
                            </div>
                        </div>
                        <div className='blog'>
                            <div className='blogImageDiv' ><img className='blogImage' src="https://studyonline.rmit.edu.au/sites/default/files/RMIT_MHRM_Skyscraper_Article_%232_-Creating_and_Sustaining_a_Positive_Workplace_Culture_Header_0.jpg" /></div>
                            <div className='blogContent'>
                                <h6>Article Category</h6>
                                <p>Blog 2</p>
                                <h5>lorem hioivhjwoijvwpoijvowivjpqovjpwov</h5>
                                <div>
                                    <h6>Blogger's Name</h6>
                                    <h6>Publishing Date</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* freeTrial */}
            <div className='freeTrial'>
                <div><h1>Start your free trial</h1></div>
                <div><p style={{ color: "#475467" }}>Join over 4,000+ startups already growing with Untitled.</p></div>
                <div style={{ display: "flex", gap: "10px" }}>
                    <div><button className='learnMorebtn'>Learn More</button></div>
                    <div><button className='signup'>Get Started</button></div>
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

export default Home;