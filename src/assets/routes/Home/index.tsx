import Header from "../../../Components/Headers";
import { Outlet } from "react-router-dom";

import "./styles.css";

export default function Home() {
  return (
    <>
      <Header />

      <Outlet/>
    </>
  );
}
