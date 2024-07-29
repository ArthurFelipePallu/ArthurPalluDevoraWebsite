import { HeaderIconDTO } from "../Models/HeaderIcon/HeaderIcon";
//import icon_git from "../../../assets/imgs/git_icon.png";
// import icon_email from "../../../assets/imgs/white-email-icon.png";
// import icon_whats from "../../../assets/imgs/white-contact-us-icon.png";

export function findAll() : HeaderIconDTO[] {
    return HeaderContactsInfos;
}

export function findById(id: number) : HeaderIconDTO | undefined {
    return HeaderContactsInfos.find(x => x.id === id);
}

const HeaderContactsInfos: HeaderIconDTO[] = [
    {
        "id": 1,
        "imgUrl": "",
        "name":"Git",
        "link":"https://github.com/ArthurFelipePallu"
    },
    {
        "id": 2,
        "imgUrl":  "../../../assets/imgs/white-email-icon.png",
        "name":"Email",
         "link":"mailto:arthurfelipepallu@gmail.com"
    },
    {
        "id": 3,
        "imgUrl":  "../../../assets/imgs/white-contact-us-icon.png",
        "name":"whats",
         "link":"https://wa.me/41998177573"
    }

]