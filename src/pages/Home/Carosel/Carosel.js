import clsx from "clsx";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./Carosel.module.scss";
import MovieCard from "../MovieCard/MovieCard";

function Carosel() {
  return (
    <Container fluid>
      <Container fluid="xl">
        <div className={clsx(styles.container)}>
          <h1 className={clsx(styles.headingSection)}>What to watch</h1>
          <h1 className={clsx(styles.title)}>Top 10 on IMDb this week</h1>
          <h3 className={clsx(styles.subTitle)}>Weekend of April 21-23</h3>
          <Row> 
            <Col lg={2}>
                <MovieCard/>
            </Col>
            <Col lg={2}>
                <MovieCard/>
            </Col>
            <Col lg={2}>
                <MovieCard/>
            </Col>
            <Col lg={2}>
                <MovieCard/>
            </Col>
            <Col lg={2}>
                <MovieCard/>
            </Col>
            <Col lg={2}>
                <MovieCard/>
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
}

export default Carosel;
