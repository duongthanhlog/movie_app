import clsx from "clsx";
import { v4 as uuidv4 } from "uuid";
import { Col, Row, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import styles from "./Popular.module.scss";
import MovieCard from "@/components/MovieCard/MovieCard";
import Button from "@/components/Button/Button";
import { fetchDataFromApi } from "@/untils/httpRequest";

function Popular() {
  const [page, setGage] = useState(1);
  const [initData, setInitData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { sortValue } = useSelector((state) => state.sort);


  useEffect(() => {
    const params = {
      page: page,
      sort_by: sortValue,
    };
    fetchDataFromApi(`discover/movie`, params)
      .then((data) => {
        setInitData([...initData, ...data.results]);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [page]);

  // useEffect(() => {
  //   const params = {
  //     sort_by: sortValue
  //   }
  //   fetchDataFromApi(`discover/movie`, params)
  //     .then((data) => {
  //       setInitData(data.results);
  //       setIsLoading(false);
  //     })
  //     .catch((err) => console.log(err));
  // }, [sortValue]);

  const handleLoadMore = () => {
    setGage(prev => prev + 1);
  };

  return (
    <div className={clsx(styles.container)}>
      <div className={clsx(styles.cardList)}>
        {initData.map((card) => {
          return (
              <MovieCard  key={uuidv4()} data={card} />
          );
        })}
      </div>
      {!isLoading && (
        <Button onClick={handleLoadMore} className={clsx(styles.loadMoreBtn)}>
          Load more
        </Button>
      )}
    </div>
  );
}

export default Popular;
