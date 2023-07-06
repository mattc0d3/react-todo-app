import ImageCard from "./Image-Card"

const PreviewList = ({position, setPosition, picsArray}) => {
    let previewPanel = picsArray.slice(position+1, position+5)

    if (position+5 > picsArray.length) {
        let overlap = position+5 - picsArray.length
       let extraSlice = picsArray.slice(0, overlap)
       previewPanel = previewPanel.concat(extraSlice)
    } 

    function handleClick(event){
        const imageUrl = event.target.src
        position = picsArray.indexOf(imageUrl)
        setPosition(position)
        
    }


    return <div className='preview-panel'>
        {previewPanel.map((pic)=>{
            return <div className="image-card" onClick={handleClick} key={pic}><ImageCard pic={pic}/></div>
        })}
        
        
    </div>
}

export default PreviewList