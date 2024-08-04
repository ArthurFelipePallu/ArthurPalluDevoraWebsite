import { GameCardContainerDTO } from "../Models/Cards/GameContainerCards";

export function findAll(): GameCardContainerDTO[] {
  return GameCardInfos;
}

export function findById(id: number): GameCardContainerDTO | undefined {
  return GameCardInfos.find((x) => x.id === id);
}

const GameCardInfos: GameCardContainerDTO[] = [
  {
    id: 1,
    imgUrl: "studying.gif",
    link: "google.com",
    name: "Chess Champions",
    intro:"First Real Game of Devora Studios",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    bgcolor:"#f00"
  },
  {
    id: 2,
    imgUrl: "pucpr.png",
    link: "google.com",
    name: "Chess Champions",
    intro:"First Real Game of Devora Studios",
    text: "JUST ANOTHER TEST",
    bgcolor:"#00f"
  },
  {
    id: 3,
    imgUrl: "working.gif",
    link: "google.com",
    name: "Chess Champions",
    intro:"First Real Game of Devora Studios",
    text: "tO SEE IF ITS WORKING",
    bgcolor:"#0f0"
  },
  {
    id: 4,
    imgUrl: "bookwriting.gif",
    link: "google.com",
    name: "Chess Champions",
    intro:"First Real Game of Devora Studios",
    text: "First Real Game of Devora Studios",
    bgcolor:"#f00"
  },
  {
    id: 5,
    imgUrl: "code.gif",
    link: "google.com",
    name: "Chess Champions",
    intro:"First Real Game of Devora Studios",
    text: "JUST ANOTHER TEST",
    bgcolor:"#00f"
  },
  {
    id: 6,
    imgUrl: "DevSuperior.png",
    link: "google.com",
    name: "Chess Champions",
    intro:"First Real Game of Devora Studios",
    text: "tO SEE IF ITS WORKING",
    bgcolor:"#0f0"
  },
  {
    id: 7,
    imgUrl: "news1.jpg",
    link: "google.com",
    name: "Chess Champions",
    intro:"First Real Game of Devora Studios",
    text: "First Real Game of Devora Studios",
    bgcolor:"#f00"
  },
  {
    id: 8,
    imgUrl: "working2.gif",
    link: "google.com",
    name: "Chess Champions",
    intro:"First Real Game of Devora Studios",
    text: "JUST ANOTHER TEST",
    bgcolor:"#00f"
  },
  {
    id: 9,
    imgUrl: "star-slideout-bg.jpg",
    link: "google.com",
    name: "Chess Champions",
    intro:"First Real Game of Devora Studios",
    text: "tO SEE IF ITS WORKING",
    bgcolor:"#0f0"
  },

];
