const ButtonGenerator = ({ height, width }) => {

    // const height = window.innerHeight
    // const width = window.innerWidth - 100

    const xPosition = Math.round(Math.random() * width)
    const yPosition = Math.round(Math.random() * height)

    console.log(xPosition, yPosition, "<<<<<<<<<< x and y")

    return <button style={{position:"relative", top:0, left:0}} ></button>
}

export default ButtonGenerator