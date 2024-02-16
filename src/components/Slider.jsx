"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ListItem } from "./index";
import { feedBackList } from "@/data/feedbackData";

const Slider = ({ bulletClass = "", slideCount = 0, delayTime = "" }) => {
  return (
    <div className="flex items-center justify-center">
      {slideCount && (
        <Swiper
          autoplay={{ delay: delayTime }}
          slidesPerView={slideCount}
          spaceBetween={30}
          pagination={{
            clickable: true,
            bulletClass: bulletClass,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {feedBackList.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="to-dark-purple from-g-purple flex max-w-96 flex-col justify-start gap-y-10 rounded-xl px-10 py-16 hover:bg-gradient-to-br">
                <div>
                  <img src={item.mainIconPath} alt={item.mainAlt} />
                </div>
                <p className="min-h-28 text-base font-normal leading-normal sm:text-lg">
                  {item.mainText}
                </p>
                <ListItem
                  iconPath={item.subIconPath}
                  alt={item.alt}
                  title={item.title}
                  text="Founder & Leader"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Slider;
