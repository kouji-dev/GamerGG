"use client";
import { OrderCard } from "@/app/client-area/orders/order-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useRef } from "react";
import {ArrowBack} from "@/ui/icons/arrowBack";
import {ArrowForward} from "@/ui/icons/arrowForward";

// configure Swiper to use modules

const activeOrders = new Array(5).fill(1);
export const ActiveOrders = () => {
  const leftArrowRef = useRef<HTMLDivElement>(null);
  const rightArrowRef = useRef<HTMLDivElement>(null);
  return (
    <div className="relative flex items-center justify-center">
      <div className="relative flex flex-auto gap-sm w-[500px] items-center">
        <ArrowBack onClick={() => leftArrowRef.current!.click()} />
        <Swiper
          observer
          setWrapperSize={false}
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={3}
          navigation={{
            nextEl: ".next-element",
            prevEl: ".prev-element",
          }}
        >
          <div ref={leftArrowRef} className="prev-element" />
          {activeOrders.map((_, index) => (
            <SwiperSlide key={index}>
              <OrderCard id={index} />
            </SwiperSlide>
          ))}
          <div ref={rightArrowRef} className="next-element" />
        </Swiper>
        <ArrowForward onClick={() => rightArrowRef.current!.click()} />
      </div>
    </div>
  );
};
