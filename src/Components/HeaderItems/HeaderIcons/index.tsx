import "./styles.css";
import devora_logo  from "../../../assets/imgs/devorawhite.png";

export default function HeaderIcon() {
  return (
    <div className="apdw-devora-logo">
      <a href="">
        <img src={devora_logo} alt="" />
      </a>
    </div>
  );
}
