import clsx from "clsx";
import styles from './Details.module.scss';
import { Container } from "react-bootstrap";


function Details() {
    return ( 
        <Container fluid>
            <Container fluid="xxl">
                <div className={clsx(styles.container)}></div>
            </Container>
        </Container>
     );
}

export default Details;