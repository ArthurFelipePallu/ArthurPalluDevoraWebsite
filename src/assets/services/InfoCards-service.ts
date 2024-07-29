import { InfoCardDTO } from "../Models/Cards/InfoCard"; 

export function findAll() : InfoCardDTO[] {
    return InfoCardInfos;
}

export function findById(id: number) : InfoCardDTO | undefined {
    return InfoCardInfos.find(x => x.id === id);
}

const InfoCardInfos: InfoCardDTO[] = [
    {
        "id": 1,
        "imgUrl": "chess.png",
        "name":"Meus Jogos",
        "link":"https://github.com/ArthurFelipePallu",
        "bgcolor":"#fff",
        "fontcolor":"#000"
    },
    {
        "id": 2,
        "imgUrl":  "bookwriting.gif",
        "name":"Sobre Mim",
         "link":"mailto:arthurfelipepallu@gmail.com",
         "bgcolor":"#696969",
        "fontcolor":"#fff"
    },
    {
        "id": 3,
        "imgUrl":  "hud.png",
        "name":"Meus Projetos",
         "link":"https://wa.me/41998177573",
         "bgcolor":"#000",
        "fontcolor":"#fff"
    }

]