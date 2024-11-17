import { useEffect, useState } from "react"
import "./Contact.css"

function Contact() {


    return (
        <div className="Contact">
            <div className="left-section">
                <div className="information" >
                    <h6>results control</h6>
                    <h1>Support, motivation
                        and results on your
                        smartphone</h1>

                    <p>Create a balanced and effective training program that aligns with your fitness goals.</p>

                    <img src="./app-apple.png" />
                    <img src="./app-google.png" />
                </div>

            </div>
            <div className="right-section"  >
                <div className="folder" >
                    <img className="img1" src="./app-mob-1.png" alt="photo" />
                    <img className="img2" src="app-mob-2.png" alt="photo" />
                </div>

            </div>
        </div>
    )
}

export default Contact