import clsx from 'clsx';
import Banner from './Banner/Banner';
import styles from './Home.module.scss';
import Carosel from '@/components/Carosel/Carosel';
// import VideoCards from "./VideoCarosel/VideoCarosel";

function Home() {
   return (
      <div className={clsx(styles.container)}>
         <Banner />
         <Carosel
            itemCount={7}
            title="Top pick"
            subTitle="TV shows and movies just for you"
            endPoint="day"
         />
         {/* <VideoCards /> */}
         <Carosel itemCount={7} title="Top 10 on IMDb this week" endPoint="week" />
      </div>
   );
}

export default Home;
