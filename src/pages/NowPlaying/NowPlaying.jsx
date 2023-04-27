import clsx from "clsx";
import styles from './NowPlaying.module.scss'

function NowPlaying() {
    return ( 
        <div className={clsx(styles.container)}>
            <h1>NowPlaying page</h1>
        </div>
     );
}

export default NowPlaying;