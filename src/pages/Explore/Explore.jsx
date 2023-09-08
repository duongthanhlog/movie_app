import clsx from 'clsx';
import { useEffect, useState, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLoaderData, useLocation, useNavigate, useParams } from 'react-router';

import styles from './Explore.module.scss';
import request, { fetchDataFromApi } from '@/utils/httpRequest';
import { selectFilterGenre, selectGenre, selectHomeUrl, selectSortValue } from '@/store/selectors';
import InfiniteScroll from 'react-infinite-scroll-component';
import { BiChevronDown, BiChevronRight } from 'react-icons/bi';
import Button from '@/components/Button/Button';
// import { getGenreIds } from "@/store/Slices/filterGenresSlice";
import Sort from '@/pages/Explore/Sort';
import Card from '@/components/Card/Card';
import { changeGenres, changeSortValue } from '@/store/Slices/sortSlice';
import axios from 'axios';

function Explore() {
   const { mediaType } = useParams();
   const { genres } = useLoaderData();

   const [data, setData] = useState([]);
   const [enableSearch, setEnableSearch] = useState(false);
   const [open, setOpen] = useState({
      sort: false,
      filter: false,
   });
   
   const [page, setPage] = useState(1);
   const [sortText, setSortText] = useState('Popularity Descending');
   const [sortValue, setSortValue] = useState('popularity.desc');
   const [genreIdList, setGenreIdList] = useState([]);


   const toggleSortButton = () => {
      setOpen((prev) => ({ ...prev, sort: !open.sort }));
   };

   const handleChangeSort = (item) => {
      setEnableSearch(true);
      setSortText(item.label);
      setSortValue(item.value);
   };

   const handleChangeGenres = (id) => {
      setGenreIdList((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
      setEnableSearch(true);
   };

   const handleFilterMovie = () => {
      const filters = {
         with_genres : genreIdList.join(','),
         sort_by : sortValue,
      }
      fetchInitData(filters)
      setEnableSearch(false);
   };


   const fetchInitData = async (filters) => {
      const data = await fetchDataFromApi(`/discover/${mediaType}`, filters);
      setData(data);
      setPage((prev) => prev + 1);
   };

   const handleLoadMore = async () => {
      const filters = {
         with_genres : genreIdList.join(','),
         sort_by : sortValue,
         page : page
      }
      const data = await fetchDataFromApi(`/discover/${mediaType}`, filters);
      setData((prev) => ({
         ...prev,
         results: [...prev.results, ...data.results],
      }));
      setPage((prev) => prev + 1);
   };

   useEffect(() => {
      const filters = {};
      fetchInitData(filters);
   }, [mediaType]);

   return (
      <>
         <div className={clsx(styles.container)}>
            <div className={clsx(styles.filterPanel)}>
               <div onClick={toggleSortButton} className={clsx(styles.filterTitle)}>
                  Sort {open.sort ? <BiChevronDown size="2.4rem" /> : <BiChevronRight size="2.4rem" />}
               </div>
               {open.sort && (
                  <div className={clsx(styles.filterBody)}>
                     <p>Sort Results By</p>
                     <Sort onchange={handleChangeSort} label={sortText} />
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

            <Button disabled={!enableSearch} onClick={handleFilterMovie} className={clsx(styles.searchButton)}>
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
