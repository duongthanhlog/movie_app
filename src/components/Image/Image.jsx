import fallback from "@/assests/no-poster.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Image({ src, className, ...props }) {
  return (
    <LazyLoadImage
      src={src.endsWith('null') || src.endsWith('undefined') ? fallback : src}
      effect="blur"
      alt=""
      className={className}
      {...props}
    />
  );
}

export default Image;
