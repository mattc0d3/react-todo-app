import Gallery from "./Gallery"
import PreviewList from "./Preview-List"
import { useState } from 'react'
import ArrowButtons from "./Arrow-Buttons"

const Counter = () => {
    const [position, setPosition] = useState(1)

    console.log(position, "<<<<<<<<<<<< position in counter")

    return <div>
        < Gallery />
        < PreviewList />
        < ArrowButtons position={position} setPosition={setPosition} />
        </div>
}

export default Counter