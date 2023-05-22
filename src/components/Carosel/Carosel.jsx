import clsx from "clsx";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

import styles from "./Carosel.module.scss";
import Card from "../Card/Card";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import useFetch from "@/hooks/useFetch";
import ContentWrapper from "../ContentWrapper/ContentWrapper";

function Carosel({ title, subTitle, headingSection, endPoint }) {
  const { data } = useFetch(`/trending/movie/${endPoint}`);

  const NextButton = (props) => {
    if (props.onClick === null) return;
    return (
      <BiChevronRight
        onClick={props.onClick}
        className={clsx(styles.rightButton)}
      />
    );
  };

  const PrevButton = (props) => {
    if (props.onClick === null) return;
    return (
      <BiChevronLeft
        onClick={props.onClick}
        className={clsx(styles.leftButton)}
      />
    );
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  };

  return (
    <ContentWrapper>
      <h1 className={clsx(styles.heading)}>{headingSection}</h1>
      <h1 className={clsx(styles.title)}>{title}</h1>
      <h3 className={clsx(styles.subTitle)}>{subTitle}</h3>

      <div className={clsx(styles.carosel)}>
        <Slider {...settings} className={clsx(styles.slideWrap)}>
          {data?.results?.map((card) => {
            return (
              <Card key={card.id} data={card} className={clsx(styles.card)} />
            );
          })}
        </Slider>
      </div>
    </ContentWrapper>
  );
}

export default Carosel;
