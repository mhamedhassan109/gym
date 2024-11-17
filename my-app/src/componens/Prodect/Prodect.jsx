import { useState } from "react"
import "./Prodect.css"

function Prodect() {
    const [active, setactive] = useState("active")


    {/* prodects  */ }

    const prodect = [
        {
            tittle: "gold standard",
            price: 101.00,
            img: "./proten1.webp",
            catogry: "gold",
        },
        {
            tittle: "Shaddad Jim",
            price: 105.00,
            img: "./Accessories1.webp",
            catogry: "Shaddad Jim",
        },
        {
            tittle: "premir proten",
            price: 108.00,
            img: "./proten2.jpg",
            catogry: "premir proten",
        },
        {
            tittle: "shaker alpha",
            price: 95.00,
            img: "./Accessories3.webp",
            catogry: "shaker alpha",
        },
        {
            tittle: "muscle milk",
            price: 77.00,
            img: "./proten3.webp",
            catogry: "muscle milk",
        },
        {
            tittle: "dumbell red",
            price: 300.00,
            img: "./dombbles2.avif",
            catogry: "dumbell red",
        },
        {
            tittle: "mp combat",
            price: 800.00,
            img: "./proten4.webp",
            catogry: "mp combat",
        },
        {
            tittle: "bag white",
            price: 55.00,
            img: "./Accessories6.png",
            catogry: "bag white",
        },
        {
            tittle: "shaker muscle xp",
            price: 78.00,
            img: "./Accessories4.webp",
            catogry: "shaker muscle xp",
        },
        {
            tittle: "dumbell flexiblell",
            price: 109.00,
            img: "./dombbles3.webp",
            catogry: "dumbell flexiblell",
        },
        {
            tittle: "dumbell black",
            price: 82.00,
            img: "./dombbles1.webp",
            catogry: "dumbell black",
        },
        {
            tittle: "bag green",
            price: 33.99,
            img: "./Accessories5.jfif",
            catogry: "bag green",
        }]



    const [filterItem, setfilterItem] = useState(prodect)
    return (
        <div className="prodects">
            <div className="opations">
                <button onClick={() => {
                    setactive("all prodect")
                    setfilterItem(prodect)
                }} className={active === "all prodect" ? "active" : null}>all prodect</button>


                <button onClick={() => {
                    setactive("Protein powder")


                    const newArr = prodect.filter((pro) => {
                        return (
                            pro.catogry === "gold" || pro.catogry === "premir proten"
                            || pro.catogry === "muscle milk" || pro.catogry === "mp combat"
                        )
                    })

                    setfilterItem(newArr)

                }} className={active === "Protein powder" ? "active" : null}>Protein powder</button>


                <button onClick={() => {
                    setactive("Accessories")
                    const newArr = prodect.filter((pro) => {
                        return (
                            pro.catogry === "shaker alpha" || pro.catogry === "bag green" ||
                            pro.catogry === "shaker muscle xp" || pro.catogry === "bag white"
                        )

                    })
                    setfilterItem(newArr)
                }} className={active === "Accessories" ? "active" : null}>Accessories</button>


                <button onClick={() => {
                    setactive("tools")
                    const newArr = prodect.filter((pro) => {
                        return (
                            pro.catogry === "dumbell black" || pro.catogry === "dumbell flexiblell" ||
                            pro.catogry === "dumbell red" || pro.catogry === "Shaddad Jim"
                        )
                    })

                    setfilterItem(newArr)
                }} className={active === "tools" ? "active" : null}>tools</button>
            </div>

            <div className="items">

                {filterItem.map((e) => {
                    return (
                        <div className="items-prodect">
                            <div className="info-prodect">
                                <span className="start icon-plus-square-o"></span>
                                <div className="text">
                                    <h2>{e.tittle}</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </div>
                            <div className="photo-prodect">
                                <p className="price">${e.price}</p>
                                <img src={e.img} alt="photo" />
                            </div>
                        </div>
                    )
                })}


            </div>
        </div>
    )
}

export default Prodect