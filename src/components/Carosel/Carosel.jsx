import clsx from 'clsx';
import Slider from 'react-slick';

import styles from './Carosel.module.scss';
import Card from '../Card/Card';

import useFetch from '@/hooks/useFetch';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import { Container } from 'reactstrap';

function Carosel({ title, subTitle, headingSection, endPoint, itemCount }) {
   const { data } = useFetch(`/trending/movie/${endPoint}`);

   const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: itemCount,
      slidesToScroll: itemCount,
      nextArrow: <NextButton />,
      prevArrow: <PrevButton />,
   };

   return (
      <ContentWrapper>
         <h1 className={clsx(styles.heading)}>{headingSection}</h1>
         <h1 className={clsx(styles.title)}>{title}</h1>
         <h3 className={clsx(styles.subTitle)}>{subTitle}</h3>
         <div className={clsx(styles.carosel)}>
            <Slider {...settings} className={clsx(styles.slideWrap)}>
               {data?.results?.map((card) => {
                  return <Card key={card.id} data={card} className={clsx(styles.card)} />;
               })}
            </Slider>
         </div>
      </ContentWrapper>
   );
}

export default Carosel;
