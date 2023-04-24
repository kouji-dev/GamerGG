"use client";
import { OrderCard } from "@/app/client-area/orders/order-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowBack, ArrowForward } from "@/ui/icons";

// configure Swiper to use modules

const activeOrders = new Array(5).fill(1);
export const ActiveOrders = () => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="relative flex-auto w-[500px]">
        <Swiper
          setWrapperSize={false}
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={4}
          navigation={{
            nextEl: ".next-element",
            prevEl: ".prev-element",
          }}
        >
          <ArrowBack className="prev-element absolute top-1/2 left-lg z-10" />
          {activeOrders.map((_, index) => (
            <SwiperSlide key={index}>
              <OrderCard id={index} />
            </SwiperSlide>
          ))}
          <ArrowForward className="next-element absolute top-1/2 right-lg z-10" />
        </Swiper>
      </div>
    </div>
  );
};
