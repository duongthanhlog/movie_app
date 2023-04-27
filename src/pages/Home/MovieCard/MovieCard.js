import clsx from "clsx";
import styles from "./MovieCard.module.scss";

import { AiFillStar } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { MdLaunch } from "react-icons/md";

import Button from "~/components/Button/Button";
import { Link } from "react-router-dom";
import LazyImage from "~/components/LazyImage/LazyImage";

function MovieCard({data}) {
  return (
    <div className={clsx(styles.container)}>
      <div className={clsx(styles.cardItem)}>
        <Link to="/details">
            <LazyImage
              src="https://image.tmdb.org/t/p/original/wDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg"
              alt=""
            />
        </Link>
        <div className={clsx(styles.cardBody)}>
          <span>
            <AiFillStar style={{ color: "var(--main-color)", marginRight: '2px' }} size="1.6rem" />
            8.7
          </span>
          <Link className={clsx(styles.cardName)}>Star Trek: Sự Hủy Diệt</Link>
          <Button
            className={clsx(styles.watchButton)}
            rightIcon={<MdLaunch />}
            to="/"
          >
            Watch now
          </Button>
          <Button
            primary
            leftIcon={<BsFillPlayFill size="2rem" />}
            className={clsx(styles.trailerButton)}
          >
            Trailer
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
