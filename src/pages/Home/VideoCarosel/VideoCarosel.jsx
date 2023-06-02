import ContentWrapper from "@/components/ContentWrapper/ContentWrapper";
import styles from "./VideoCarosel.module.scss";
import clsx from "clsx";
import Slider from "react-slick";
import NextButton from "@/components/Carosel/NextButton";
import PrevButton from "@/components/Carosel/PrevButton";

function VideoCards() {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  };

  return (
    <div className={clsx(styles.container)}>
      <div
        className={clsx(styles.background)}
        style={{
          backgroundImage: `url(https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg)`,
        }}
      >
        <ContentWrapper>
          <h1 className={clsx(styles.title)}>Latest Trailers</h1>
            <Slider {...settings} className={clsx(styles.videoList)}>
              <div className={clsx(styles.videoItem)}>
                <img
                  src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg"
                  alt=""
                />
                <h1>ádád</h1>
              </div>
              <div className={clsx(styles.videoItem)}>
                <img
                  src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg"
                  alt=""
                />
                <h1>ádád</h1>
              </div>
              <div className={clsx(styles.videoItem)}>
                <img
                  src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg"
                  alt=""
                />
                <h1>ádád</h1>
              </div>
              <div className={clsx(styles.videoItem)}>
                <img
                  src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg"
                  alt=""
                />
                <h1>ádád</h1>
              </div>
              <div className={clsx(styles.videoItem)}>
                <img
                  src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg"
                  alt=""
                />
                <h1>ádád</h1>
              </div>
              <div className={clsx(styles.videoItem)}>
                <img
                  src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg"
                  alt=""
                />
                <h1>ádád</h1>
              </div>
            </Slider>
        </ContentWrapper>
      </div>
    </div>
  );
}

export default VideoCards;
