import { Spinner } from "react-bootstrap";
import styles from './Search.module.scss';
import clsx from "clsx";

function Spinners() {
    return ( 
        <div className={clsx(styles.loading)}>
              <Spinner
                className={clsx(styles.spinner)}
                animation="grow"
                variant="white"
                size="md"
              />
              <Spinner
                className={clsx(styles.spinner)}
                animation="grow"
                variant="white"
                size="md"
              />
              <Spinner
                className={clsx(styles.spinner)}
                animation="grow"
                variant="white"
                size="md"
              />
            </div>
     );
}

export default Spinners;