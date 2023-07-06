import ArrowButtons from "./Arrow-Buttons"



const Gallery = ({ position , picsArray }) => {

    return <div>
        
        <img className='main-image' src={picsArray[position]} alt="pic of dog" />
        
    </div>
}

export default Gallery