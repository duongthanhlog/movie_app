import clsx from 'clsx';
import { useParams } from 'react-router';

import styles from './Details.module.scss';
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import { AiFillCaretDown, AiFillStar, AiOutlineArrowRight, AiOutlinePlus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { selectGlobalLoading, selectHomeUrl } from '@/store/selectors';
import dayjs from 'dayjs';
import Button from '@/components/Button/Button';
import { FaFacebook, FaLink } from 'react-icons/fa';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import Image from '@/components/Image/Image';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchDataFromApi } from '@/utils/httpRequest';
import { setGlobalLoading } from '@/store/Slices/globalLoadingSlice';

function Details() {
   const dispatch = useDispatch();

   const { id, mediaType } = useParams();
   const { url, language } = useSelector(selectHomeUrl);
   const { globalLoading } = useSelector(selectGlobalLoading);

   const [detail, setDetail] = useState();
   const [keywords, setKeywords] = useState();
   const [credits, setCredits] = useState();

   const runTime = `${Math.floor(detail?.runtime / 60)}h ${detail?.runtime % 60}m`;
   const genres = detail?.genres?.map((genre) => genre.name).join(', ');
   const originalLanguage = language?.find(
      (language) => language.iso6391 === detail?.originalLanguage
   );

   useEffect(() => {
      const fetchApi = async () => {
         dispatch(setGlobalLoading(true));
         const detail = await fetchDataFromApi(`/${mediaType}/${id}`);
         const credits = await fetchDataFromApi(`/${mediaType}/${id}/credits`);
         const { keywords } = await fetchDataFromApi(`/${mediaType}/${id}/keywords`);
         setDetail(detail);
         setKeywords(keywords);
         setCredits(credits);
         dispatch(setGlobalLoading(false));
      };
      fetchApi();
   }, [mediaType, id]);

   return (
      detail && (
         <div className={clsx(styles.container)}>
            <div className={clsx(styles.backdropPoster)}>
               <Image
                  effect="blur"
                  width="100%"
                  className={clsx(styles.backdropImg)}
                  src={`${url?.images?.baseUrl}original${detail.backdropPath}`}
               />
               <ContentWrapper className={clsx(styles.content)}>
                  <Image
                     src={`${url?.images?.baseUrl}w300${detail.posterPath}`}
                     alt=""
                     className={clsx(styles.posterImg)}
                     effect="blur"
                  />
                  <div className={clsx(styles.description)}>
                     <h2>
                        <a href="">
                           {detail?.title || detail?.originalTitle}
                           <span style={{ color: '#e5e5e5' }}>{` (${dayjs(
                              detail?.releaseDate
                           ).year()})`}</span>
                        </a>
                     </h2>
                     <div className={clsx(styles.facts)}>
                        <span>{dayjs(detail.releaseDate).format('DD/MM/YYYY')}</span>
                        <span className={clsx(styles.genres)}>{genres}</span>
                        <span className={clsx(styles.runtime)}>{runTime}</span>
                     </div>
                     <div className="d-flex align-items-center">
                        <AiFillStar
                           style={{
                              color: '#f5c518',
                              marginRight: '2px',
                           }}
                           size="3.6rem"
                        />
                        <span
                           style={{
                              fontSize: '2rem',
                              marginLeft: '2px',
                           }}
                        >
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
                           <AiOutlinePlus style={{ marginRight: '8px' }} size="2.4rem" />
                           Favorite
                        </Button>
                        <Button className={clsx(styles.watchBtn)}>Watch</Button>
                     </div>
                  </div>
               </ContentWrapper>
            </div>
            <ContentWrapper className="d-flex">
               <section className={clsx(styles.section)}>
                  <h3>Top Billed Cast</h3>
                  <ul className={clsx(styles.castList)}>
                     {credits?.cast?.slice(0, 9).map((people) => {
                        return (
                           <li key={people.id} className={clsx(styles.card)}>
                              <a href="">
                                 <Image
                                    src={`${url?.images?.baseUrl}w138_and_h175_face${people.profilePath}`}
                                    alt=""
                                    loading="lazy"
                                    effect="blur"
                                 />
                              </a>
                              <div className={clsx(styles.name)}>
                                 <h4>{people?.name || people?.originalName}</h4>
                                 <p>{people?.character}</p>
                              </div>
                           </li>
                        );
                     })}
                     <Button
                        className={clsx(styles.viewMoreBtn)}
                        rightIcon={<AiOutlineArrowRight size="1.8rem" />}
                     >
                        <h4>View More</h4>
                     </Button>
                  </ul>
               </section>
               <div className={clsx(styles.rightPanel)}>
                  <ul className={clsx(styles.socials)}>
                     <li>
                        <FaFacebook />
                     </li>
                     <li>
                        <BsTwitter />
                     </li>
                     <li>
                        <BsInstagram />
                     </li>
                     <li>
                        <FaLink />
                     </li>
                  </ul>
                  <p>
                     <strong>Original Title</strong>
                     <br />
                     {detail.originalTitle}
                  </p>
                  <p>
                     <strong>Status</strong>
                     <br />
                     {detail.status}
                  </p>
                  <p>
                     <strong>Original Language</strong>
                     <br />
                     {originalLanguage?.englishName}
                  </p>
                  <p>
                     <strong>Budget</strong>
                     <br />${detail?.budget?.toLocaleString('en-US')}
                  </p>
                  <p>
                     <strong>Revenue</strong>
                     <br />${detail?.revenue?.toLocaleString('en-US')}
                  </p>
                  <h4>Keyword</h4>
                  <ul className={clsx(styles.keywords)}>
                     {keywords?.map((keyword) => {
                        return (
                           <a href="" key={keyword.id}>
                              {keyword.name}
                           </a>
                        );
                     })}
                  </ul>
               </div>
            </ContentWrapper>
         </div>
      )
   );
}

export default Details;
