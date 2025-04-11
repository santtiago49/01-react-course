import { useEffect, useRef, useState } from "react"

type TimerArgs = {
    milisegundos: number,
    segundos?: number
}

export const Timer = ({ milisegundos }: TimerArgs) => {

    const [segundos, setSegundos] = useState<number>(0);
    const ref = useRef<NodeJS.Timer>(null);
    
    
    useEffect(() => {
        if ( ref.current ){
            clearInterval(ref.current);
        }
        
        ref.current = setInterval(() => setSegundos( s => s + 1), milisegundos);
    }, [milisegundos]);

    
    return (
        <h4>Timer
            <br />
            <small>{segundos}</small><br />
            <small>{milisegundos}</small>
        </h4> 
    )
}