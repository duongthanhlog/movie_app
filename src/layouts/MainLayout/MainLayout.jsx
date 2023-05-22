import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import clsx from "clsx";

import styles from "./MainLayout.module.scss";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import Footer from "../components/Footer/Footer";
import ContentWrapper from "@/components/ContentWrapper/ContentWrapper";

function MainLayout() {
  const [title, setTitle] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname) {
      case "/movie":
        setTitle("Popular Movies");
        break;
      case "/tv":
        setTitle("Popular Tv");
    }
  }, [pathname]);

  return (
    <div className={clsx(styles.container)}>
      <Header />
      <ContentWrapper>
        <div className={clsx(styles.content)}>
          <h1 className={clsx(styles.title)}>{title}</h1>
          <div className={clsx(styles.div)}>
              <SideBar />
              <Outlet />
          </div>
        </div>
      </ContentWrapper>
      <Footer />
    </div>
  );
}

export default MainLayout;
