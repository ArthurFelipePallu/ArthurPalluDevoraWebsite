import HeaderContact from "../HeaderItems/HeaderContacts";
import "./styles.css";
import * as HeaderContactService from "../../assets/services/HeaderContactInfo-service";
import HeaderIcon from "../HeaderItems/HeaderIcons";

export default function Header() {
  return (
    <header>
      <div className="apdw-home-header">
        <div className="apdw-home-header-inside">
          {/* <form id="catalogo-barra-pesquisa" className="barra-pesquisa">
            <button
              type="submit"
              id="devcom-btn-submit"
              className="devcom-btn-pesquisa"
            >
              {" "}
              🔎︎{" "}
            </button>
            <input
              type="text"
              className="devcom-search-input"
              placeholder="Nome do Produto"
            />
            <button
              type="reset"
              id="devcom-btn-reset"
              className="devcom-btn-pesquisa"
            >
              {" "}
              🗙{" "}
            </button>
          </form> */}
          <div className="apdw-header-icons">
            <HeaderIcon />
            {HeaderContactService.findAll().map((contact) => (
              <HeaderContact key={contact.id} contactProp={contact} />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
