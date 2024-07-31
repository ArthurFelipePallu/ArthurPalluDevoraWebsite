import InfoCard from "../../../../Components/Cards";
import IntroductionParagraph from "../../../../Components/IntroductionParagraph";
import Slider from "../../../../Components/Slider";
import * as InfoCardService from "../../../services/InfoCards-service";

import "./styles.css";

export default function LandPage() {
  return (
    <main>
      <IntroductionParagraph />

      <Slider />

      <div className="apdw-infocard-container">
        {InfoCardService.findAll().map((info) => (
          <InfoCard key={info.id} infocardProp={info} />
        ))}

      </div>
    </main>
  );
}
