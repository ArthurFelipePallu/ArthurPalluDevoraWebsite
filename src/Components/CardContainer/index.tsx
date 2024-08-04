import { GameCardContainerDTO } from "../../assets/Models/Cards/GameContainerCards";
import "./styles.css";
import { getImageURL } from "../../assets/utils/image-utils";
import { Link } from "react-router-dom";


type Prop={
    cardProp: GameCardContainerDTO;
}


export default function CardContainer({cardProp}:Prop ) {
  return (
  <Link to={ `/details/${cardProp.id}` } className="apdw-link-style" >
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
                       {cardProp.intro}
                       "this is the id : ${cardProp.id}"
                      </h4>
                      <span className="chev">&rsaquo;</span>
                    </div>
                  </div>

  
  </Link>
   
  
  );
}
