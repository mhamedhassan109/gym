import { useEffect, useState } from "react"
import "./Hero.css"

function Hero() {
    const [scroll, setscroll] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            console.log(window.scrollY)
            if (window.scrollY > 330) {
                setscroll(true)
            } else {
                setscroll(false)
            }
        })
    }, [])


    return (
        <div className="Hero">
            <div className="leftsection">
                <h1> <span style={{ color: scroll ? "#18a2cf" : "white", transition: "2s" }}>h</span>elp for you <br /> ideal body fitness  </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consectetur, iste rem beatae asperiores minima excepturi vitae vel corrupti necessitatibus.</p>

                <div className="holder">
                    <button >apply now</button>
                    <div className="cover"></div>
                </div>

            </div>
            <div className="rightsection">
                <div className="images" style={{ marginLeft: scroll ? 70 : 500, transition: "2s" }}>
                    <img src="./hero1.png" alt="hero" />
                </div>
            </div>
        </div>
    )
}

export default Hero