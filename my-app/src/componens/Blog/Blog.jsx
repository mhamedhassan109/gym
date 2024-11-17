import { useEffect, useState } from "react"
import "./Blog.css"


function Blog() {

    const folder1 = [
        {
            icon: "./haret.png",
            tittle: "Regulates Eating Habits",
            pargarph: "Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Sed fringilla."
        },
        {
            icon: "./alarm.png",
            tittle: "Increases Physical Capacity",
            pargarph: "Etiam sit amet orci eget eros faucibus tincidunt. Sed fringilla. venenatis faucibus."
        },
        {
            icon: "./dumble.png",
            tittle: "Strengthens Muscles & Tissues",
            pargarph: "Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Sed fringilla."
        },


    ]

    const folder2 = [
        {

            icon: "./bar.png",
            tittle: "Enhances Quality of Life",
            pargarph: "Etiam sit amet orci eget eros faucibus tincidunt. Sed fringilla. venenatis faucibus.."
        },
        {
            icon: "./gym.png",
            tittle: "Improves Bone Density",
            pargarph: "Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Sed fringilla."
        },
        {
            icon: "./smart.png",
            tittle: "Ensures Fat Free Body Mass",
            pargarph: "Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Sed fringilla."
        },
    ]

    useEffect(() => {
        window.addEventListener("scroll", () => {

            if (window.scrollY > 3000) {
                setscroll(true)
            } else {
                setscroll(false)
            }
        })
    }, [])

    const [scroll, setscroll] = useState(false)
    return (

        <div className="Blog">
            <div className="box">
                <section className="left" style={{ marginLeft: scroll ? 0 : -500 }}>
                    {folder1.map((f1) => {
                        return (
                            <div className="data">
                                <div className="icon"> <img className="icon" src={f1.icon} alt="" /></div>

                                <div className="info">
                                    <h4>{f1.tittle}</h4>
                                    <p>{f1.pargarph}</p>
                                </div>
                            </div>
                        )
                    })}
                </section>
                <section className="right" style={{ marginRight: scroll ? 0 : -500 }}>
                    {folder2.map((f2) => {
                        return (
                            <div className="data">
                                <div className="icon"> <img className="icon" src={f2.icon} alt="" /></div>

                                <div className="info">
                                    <h4>{f2.tittle}</h4>
                                    <p>{f2.pargarph}</p>
                                </div>
                            </div>
                        )
                    })}
                </section>
            </div>
        </div>
    )
}

export default Blog