import "./styles.css";
import { HeaderIconDTO } from "../../../assets/Models/HeaderIcon/HeaderIcon";
//import icon_git from "../../../assets/imgs/git_icon.png";
import { getImageURL } from "../../../assets/utils/image-utils";

type Prop={
    contactProp : HeaderIconDTO;
}

export default function HeaderContact({contactProp}:Prop) {
  return (
    <div className="apdw-hc-div">
      <a target="_blank" href={contactProp.link}>
          <img src={ getImageURL(contactProp.imgUrl)} alt="" className="apdw-hc-img" />
          <div className="apdw-hc-name">{contactProp.name}</div>
      </a>
    </div>
  );
}
