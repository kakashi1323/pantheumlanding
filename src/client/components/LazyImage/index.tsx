import React, { useState, useEffect } from "react";
import LoadingPage from "../LoadingPage";

const LazyLoadImage = (props: any) => {
  const [loaded, setLoaded] = useState(false);
  const { src, alt, className, imageClass = "", ...nestedProps } = props;

  useEffect(() => {
    const img = new Image();
    img.onload = (e) => {
      setLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <div
      className={`lazyload-image-wrapper flex relative w-full h-full ${className}`}
      style={{
        height: nestedProps.style?.height || "100%",
        width: nestedProps.style?.width || "100%",
      }}
    >
      {!loaded && (
        <div
          className="flex absolute w-full h-full bg-black p-4 justify-center items-center"
          style={{
            minHeight: 180,
          }}
        >
          <LoadingPage />
        </div>
      )}
      <img className={imageClass} loading="lazy" src={src} {...nestedProps} />
    </div>
  );
};

export default LazyLoadImage;
