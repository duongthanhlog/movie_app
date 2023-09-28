import clsx from 'clsx';
import { useEffect, useState, memo } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { v4 as uuidv4 } from 'uuid';

import styles from './Explore.module.scss';
import { fetchDataFromApi } from '@/utils/httpRequest';
import InfiniteScroll from 'react-infinite-scroll-component';
import Button from '@/components/Button/Button';
import Sort from '@/pages/Explore/Sort';
import Card from '@/components/Card/Card';
import { useDispatch } from 'react-redux';
import { setGlobalLoading } from '@/store/Slices/globalLoadingSlice';

function Explore() {
   const dispatch = useDispatch();

   const { mediaType } = useParams();
   const { genres } = useLoaderData();

   const [enableSearch, setEnableSearch] = useState(false);
   const [page, setPage] = useState(1);
   const [sortText, setSortText] = useState('');
   const [sortValue, setSortValue] = useState('');
   const [genreIdList, setGenreIdList] = useState([]);
   const [data, setData] = useState({});

   const handleChangeSort = (item) => {
      setEnableSearch(true);
      setSortText(item.label);
      setSortValue(item.value);
   };

   const handleChangeGenres = (id) => {
      setEnableSearch(true);
      setGenreIdList((prev) =>
         prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
   };

   const handleFilterMovie = () => {
      const filters = {
         with_genres: genreIdList.toString(),
         sort_by: sortValue,
      };
      fetchInitData(filters);
      setEnableSearch(false);
   };

   const fetchInitData = async (filters) => {
      dispatch(setGlobalLoading(true));
      const data = await fetchDataFromApi(`/discover/${mediaType}`, filters);
      setData(data);
      dispatch(setGlobalLoading(false));
      setPage((prev) => prev + 1);
   };

   const handleLoadMore = async () => {
      const filters = {
         page: page,
      };
      if (sortValue) {
         filters.sort_by = sortValue;
      } else {
         delete filters.sort_by;
      }
      if (genreIdList.length > 0) {
         filters.with_genres = genreIdList.toString();
      } else {
         delete filters.with_genres;
      }

      const data = await fetchDataFromApi(`/discover/${mediaType}`, filters);
      setData((prev) => ({
         ...prev,
         results: [...prev.results, ...data.results],
      }));
      setPage((prev) => prev + 1);
   };

   console.log(data?.results?.length);

   useEffect(() => {
      const filters = {};
      fetchInitData(filters);
      setSortText('');
      setGenreIdList([]);
      setEnableSearch(false);
   }, [mediaType]);

   return (
      <>
         <div className={clsx(styles.leftPanel)}>
            <div className={clsx(styles.filterPanel)}>
               {/* <div onClick={() => setOpenSort(!openSort)} className={clsx(styles.filterTitle)}>
                  Sort {openSort ? <BiChevronDown size="2.4rem" /> : <BiChevronRight size="2.4rem" />}
               </div> */}
               {/* {openSort && ( */}
               <div className={clsx(styles.filterBody)}>
                  <p>Sort Results By</p>
                  <Sort
                     onchange={handleChangeSort}
                     label={sortText}
                     defaultValue={'Popularity Descending'}
                  />
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
               {/* )} */}
            </div>
            <Button
               disabled={!enableSearch}
               onClick={handleFilterMovie}
               className={clsx(styles.searchButton)}
            >
               Search
            </Button>
         </div>
         {data?.results?.length === 0 && (
            <h1 style={{ color: 'white', fontSize: '4rem' }}>No Result Found</h1>
         )}
         <InfiniteScroll
            dataLength={data?.results?.length || 0}
            next={handleLoadMore}
            hasMore={page < data?.totalPages}
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
