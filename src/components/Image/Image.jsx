import fallback from '@/assests/no-poster.png'

function Image({src, className, ...props}) {
    return ( 
        <img
            data-src={src.endsWith('null') || src.endsWith('undefined')  ? fallback : src}
            src={src.endsWith('null') || src.endsWith('undefined')  ? fallback : src}
            loading="lazy"
            width="100%"
            alt=""
            className={className}
            {...props}
        />
    );
}

export default Image;