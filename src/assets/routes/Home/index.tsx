import InfoCard from "../../../Components/Cards";
import Header from "../../../Components/Headers";
import IntroductionParagraph from "../../../Components/IntroductionParagraph";
import Slider from "../../../Components/Slider";
import * as InfoCardService from "../../services/InfoCards-service";

import "./styles.css";

export default function Home() {
  return (
    <>
      <Header />
      <IntroductionParagraph />

      <Slider />

      <div className="apdw-infocard-container">
        {InfoCardService.findAll().map((info) => (
          <InfoCard key={info.id} infocardProp={info} />
        ))}

      </div>
    </>
  );
}
