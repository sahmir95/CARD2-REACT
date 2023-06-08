import ImageCard from "./ImageCard";
import DescCard from "./DescCard";
import ButtonCard from "./ButtonCard";
import "./card.css"

const Card = ()=>{
    return(
        <div className="card-container">
            <ImageCard/> 
            <DescCard/>
            <ButtonCard/>
        </div>
    )
}
export default Card;