import ImageCard from "./ImageCard";
import TitleCard from "./TitleCard";
import DescCard from "./DescCard";
import ButtonCard from "./ButtonCard";
import "./card.css"

const Card = (props)=>{
    return(
        <div className="card-container">
            <ImageCard image={props.image}/>
            <TitleCard title={props.title}/> 
            <DescCard desc={props.desc}/>
            <ButtonCard/>
        </div>
    )
}
export default Card;