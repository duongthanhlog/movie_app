import clsx from "clsx";
import styles from './SideBar.module.scss';

function SideBar() {
    return ( 
       <div className={clsx(styles.container)}>
            <h1>Side Bar</h1>
       </div>
     );
}

export default SideBar;