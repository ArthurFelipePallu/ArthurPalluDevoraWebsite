import { useParams } from "react-router-dom";
import "./styles.css";
import * as GamesInfo from "../../../services/GameCardsInfo-service";
import DetailsContainer from "../../../../Components/DetailsContainer";

export default function Details() {
  const params = useParams();
    const detail = GamesInfo.findById(Number(params.detailsId));


  return (
    <>
      <main>
        <section id="apdw-detail" className="">
            {detail && <DetailsContainer detail={detail}/>}
        </section>
      </main>
    </>
  );
}
