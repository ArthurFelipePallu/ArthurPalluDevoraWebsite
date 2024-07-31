import CardContainer from "../../../../Components/CardContainer";
import "./styles.css";
import * as GameCardServices from "../../../services/GameCardsInfo-service"


export default function Games() {
  const nextcolumnstart = Math.ceil(GameCardServices.findAll().length/3);

  return (
    <>
      <main>
        <section className="apdw-game-section">
          <div className="apdw-game-container">
            <section id="study">
              <div className="game-container">

              <div className="col">

                {
                  GameCardServices.findAll().slice(0,nextcolumnstart).map((card)=>(
                    <CardContainer key={card.id} cardProp={card}/>
                  ))
                }
                </div>

                <div className="col">
                {
                  GameCardServices.findAll().slice(nextcolumnstart,nextcolumnstart*2).map((card)=>(
                    <CardContainer key={card.id} cardProp={card}/>
                  ))
                }
                </div>

                <div className="col">
                {
                  GameCardServices.findAll().slice(nextcolumnstart*2).map((card)=>(
                    <CardContainer key={card.id} cardProp={card}/>
                  ))
                }
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
