import clsx from "clsx";

import styles from "./Banner.module.scss";
import { useEffect, useState } from "react";
import useFetch from "@/hooks/useFetch";
import { useSelector } from "react-redux";
import { selectHomeUrl } from "@/store/selectors";
import { Container } from "react-bootstrap";

function Banner() {
  const [background, setBackground] = useState("");
  const { data } = useFetch("/movie/upcoming");
  const { url } = useSelector(selectHomeUrl);
  const { images } = url
  
  useEffect(() => {
    const ramdomIndex = Math.floor(Math.random() * data?.results?.length);
    const bg = data?.results?.[ramdomIndex]?.backdropPath;
    setBackground(bg);
  }, [data]);

  return (
    <div className={clsx(styles.container)}>
      <div className={clsx(styles.overlay)}></div>
      <div
        style={{
          backgroundImage: `url(${images?.baseUrl}${
            images?.backdropSizes[2]
          }${background})`,
        }}
        className={clsx(styles.banner)}
      ></div>
      <Container fluid="xl">
        <div className={clsx(styles.bannerTitle)}>
          <h1>
            Welcome.
          </h1>
          <p> Millions of movies, TV shows and people to discover. Explore
            now.</p>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
