import clsx from "clsx";

import styles from "./Banner.module.scss";
import { useEffect, useLayoutEffect, useState } from "react";
import request from "~/request/request";
import LazyImage from "~/components/LazyImage/LazyImage";

function Banner() {
  const [background, setBackground] = useState("");

  useEffect(() => {
    const params = {
      api_key: process.env.REACT_APP_API_KEY,
      language: "en-US",
      page: 1,
    };
    const fetchApi = async () => {
      const res = await request.get("/movie/upcoming", { params });
      const data = await res.data.results;
      const ramdomIndex = Math.floor(Math.random() * data.length);
      const bg = data[ramdomIndex].backdropPath;
      setBackground(bg)
    };
    fetchApi();
  }, []);

  return (
    <div className={clsx(styles.container)}>
      <div className={clsx(styles.overlay)}></div>
      <LazyImage
        width="100%"
        className={clsx(styles.image)}
        src={process.env.REACT_APP_IMAGE_BASE_URL + background}
      />
    </div>
  );
}

export default Banner;
