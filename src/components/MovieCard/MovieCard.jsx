import clsx from "clsx";
import styles from "./MovieCard.module.scss";

import { AiFillStar } from "react-icons/ai";
import { MdLaunch } from "react-icons/md";

import Button from "@/components/Button/Button";
import { Link } from "react-router-dom";

import { isWebpSupported } from "react-image-webp/dist/utils";
import Image from "../Image/Image";

function MovieCard({ data }) {
  console.log(data.backdropPath);
  return (
    <div className={clsx(styles.cardItem)}>
      <Link to="/details">
        <Image
          src={`${import.meta.env.VITE_IMAGE_BASE_URL}${
            data?.backdropPath || data?.posterPath
          }`}
          alt=""
          className={clsx(styles.cardImgWrap)}
        />
      </Link>
      <div className={clsx(styles.cardBody)}>
        <span>
          <AiFillStar
            style={{ color: "var(--main-color)", marginRight: "2px" }}
            size="1.6rem"
          />
          {data?.voteAverage}
        </span>
        <Link to="/" className={clsx(styles.cardName)}>
          {data?.title}
        </Link>
        <Button
          className={clsx(styles.watchButton)}
          rightIcon={<MdLaunch />}
          to="/"
        >
          Watch now
        </Button>
        {/* <Button
          primary
          leftIcon={<BsFillPlayFill size="2rem" />}
          className={clsx(styles.trailerButton)}
        >
          Trailer
        </Button> */}
      </div>
    </div>
  );
}

export default MovieCard;
