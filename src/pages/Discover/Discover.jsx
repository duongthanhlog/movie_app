import clsx from "clsx";
import { useEffect, useState, memo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

import styles from "./Discover.module.scss";
import Card from "@/components/Card/Card";
import { fetchDataFromApi } from "@/utils/httpRequest";
import { selectSortValue } from "@/store/selectors";
import InfiniteScroll from "react-infinite-scroll-component";

function Discover() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const { mediaType } = useParams();
  const sortValue = useSelector(selectSortValue);

  const fetchInitData = async () => {
    const data = await fetchDataFromApi(
      `/discover/${mediaType}?sort_by=${sortValue}`
    );
    setData(data.results);
    setPage(prev => prev + 1);
  };

  const handleLoadMore = async () => {
    const data = await fetchDataFromApi(`/discover/${mediaType}?page=${page}`);
    setData((prev) => [...prev, ...data.results]);
    setPage((prev) => prev + 1);
  };


  useEffect(() => {
    fetchInitData();
  }, [sortValue, mediaType]);

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={handleLoadMore}
      hasMore={true}
      className={clsx(styles.cardList)}
    >
      {data?.map((card) => {
        return <Card key={card.id} data={card} />;
      })}
    </InfiniteScroll>
  );
}

export default memo(Discover);
