import clsx from "clsx";
import styles from './TopThisWeek.module.scss'
import Carosel from "@/components/Carosel/Carosel";
import useFetch from "@/hooks/useFetch";

function TopThisWeek() {
    const { data, isLoading } = useFetch('/trending/movie/week')

    return ( 
        <div className={clsx(styles.container)}>
            <Carosel title="Top 10 on IMDb this week" cardsData={data}/>
        </div>
     );
}

export default TopThisWeek;