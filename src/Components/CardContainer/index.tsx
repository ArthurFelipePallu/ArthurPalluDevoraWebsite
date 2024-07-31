import { GameCardContainerDTO } from "../../assets/Models/Cards/GameContainerCards";
import "./styles.css";
import { getImageURL } from "../../assets/utils/image-utils";


type Prop={
    cardProp: GameCardContainerDTO;
}


export default function CardContainer({cardProp}:Prop ) {
  return <>
   <div className="card-container">
                    <div className="overlay"></div>
                    <div className="overlay"></div>
                    <div className="overlay"></div>
                    <div className="overlay"></div>
                    <div className="card" 
                          style={{ backgroundImage: `url(${getImageURL(cardProp.imgUrl)})`,
                            backgroundRepeat:"no-repeat",
                             backgroundSize:"cover"}}  >
                      <h4>
                       {cardProp.text}
                      </h4>
                      <span className="chev">&rsaquo;</span>
                    </div>
                  </div>

  
  </>;
}
