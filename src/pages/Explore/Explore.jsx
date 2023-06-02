import clsx from "clsx";
import { useEffect, useState, memo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

import styles from "./Explore.module.scss";
import Card from "@/components/Card/Card";
import { fetchDataFromApi } from "@/utils/httpRequest";
import { selectFilterGenre, selectSortValue } from "@/store/selectors";
import InfiniteScroll from "react-infinite-scroll-component";

function Explore() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  // const [, ]

  const sortValue = useSelector(selectSortValue);
  const { mediaType } = useParams();
  const { genreIds } = useSelector(selectFilterGenre)

  const fetchInitData = async (filter) => {
    filter.sort_by = sortValue
    const res = await fetchDataFromApi(
      // `/discover/${mediaType}?sort_by=${sortValue}with_genres=${genreIds}`
      `/discover/${mediaType}`, filter
    );
    setData(res);
    setPage(prev => prev + 1);
  };

  const handleLoadMore = async () => {
    const res = await fetchDataFromApi(`/discover/${mediaType}?page=${page}`);
    setData((prev) => ({
      ...prev,
      results : [...prev.results, ...res.results]
    }))
    setPage((prev) => prev + 1);
  };


  useEffect(() => {
    const filter = {}
    fetchInitData(filter);
  }, [sortValue, mediaType, genreIds]);

  return (
    <InfiniteScroll
      dataLength={data?.results?.length || 0}
      next={handleLoadMore}
      hasMore={page < data.totalPages}
      className={clsx(styles.cardList)}
    >
      {data?.results?.map((card) => {
        return <Card key={card.id} data={card} />;
      })}
    </InfiniteScroll>
  );
}

export default memo(Explore);
