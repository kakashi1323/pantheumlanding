"use client";

import { Carousel as FlowbiteCarousel } from "flowbite-react";
import { memo, useEffect, useState } from "react";
import LazyLoadImage from "../LazyImage";

const Carosel = (props: any) => {
  const {
    resources,
    intervalTime = 3500,
    minHeight = 200,
    imageStyle = {},
    id = "unknow-carousel",
    renderItem,
    navigateControl,
    disabledAutoSlide = false,
    scrollDistance = 120
  } = props;
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const containerElement = document.getElementById(
      `carousel-content-container-${id}`
    );
    if (containerElement) {
      const rect = containerElement.getBoundingClientRect();
      var intervalId = setInterval(() => {
        if (isHovered || disabledAutoSlide) return;
        if (
          containerElement.scrollLeft + scrollDistance + rect.width + 16 >
          containerElement.scrollWidth
        ) {
          containerElement.scrollLeft = 0;
        } else {
          containerElement.scrollLeft += scrollDistance + 16 || 266;
        }
      }, intervalTime);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [id, intervalTime, isHovered, disabledAutoSlide]);

  const handleScroll =
    (direct = 1) =>
      () => {
        const containerElement = document.getElementById(
          `carousel-content-container-${id}`
        );
        if (containerElement) {
          containerElement.scrollLeft += direct * (scrollDistance + 16 || 266);
        }
      };

  return (
    <div
      className="flex w-full flex-row flex-nowrap overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      style={{
        paddingRight: navigateControl ? 40 : 0,
      }}
    >
      <div
        id={`carousel-content-container-${id}`}
        className="flex w-fit flex-row scroll-smooth scroll-hidden"
        style={{
          overflowX: "auto",
          overflowY: "hidden",
          paddingLeft: navigateControl ? 40 : 0,
        }}
      >
        {resources.map((item: any) =>
          renderItem ? (
            renderItem(item)
          ) : (
            <LazyLoadImage
              id={`carousel-image-${item.id || item._id}`}
              className="h-auto max-w-full mx-2 cursor-pointer"
              src={item.url}
              key={item.url}
              style={imageStyle}
            />
          )
        )}
      </div>
      {navigateControl && (
        <div
          className="flex h-full my-6 w-4 cursor-pointer absolute items-center"
          onClick={handleScroll(-1)}
        >
          <svg
            className="w-6 h-6 text-orange-400 dark:text-white hover:scale-125"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 10 16"
          >
            <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z" />
          </svg>
        </div>
      )}
      {navigateControl && (
        <div
          className="flex h-full my-6 w-4 cursor-pointer absolute right-0 items-center"
          onClick={handleScroll(1)}
        >
          <svg
            className="w-6 h-6 text-orange-400 dark:text-white hover:scale-125"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 10 16"
          >
            <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default memo(Carosel);
