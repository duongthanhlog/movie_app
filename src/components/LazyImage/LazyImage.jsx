import { LazyLoadImage } from "react-lazy-load-image-component";
import fallback from '@/assests/no-poster.png'

function LazyImage({src,className, ...props}) {
    return ( 
        <LazyLoadImage
            src={src.endsWith('null') || src.endsWith('undefined')  ? fallback : src}
            effect="blur"
            alt=""
            width="100%"
            wrapperClassName={className}
            {...props}
        />
    );
}

export default LazyImage;