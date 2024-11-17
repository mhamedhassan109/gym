import { useEffect, useState } from "react"
import "./Header.css"


function Header() {
    {/* active menu list */ }
    const [carent, setcarent] = useState("home")

    {/* settings */ }

    const [settings, setsettings] = useState(false)


    {/* mode color */ }
    const [mode, setmode] = useState(localStorage.getItem("value"))
    useEffect(() => {
        if (mode === "light") {
            document.body.classList.add("light")
            document.body.classList.remove("dark")
        } else {
            document.body.classList.add("dark")
            document.body.classList.remove("light")
        }
    }, [mode])


    {/* activition icon */ }

    const [active, setactive] = useState("act")

    return (
        <div className="header">
            <div className="head">
                {/*logo*/}

                <div className="logo">
                    <img src="./logo.png" alt="logo" />
                </div>
                {/*menu*/}

                <nav className="list-menu">
                    <ul>
                        <li onClick={() => {
                            setcarent("home")
                        }} className={carent === "home" ? "active" : null}>home</li>

                        <li onClick={() => {
                            setcarent("about")
                        }} className={carent === "about" ? "active" : null}>about</li>

                        <li onClick={() => {
                            setcarent("prodect")
                        }} className={carent === "prodect" ? "active" : null}>prodect</li>

                        <li onClick={() => {
                            setcarent("contact")
                        }} className={carent === "contact" ? "active" : null}>contact us</li>

                        <li onClick={() => {
                            setcarent("testmonalis")
                        }} className={carent === "testmonalis" ? "active" : null}>testmonalis</li>
                    </ul>
                </nav>

                {/*settings*/}

                <span className=" setting icon-gear" onClick={() => {
                    setsettings(true)
                }}></span>

                {/* other mune */}

                {settings && (
                    <div className="other-menu">
                        <div className="heding">
                            <h3>settings</h3>
                            <span className="close icon-close" onClick={() => {
                                setsettings(false)
                            }}></span>
                        </div>

                        <div className="body-menu">
                            <div className="option">
                                <h5>mode color</h5>
                                <div className="option-body">
                                    <span onClick={() => {
                                        localStorage.setItem("value", "light")
                                        setmode(localStorage.getItem("value"))
                                        setactive("light")
                                    }} className={active === "light" ? "icon-brightness-up active" : "icon-brightness-up"}></span>



                                    <span onClick={() => {
                                        localStorage.setItem("value", "dark")
                                        setmode(localStorage.getItem("value"))
                                        setactive("dark")
                                    }} className={active === "dark" ? "icon-moon active" : "icon-moon"}></span>


                                </div>
                            </div>

                            <div className="option">
                                <h5>menu</h5>
                                <ul>
                                    <li> <span className="icon-home"></span><a href="">home</a></li>
                                    <li> <span className="icon-bell"></span><a href="">about</a></li>
                                    <li> <span className="icon-shopping-cart"></span><a href="">prodect</a></li>
                                    <li> <span className="icon-user"></span> <a href="">contact us</a></li>
                                    <li> <span className="icon-group"></span><a href="">testmonalis</a> </li>
                                </ul>
                            </div>
                        </div>

                        <div className="footer-menu">
                            <div className="logo">
                                <img src="./logo.png" alt="logo" />
                            </div>
                        </div>



                    </div>
                )}



            </div>

        </div>
    )
}

export default Header