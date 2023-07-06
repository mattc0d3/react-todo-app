import Gallery from "./Gallery"
import PreviewList from "./Preview-List"
import { useState } from 'react'
import ArrowButtons from "./Arrow-Buttons"
import PositionCounter from "./Position-Counter"
import dogsArray from "../assets/gallery-pics"

const Counter = () => {
    const [position, setPosition] = useState(0)

    console.log(position, "<<<<<<<<<<<< position in counter")

    return <div className='container'>
        < Gallery position={position} picsArray={dogsArray}/>
        < ArrowButtons position={position} setPosition={setPosition} length={dogsArray.length-1}/>
        <PositionCounter position={position} length={dogsArray.length}/>
        < PreviewList position={position} setPosition={setPosition} picsArray={dogsArray}/>
        
        </div>
}

export default Counter