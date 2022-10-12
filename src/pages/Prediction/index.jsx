import React from 'react'
import './Prediction.scss'

import StakingCard from '../../components/StakingCard'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation,Autoplay } from "swiper";
import { useRef } from 'react';

export default function Prediction() {

    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)

    return (
        <div className="staking centering">
        <div className="prediction-wrapper w-100">
                <div className="staking-header container">
                    <div className="staking-wallet d-flex">
                        <div className="staking-wallet-content d-flex">
                            <div className="staking-control-icon icon-coin">
                                <img src="/images/coin.png" alt="" />
                            </div>
                            <div className="staking-wallet-title">
                                TOKEN
                            </div>
                            <div className="staking-wallet-value price">
                                100.000 
                            </div>
                        </div>
                    </div>

                    <div className="staking-control d-flex">
                        <div className="staking-control-side" ref={navigationPrevRef}>
                            <i className="fa-solid fa-chevron-left"></i>
                        </div>
                        <div className="staking-control-icon">
                            <img src="/images/staking-center.png" alt="" />
                        </div>
                        <div className="staking-control-side" ref={navigationNextRef}>
                            <i className="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>

                    <div className="staking-right d-flex">
                        <div className="staking-button centering">
                            <i className="fa-solid fa-question"></i>
                        </div>

                        <div className="staking-button centering">
                            <i className="fa-solid fa-trophy"></i>
                        </div>

                        <div className="staking-button centering">
                            <i className="fa-solid fa-clock-rotate-left"></i>
                        </div>
                    </div>
                </div>

                <div className="card-list centering">
                    <div className="card-list-wrapper">
                        <Swiper
                            modules={[Pagination, Navigation,Autoplay]}
                            slidesPerView={3}
                            spaceBetween={15}
                            slidesPerGroup={1}
                            loop={false}
                            initialSlide={3}
                            pagination={false}
                            centeredSlides={true}
                            breakpoints={{
                                768: {
                                    slidesPerView: 4,
                                },
                                // when window width is >= 768px
                                1000: {
                                    slidesPerView: 5,
                                },
                                1500: {
                                    slidesPerView: 7,
                                },
                            }}
                            onInit={(swiper) => {
                                swiper.params.navigation.prevEl = navigationPrevRef.current;
                                swiper.params.navigation.nextEl = navigationNextRef.current;
                                swiper.navigation.init();
                                swiper.navigation.update();
                            }}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <StakingCard status={'live'}/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <StakingCard status={'live'}/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <StakingCard status={'live'}/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <StakingCard status={'next'}/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <StakingCard status={'later'}/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <StakingCard status={'later'}/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <StakingCard status={'later'}/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}
