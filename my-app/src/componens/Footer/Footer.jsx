import { useEffect, useRef, useState } from "react"
import "./Footer.css"

function Footer() {
    const [show, setshow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            console.log(window.scrollY)
            if (window.scrollY > 100) {
                setshow(true)
            } else {
                setshow(false)
            }
        })

    }, [])
    return (


        <div className="Footer">
            <div className="head-footer">
                <div className="logo">
                    <img src="./logo.png" alt="logo" />
                </div>
                <div className="text">
                    <h2>Transform your body, transform your life</h2>
                </div>
            </div>
            <div className="body-footer">
                <div className="format">
                    <h3>Newsletter Signup</h3>
                    <form action="">
                        <input type="email" placeholder="enter your email address" className="email" />
                        <input type="checkbox" className="cheak" /> <span>i agree to the </span><a href=""> Privacy Policy.</a>
                    </form>

                </div>
                <div className="contact">
                    <div className="socil">
                        <h3>Socials</h3>
                        <div className="links">
                            <a href="">facebook</a>
                            <a href="">twitter</a>
                            <a href="">Dribble</a>
                            <a href="">Instagram</a>
                        </div>
                    </div>
                    <div className="Menu">
                        <h3>Menu</h3>

                        <ul>
                            <li>Home</li>
                            <li>Services</li>
                            <li>About Us</li>
                            <li>Shop</li>
                            <li>Contacts</li>
                        </ul>
                    </div>
                    <div className="Say-Hello">
                        <h3>Say Hello</h3>
                        <a href="">mh887315@gmail.com</a>
                    </div>
                </div>
            </div>
            <div className="fead-footer">
                gym © 2024. All rights reserved.
            </div>


            <a href="#contener" > <button className="top" style={{ opacity: show ? 1 : 0, transition: "1s" }} ><span className="icon-angle-up"></span></button></a>

        </div >
    )
}

export default Footer