import clsx from "clsx";
import { useEffect, useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData, useLocation, useNavigate, useParams } from "react-router";

import styles from "./Explore.module.scss";
import request, { fetchDataFromApi } from "@/utils/httpRequest";
import {
  selectFilterGenre,
  selectGenre,
  selectHomeUrl,
  selectSortValue,
} from "@/store/selectors";
import InfiniteScroll from "react-infinite-scroll-component";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import Button from "@/components/Button/Button";
// import { getGenreIds } from "@/store/Slices/filterGenresSlice";
import Sort from "@/pages/Explore/Sort";
import Card from "@/components/Card/Card";
import { changeGenres, changeSortValue } from "@/store/Slices/sortSlice";

function Explore() {
  const dispatch = useDispatch();
  const { mediaType } = useParams();

  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const [enableSearch, setEnableSearch] = useState(false);
  const [sortText, setSortText] = useState("Popularity Descending");
  const [sortValue, setSortValue] = useState("popularity.desc");
  const [genreIdList, setGenreIdList] = useState([])
  const [open, setOpen] = useState({
    sort: false,
    filter: false,
  });
  
  const { genres } = useLoaderData()
  // const { genreIds } = useSelector(selectFilterGenre);


  // useEffect(() => {
  //   dispatch(getGenreIds(genreIds));
  // }, [genreIds]);

  const toggleSortButton = () => {
    setOpen((prev) => ({ ...prev, sort: !open.sort }));
  };


  const handleChangeSort = (item) => {
    setEnableSearch(true)
    setSortText(item.label)
    setSortValue(item.value)
  };

  const handleChangeGenres = (id) => {
    setGenreIdList((prev) => prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]);
    setEnableSearch(true);
  };

  const handleFilterMovie = () => {
    setEnableSearch(false);
    dispatch(changeGenres(genreIdList))
    dispatch(changeSortValue(sortValue))
  };

  const fetchInitData = async (filter) => {
    const res = await request.get(
      `/discover/${mediaType}`,
      filter
    );
    setData(res.data);
    setPage((prev) => prev + 1);
  };

  
  const handleLoadMore = async () => {
    const res = await fetchDataFromApi(`/discover/${mediaType}?page=${page}`);
    setData((prev) => ({
      ...prev,
      results: [...prev.results, ...res.results],
    }));
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    const filter = {};
    fetchInitData(filter);
  }, [ mediaType]);


  return (
    <>
      <div className={clsx(styles.container)}>
        <div className={clsx(styles.filterPanel)}>
          <div onClick={toggleSortButton} className={clsx(styles.filterTitle)}>
            Sort{" "}
            {open.sort ? (
              <BiChevronDown size="2.4rem" />
            ) : (
              <BiChevronRight size="2.4rem" />
            )}
          </div>
          {open.sort && (
            <div className={clsx(styles.filterBody)}>
              <p>Sort Results By</p>
              <Sort onchangeSort={handleChangeSort} label={sortText} />
              <p>Genres</p>
              <ul className={clsx(styles.genreList)}>
                {genres?.map((genre) => {
                  return (
                    <li
                      onClick={() => handleChangeGenres(genre.id)}
                      className={clsx(styles.tag, {
                        [styles.active]: genreIdList.includes(genre.id),
                      })}
                      key={genre.id}
                    >
                      {genre.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        <Button
          disabled={!enableSearch}
          onClick={handleFilterMovie}
          className={clsx(styles.searchButton)}
        >
          Search
        </Button>
      </div>

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
    </>
  );
}

export default memo(Explore);
