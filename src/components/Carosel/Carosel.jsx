import clsx from "clsx";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./Carosel.module.scss";
import MovieCard from "../MovieCard/MovieCard";

import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";

function Carosel({ title, subTitle, cardsData = [], headingSection }) {
  const [left, setLeft] = useState(0);
  const caroselRef = useRef();

  const endOfCarosel = () => {
    const caroselWrapWidth = caroselRef?.current?.clientWidth;
    const itemsPerCaroselWrap = 6;
    const maxScrollLeftTimes = Math.floor(
      cardsData.length / itemsPerCaroselWrap
    );
    const endOfCarosel = maxScrollLeftTimes * caroselWrapWidth;
    return endOfCarosel;
  };

  useEffect(() => {
    caroselRef.current.style.transform = `translateX(${left}px)`;
  }, [left]);

  const navigateCarosel = (num) => {
    if (num === 1) {
      setLeft((prev) => prev - caroselRef.current.clientWidth);
    }
    if (num === -1) {
      setLeft((prev) => prev + caroselRef.current.clientWidth);
    }
  };

  return (
    <Container fluid>
      <Container fluid="xl" className={clsx(styles.container)}>
        <h1 className={clsx(styles.headingSection)}>{headingSection}</h1>
        <h1 className={clsx(styles.title)}>{title}</h1>
        <h3 className={clsx(styles.subTitle)}>{subTitle}</h3>

        <div className={clsx(styles.caroselContainer)}>
          {endOfCarosel() !== Math.abs(left) && (
            <BiChevronRight
              onClick={() => navigateCarosel(1)}
              className={clsx(styles.rightButton)}
            />
          )}
          {left !== 0 && (
            <BiChevronLeft
              onClick={() => navigateCarosel(-1)}
              className={clsx(styles.leftButton)}
            />
          )}
          <div className={clsx(styles.caroselWrapper)}>
            <Row
              className={`${clsx(styles.caroselContent)} flex-nowrap`}
              ref={caroselRef}
            >
              {cardsData.map((card) => {
                return (
                  <Col key={card.id} xl={2}>
                    <MovieCard data={card} />
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default Carosel;
