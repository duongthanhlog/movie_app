import clsx from "clsx";
import { Container } from "react-bootstrap";
import { useLocation, useParams } from "react-router";

import styles from "./Details.module.scss";
import useFetch from "@/hooks/useFetch";
import ContentWrapper from "@/components/ContentWrapper/ContentWrapper";
import {
  AiFillCaretDown,
  AiFillStar,
  AiOutlineArrowRight,
  AiOutlinePlus,
} from "react-icons/ai";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectHomeUrl } from "@/store/selectors";
import dayjs from "dayjs";
import Button from "@/components/Button/Button";

function Details() {
  const { id, mediaType } = useParams();
  const { data: credits } = useFetch(
    `${import.meta.env.VITE_BASE_URL}/${mediaType}/${id}/credits`
  );
  const { data: detail } = useFetch(
    `${import.meta.env.VITE_BASE_URL}/${mediaType}/${id}`
  );

  const { url } = useSelector(selectHomeUrl);

  const runTime = `${Math.floor(detail?.runtime / 60)}h ${
    detail?.runtime % 60
  }m`;
  const genres = detail?.genres?.map((genre) => genre.name).join(", ");

  return (
    <div className={clsx(styles.container)}>
      <ul className={clsx(styles.menuBar)}>
        <li
          className={clsx(styles.menuItem, {
            [styles.active]: true,
          })}
        >
          Overview <AiFillCaretDown size="1rem" />
        </li>
        <li className={clsx(styles.menuItem)}>
          Media <AiFillCaretDown size="1rem" />
        </li>
        <li className={clsx(styles.menuItem)}>
          Fandom <AiFillCaretDown size="1rem" />
        </li>
        <li className={clsx(styles.menuItem)}>
          Share <AiFillCaretDown size="1rem" />
        </li>
      </ul>
      <div className={clsx(styles.backdropPoster)}>
        <div
          className={clsx(styles.backdropImg)}
          style={{
            backgroundImage: `url(${url?.images?.baseUrl}w1280${detail.backdropPath})`,
          }}
          alt=""
        >
          <ContentWrapper className={clsx(styles.divWrapp)}>
            <img
              src={`${url?.images?.baseUrl}w300${detail.posterPath}`}
              alt=""
              className={clsx(styles.posterImg)}
            />
            <div className={clsx(styles.description)}>
              <h2>
                <a href="">
                  {detail?.title || detail?.originalTitle}
                  <span style={{ color: "#e5e5e5" }}>{` (${dayjs(
                    detail.releaseDate
                  ).year()})`}</span>
                </a>
              </h2>

              <div className={clsx(styles.facts)}>
                <span>{dayjs(detail.releaseDate).format("DD/MM/YYYY")}</span>
                <span className={clsx(styles.genres)}>{genres}</span>
                <span className={clsx(styles.runtime)}>{runTime}</span>
              </div>

              <div className="d-flex align-items-center">
                <AiFillStar
                  style={{ color: "#f5c518", marginRight: "2px" }}
                  size="3.6rem"
                />
                <span style={{ fontSize: "2rem", marginLeft: "2px" }}>
                  {detail.voteAverage}
                </span>
              </div>
              <p className={clsx(styles.tagline)}>{detail.tagline}</p>
              <div className={clsx(styles.overView)}>
                <h3>Overview</h3>
                <p>{detail.overview}</p>
              </div>
              <div className={clsx(styles.actions)}>
                <Button className={clsx(styles.favoriteBtn)}>
                  <AiOutlinePlus style={{ marginRight: "8px" }} size="2.4rem" />
                  Favorite
                </Button>
                <Button className={clsx(styles.watchBtn)}>Watch</Button>
              </div>
            </div>
          </ContentWrapper>
        </div>
      </div>
      <ContentWrapper>
        <h3>Top Billed Cast</h3>
        <section className={clsx(styles.castCarosel)}>
          <div className={clsx(styles.castList)}>
            {credits?.cast?.slice(0, 9).map((people) => {
              return (
                <div key={people.id} className={clsx(styles.card)}>
                  <a href="">
                    <img
                      src={`${url?.images?.baseUrl}w138_and_h175_face${people.profilePath}`}
                      alt=""
                      loading="lazy"
                    />
                  </a>
                  <div className={clsx(styles.name)}>
                    <h4>{people?.name || people?.originalName}</h4>
                    <p>{people?.character}</p>
                  </div>
                </div>
              );
            })}
            <Button
              className={clsx(styles.viewMoreBtn)}
              rightIcon={<AiOutlineArrowRight size="1.8rem" />}
            >
              <h4>View More</h4>
            </Button>
          </div>
          <div className={clsx(styles.rightPanel)}>Heading</div>
        </section>
      </ContentWrapper>
    </div>
  );
}

export default Details;
