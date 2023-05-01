import clsx from "clsx";
import styles from './NowPlaying.module.scss'
import MainLayout from "@/layouts/MainLayout/MainLayout";

function NowPlaying() {
    return ( 
        <div className={clsx(styles.container)}>
        <h1>Now playing page</h1>
        </div>
     );
}

export default NowPlaying;