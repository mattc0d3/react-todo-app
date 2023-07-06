// import dogsArray from "../assets/gallery-pics"

const ArrowButtons = ({ position, setPosition, length}) => {
    const totalImages = length

    const incrementPosition = () => {
        if (position === totalImages) {
            setPosition(position = 0)
        } else {
            setPosition((currentPosition) => currentPosition + 1)
        }
    }

    const decrementPosition = () => {
        if (position === 0) {
            setPosition(position = totalImages)
        } else {
            setPosition((currentPosition) => currentPosition - 1)
        }
    }

    return <div>
        <button onClick={decrementPosition} id="previous-button">Previous</button>
        <button onClick={incrementPosition} id="next-button">Next</button>
    </div>
}

export default ArrowButtons