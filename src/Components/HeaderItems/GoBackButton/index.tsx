import "./styles.css";
import { useNavigate } from "react-router-dom";
import go_back_img from "../../../assets/imgs/devora-white-go-back.png";

export default function GoBackButton() {
  const navigate = useNavigate();

  return (
    <>
      <div className="apdw-go-back-container">
        <img src={go_back_img} alt="" />
        <button onClick={() => navigate(-1)} className="go-back-btn">Return</button>
      </div>
    </>
  );
}
