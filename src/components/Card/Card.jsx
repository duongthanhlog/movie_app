import clsx from "clsx";
import styles from "./Card.module.scss";

import { AiFillStar } from "react-icons/ai";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";


import { selectHomeUrl } from "@/store/selectors";
import Image from "../Image/Image";

function Card({ data, className }) {
  const { url } = useSelector(selectHomeUrl);
  const { images } = url
  const { mediaType } = useParams()

  return (
    <div className={clsx(styles.cardItem, className)}>
      <Link to={`/${data.mediaType || mediaType}/${data.id}`} state={data} className={clsx(styles.imgLink)}>
        <Image
          src={`${images?.baseUrl}w220_and_h330_face${data?.posterPath}`}
          className={clsx(styles.cardImgWrap)}
        />
      </Link>
      <div className={clsx(styles.cardBody)}>
        <span>
          <AiFillStar
            style={{ color: '#f5c518', marginRight: "2px" }}
            size="1.6rem"
          />
          {data?.voteAverage}
        </span>
        <Link to="/" className={clsx(styles.cardName)}>
          {data?.title || data?.originalName}
        </Link>
        <h5>{dayjs(data?.firstAirDate || data?.firstAirDate).format('MMM D, YYYY')}</h5>
      </div>
    </div>
  );
}

export default Card;
