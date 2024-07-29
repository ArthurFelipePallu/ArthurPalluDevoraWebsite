import "./styles.css";
//import about_gif from "../../assets/imgs/bookwriting.gif"
import { InfoCardDTO } from "../../assets/Models/Cards/InfoCard";
import { getImageURL } from "../../assets/utils/image-utils";


type Prop={
    infocardProp : InfoCardDTO;
}



export default function InfoCard({infocardProp}:Prop) {
  return <>
    <div className="apdw-infocard-div" 
    style={{backgroundColor : infocardProp.bgcolor,
            color:infocardProp.fontcolor  }}>
        <img src={getImageURL(infocardProp.imgUrl)} alt="" 
        />
        
        {infocardProp.name}
    </div>
  </>;
}
