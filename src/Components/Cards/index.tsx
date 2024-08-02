import "./styles.css";
//import about_gif from "../../assets/imgs/bookwriting.gif"
import { InfoCardDTO } from "../../assets/Models/Cards/InfoCard";
import { getImageURL } from "../../assets/utils/image-utils";
import { Link } from "react-router-dom";

type Prop = {
  infocardProp: InfoCardDTO;
};

export default function InfoCard({ infocardProp }: Prop) {
  return (
    <>
        <Link to="/games" className="apdw-link-style">
      <div
        className="apdw-infocard-div"
        style={{
          backgroundColor: infocardProp.bgcolor,
          color: infocardProp.fontcolor,
        }}
        
      >
          <img src={getImageURL(infocardProp.imgUrl)} alt="" />
          
          {infocardProp.name}
        
      </div>
      </Link>
    </>
  );
}
