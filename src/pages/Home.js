import React from 'react'
import './Home.css';

import { BiChevronDown } from "react-icons/bi"

function Home() {
    return (
        <>
            {/* header    */}
            {/* bold heading ?  */}
            <div style={styles.header}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                    <div style={styles.logo}><img style={{ width: "40px" }} src="https://cdn0.iconfinder.com/data/icons/social-networks-and-media-flat-icons/136/Social_Media_Socialmedia_network_share_socialnetwork_network-22-512.png" /></div>
                    <div><p style={{ fontWeight: "bold", fontSize: "20px" }}>BlogStar</p></div>
                </div>
                <div style={styles.headerStack}>
                    <div>Home</div>
                    <div style={styles.pr_re}>
                        Create Blog
                        <BiChevronDown fill={"#475467"} />
                    </div>
                    <div style={styles.pr_re}>
                        Search Blog
                        <BiChevronDown fill={"#475467"} />
                    </div>
                    <div>Pricing</div>
                </div>
                <div style={styles.log}>
                    <button style={styles.login}>Log in</button>
                    <button style={styles.signup}>Sign up</button>
                </div>
            </div>

            {/*  Stories and Interviews   // blog heading*/}
            <div style={styles.blogHead}>
                <div style={styles.leftBlogHead}>
                    <div style={{ fontSize: "12px", color: "#7F56D9" }}>Our Blog</div>
                    <div style={{ color: "black" }}><h1>Stories and Interviews</h1></div>
                    <br />
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <div>
                                <input style={styles.emailInput} placeholder='Enter your email' />
                            </div>
                            <div>
                                <button style={styles.signup}>Get Started</button>
                            </div>
                        </div>
                        <br />
                        <div><p>We care about your data in our privacy policy.</p></div>
                    </div>

                </div>
                <div style={styles.supportingText}>
                    <p>Subscribe to learn about new product features, the latest in technology, solutions, and updates.</p>
                </div>
            </div>

            {/* Blogs */}
            <div style={styles.blogs}>
                <div style={styles.buttonSpace}>
                    <button style={styles.categoryBtn} className="btnP">View All</button>
                    <button style={styles.categoryBtn} className="btnP">Design</button>
                    <button style={styles.categoryBtn} className="btnP">Product</button>
                    <button style={styles.categoryBtn} className="btnP">Software Development</button>
                    <button style={styles.categoryBtn} className="btnP">Customer Services</button>
                </div>
                <div></div>
                <div></div>
            </div>
        </>
    )
}

export default Home;

const styles = {
    // header ---------------------------------------------------
    header: {
        boxSizing: "border-box",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 70px",
        borderBottom: "2px groove #f0f2f5",
    },
    headerStack: {
        display: "flex",
        justifyContent: "space-evenly",
        width: "50%",
        color: "#475467",
        // fontWeight:"600"
    },
    logo: {
        width: "44px",
        height: "44px",
    },
    pr_re: {
        display: "flex",
        alignItems: "center",
    },
    log: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px 18px",
        gap: "6px",
    },
    login: {
        width: "95px",
        height: "44px",
        fontFamily: 'Inter',
        fontstyle: "normal",
        fontweight: "600",
        fontsize: "16px",
        lineheight: "24px",
        // color: "#475467",
        backgroundColor: "white",
        border: "0",
    },
    signup: {
        width: "100px",
        height: "44px",
        fontFamily: 'Inter',
        fonStyle: "normal",
        fontWeight: "600",
        fontSize: "16px",
        lineHeight: "24px",
        background: "#7F56D9",
        border: "1px solid #7F56D9",
        boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
        borderRadius: "8px",
        color: "white",
    },
    // -------------------------- header ends here

    // Stories and Interviews-------------------------------
    blogHead: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        // height: "402px",
        width: "100%",
        color: "#546278",
        // backgroundColor: "green",
        padding:"50px 200px"
    },
    leftBlogHead: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        height: "200px",
        // backgroundColor: "aqua",
        padding: "10px 100px 10px 0"
    },
    supportingText: {
        // width: "384px",
        width: "35%",
        height: "90px",
        fontSize: "20px",
        // backgroundColor: "yellow"
    },
    emailInput: {
        height: "44px",
        fontFamily: 'Inter',
        fonStyle: "normal",
        fontWeight: "600",
        fontSize: "16px",
        lineHeight: "24px",
        // borderColor: "#f0f2f5",
        borderRadius: "8px",
        width: "100%",
        paddingLeft: "10px"
    },
    
    // Blogs---------------------------------------------
    blogs:{
        padding:"10px 80px",

    },
    buttonSpace:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"flex-start",
        width:"50%"
    },
    categoryBtn:{
        padding:"6px",
        border:0,
        borderRadius:"4px"
    }
}