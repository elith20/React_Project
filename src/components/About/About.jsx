import Navbar from "../Navbar/Navbar"
import aboutlogo from "../../images/about_us.jpg"
import "../About/about.css"
import { useState } from "react"

export default function About(){
    let [count, setCount] = useState(0);
    
    function handleIncrease() {
        setCount(count+=1)
    }

    function handleDecrease(){
        setCount(count-=1)
    }


    return <>
        <Navbar/>
        <div>
            <div>{count}</div>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
        <h1>About Us</h1>
        <div className="background">
            <img src={aboutlogo} alt="about_image"></img>
        </div>
        <h1> Info you have to know!!!</h1>
        <div className = "text">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident quisquam ex tempora delectus saepe iste
                incidunt ducimus quas in voluptatem deleniti accusamus eum, atque voluptas pariatur quo accusantium architect
                consequatur eius cumque distinctio unde. Blanditiis quam nesciunt laudantium doloribus quisquam sed neque, a,
                beatae fuga, architecto culpa! Cum dolore nostrum cumque voluptas, mollitia omnis voluptatum maxime iusto.
                Minus, nemo ea.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident quisquam ex tempora delectus saepe iste
                incidunt ducimus quas in voluptatem deleniti accusamus eum,  atque voluptas pariatur quo accusantium architecto
                consequatur eius cumque distinctio unde. Blanditiis quam nesciunt laudantium doloribus quisquam sed neque, a,
                beatae fuga, architecto culpa! Cum dolore nostrum cumque voluptas, mollitia omnis voluptatum maxime iusto.
                Minus, nemo ea.
            </p>
        </div>
        <hr></hr>

    </>
}