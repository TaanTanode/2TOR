import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import pic1 from "../../assets/pic1.jpeg";
import pic2 from "../../assets/pic2.jpeg";
import pic3 from "../../assets/pic3.jpeg";
import pic4 from "../../assets/pic4.jpeg";

import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';


const ContentCarousel = () => {
    return (
        <div className='flex'>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className="mySwiper ้ h-80 object-cover rounded-md"
            >
                <SwiperSlide>
                    <img
                        className='w-full'
                        src={pic1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className='w-full'
                        src={pic2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className='w-full'
                        src={pic3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className='w-full'
                        src={pic4} />
                </SwiperSlide>


            </Swiper>
        </div>
    )
}

export default ContentCarousel