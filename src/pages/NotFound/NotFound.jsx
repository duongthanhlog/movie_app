import clsx from "clsx";
import styles from './NotFound.module.scss'

function NotFound() {
    return ( 
        <div className={clsx(styles.container)}>
            <h1>Page not found</h1>
        </div>
     );
}

export default NotFound;