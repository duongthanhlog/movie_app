import clsx from "clsx";

import styles from "./Banner.module.scss";
import { useEffect, useState } from "react";
import useFetch from "@/hooks/useFetch";
import request from "@/untils/httpRequest";
import LazyBackground from "@/components/LazyBackground/LazyBackground";
import { Image } from "react-bootstrap";

function Banner() {
  const [background, setBackground] = useState("");
  const { data, isLoading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const ramdomIndex = Math.floor(Math.random() * data.length);
    const bg = data?.[ramdomIndex]?.backdropPath;
    setBackground(bg);
  }, [data]);

  return (
    <div className={clsx(styles.container)}>
      <div className={clsx(styles.overlay)}></div>
      <Image
        loading='lazy'
        fluid
        src={`${import.meta.env.VITE_IMAGE_BASE_URL}${background}`}
      />
    </div>
  );
}

export default Banner;
