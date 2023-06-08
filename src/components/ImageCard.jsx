const ImageCard = (props)=>{
    return(
        <div className="image">
            <img src={props.image} alt="car" />
        </div>
    )
}
export default ImageCard;