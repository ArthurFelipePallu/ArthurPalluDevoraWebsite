import "./styles.css";
import news1 from "../../assets/imgs/news1.jpg";

export default function Slider() {
  return (
    <>
      <div className="apdw-slider-div">
        <div className="apdw-slideshow-container">
          <div className="mySlides fade">
            <div className="numbertext">1 / 3</div>
            <img src={news1} alt="" />
            <div className="text">
              <h2>Hiring Coders #3</h2>
              <h5>O terceiro ciclo da hiring coders iniciou , veja</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
