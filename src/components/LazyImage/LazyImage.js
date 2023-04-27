import { LazyLoadImage } from "react-lazy-load-image-component";

function LazyImage({src, ...props}) {
    const fallback = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2WSBHA7-rjNrbLVQbCgwDTdcmOgSbRNOKqQ&usqp=CAU"
    return ( 
        <LazyLoadImage
            src={src.endsWith('null') || src.endsWith('undefined')  ? fallback : src}
            effect="blur"
            alt=""
            width="100%"
            {...props}
        />
    );
}

export default LazyImage;