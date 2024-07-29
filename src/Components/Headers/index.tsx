import HeaderContact from "../HeaderItems/HeaderContacts";
import "./styles.css";
import * as HeaderContactService from "../../assets/services/HeaderContactInfo-service";
import HeaderIcon from "../HeaderItems/HeaderIcons";

export default function Header() {
  return (
    <div className="apdw-home-header">
      <div className="apdw-home-header-inside">
        <HeaderIcon/>
        {HeaderContactService.findAll().map((contact) => (
          <HeaderContact key={contact.id} contactProp={contact} />
        ))}
      </div>
    </div>
  );
}
