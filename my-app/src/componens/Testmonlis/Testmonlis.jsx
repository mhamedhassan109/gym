import { useEffect, useRef, useState } from "react"
import "./Testmonlis.css"
import { motion } from "framer-motion"

function Testmonlis() {

    const slider = [
        {
            name: "rewan moahmed",
            tittle: "coutch",
            img: "./team1.png",
        },
        {
            name: "hossam ahmed",
            tittle: "live coutch",
            img: "./team2.png",
        },
        {
            name: " moahmed azz",
            tittle: "sineor couch",
            img: "./team3.png",
        },
        {
            name: "assem moahmed",
            tittle: "geneor coutch",
            img: "./team4.png",
        }
    ]
    const refcontener = useRef()
    const [width, setwidth] = useState(0)
    useEffect(() => {
        console.log(refcontener.current.scrollWidth)
        console.log(refcontener.current.offsetWidth)
        setwidth(refcontener.current.scrollWidth - refcontener.current.offsetWidth)
    }, [])
    return (
        <div className='Testmonlis'>
            <motion.div className="carsouer" ref={refcontener}>
                <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="slider-inner">
                    {slider.map((e) => {
                        return (
                            <motion.div className="item">

                                <div className="text">
                                    <div className="images">
                                        <img src={e.img} alt="photo" />
                                    </div>
                                    <h4>{e.name}</h4>
                                    <h6>{e.tittle}</h6>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, porro iure id explicabo</p>
                                </div>

                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Testmonlis