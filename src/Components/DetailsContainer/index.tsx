import { GameCardContainerDTO } from "../../assets/Models/Cards/GameContainerCards";
import "./styles.css"
import { getImageURL } from "../../assets/utils/image-utils";

type Prop={
    detail : GameCardContainerDTO;
}

export default function DetailsContainer( {detail} : Prop){

    return<>
        <div className="apdw-detail-container">
            <img src={getImageURL(detail.imgUrl)} alt={detail.name} />
            <article>
                <h1>{detail.name}</h1>
                <h2>{detail.intro}</h2>
                <h3>{detail.text}</h3>
            </article> 
        </div>
    
    </>;
}
