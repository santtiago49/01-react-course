import { useState } from "react"
import { Timer } from "./Timer";

export const TimerPadre = () => {

    const [miliseconds, setMiliseconds] = useState(0);

    return (
        <div>
            Miliseconds: {miliseconds}
            <br />

            <button 
                onClick={() => setMiliseconds(1000)}
                className="btn btn-outline-success">
                1000
            </button>

            <button 
                onClick={() => setMiliseconds(2000)}
                className="btn btn-outline-success">
                2000
            </button>

            <Timer milisegundos={miliseconds}/>
            
        </div>
    )
}