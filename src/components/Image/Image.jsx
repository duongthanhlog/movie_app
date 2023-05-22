import fallback from "@/assests/no-poster.png";

function Image({ src, className, ...props }) {
  return (
    <img
      src={src.endsWith('null') || src.endsWith('undefined') ? fallback : src}
      loading="lazy"
      alt=""
      className={className}
      {...props}
    />
  );
}

export default Image;
