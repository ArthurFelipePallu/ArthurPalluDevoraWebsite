import { HeaderIconDTO } from "../Models/HeaderIcon/HeaderIcon";

export function findAll() : HeaderIconDTO[] {
    return HeaderContactsInfos;
}

export function findById(id: number) : HeaderIconDTO | undefined {
    return HeaderContactsInfos.find(x => x.id === id);
}

const HeaderContactsInfos: HeaderIconDTO[] = [
    {
        "id": 1,
        "imgUrl": "git_icon.png",
        "name":"Git",
        "link":"https://github.com/ArthurFelipePallu"
    },
    {
        "id": 2,
        "imgUrl":  "white-email-icon.png",
        "name":"Email",
         "link":"mailto:arthurfelipepallu@gmail.com"
    },
    {
        "id": 3,
        "imgUrl":  "white-contact-us-icon.png",
        "name":"whats",
         "link":"https://wa.me/41998177573"
    }

]