import { Outlet } from "react-router";
import clsx from "clsx";

import styles from "./HeaderOnly.module.scss"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


function HeaderOnly() {
  return (
    <div className={clsx(styles.container)}>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default HeaderOnly;
