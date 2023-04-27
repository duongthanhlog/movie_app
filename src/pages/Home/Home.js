import clsx from "clsx";
import Banner from "./Banner/Banner";
import styles from "./Home.module.scss";
import Carosel from "./Carosel/Carosel";

function Home() {
  return (
    <div className={clsx(styles.container)}>
      <Banner />
      <Carosel/>
    </div>
  );
}

export default Home;
