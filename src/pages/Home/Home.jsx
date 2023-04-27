import clsx from "clsx";
import Banner from "./Banner/Banner";
import styles from "./Home.module.scss";
import TopPick from "./TopPick/TopPick";
import TopThisWeek from "./TopThisWeek/TopThisWeek";

function Home() {
  return (
    <div className={clsx(styles.container)}>
      <Banner />
      <TopPick/>
      <TopThisWeek/>
    </div>
  );
}

export default Home;
