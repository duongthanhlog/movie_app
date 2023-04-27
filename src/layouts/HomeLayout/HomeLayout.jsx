import { Outlet } from "react-router";
import clsx from "clsx";

import styles from "./HomeLayout.module.scss"
import Header from "../components/Header/Header";


function DefaultLayout() {
  return (
    <div className={clsx(styles.container)}>
      <Header/>
      <div className={clsx(styles.content)}>
          <Outlet/>
      </div>
    </div>
  );
}

export default DefaultLayout;
