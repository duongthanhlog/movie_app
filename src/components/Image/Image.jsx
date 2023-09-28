import noPosterImg from '@/assests/no-poster.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Image({ src, className, ...props }) {
   return (
      <LazyLoadImage
         src={src.endsWith('null') || src.endsWith('undefined') ? noPosterImg : src}
         effect="blur"
         alt=""
         className={className}
         loading="lazy"
         {...props}
      />
   );
}

export default Image;
