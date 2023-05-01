import clsx from "clsx";
import styles from './TopPick.module.scss'
import Carosel from "@/components/Carosel/Carosel";
import useFetch from "@/hooks/useFetch";

function TopPick() {
    const {data, isLoading} = useFetch('/trending/movie/day')

    return ( 
        <div className={clsx(styles.container)}>
            <Carosel title="Top pick" subTitle="TV shows and movies just for you" cardsData={data}/>
        </div>
     );
}

export default TopPick;