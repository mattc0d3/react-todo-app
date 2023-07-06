import ButtonGenerator from "./Button-Generator"

const Playingfield = () => {

    const fieldHeight = 400
    const fieldWidth = 400

    return <div style={{height:fieldHeight, width:fieldWidth, border:"2px solid black"}}>
        <ButtonGenerator height={fieldHeight} width={fieldWidth}/>
    </div>

}

export default Playingfield