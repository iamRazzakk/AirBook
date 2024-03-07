import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import image1 from '../assets/BlogsImage/Rectangle1.png';
import image2 from '../assets/BlogsImage/Rectangle2.png';
import image3 from '../assets/BlogsImage/Rectangle3.png';

import avater1 from '../assets/Avater/Rectangle11.png';
import avater2 from '../assets/Avater/Rectangle22.png';
import avater3 from '../assets/Avater/Rectangle33.png';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

const TravelBlogs = () => {
    return (
        <div className='md:mt-32 md:px-10'>
            <Swiper
                slidesPerView={1}
                centeredSlides={false}
                slidesPerGroupSkip={1}
                grabCursor={true}
                keyboard={{
                    enabled: true,
                }}
                breakpoints={{
                    769: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                    },
                }}

                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="card rounded-lg  bg-base-100 shadow-xl mx-4 my-4">
                        <figure className="">
                            <img src={image1} alt="Shoes" className="w-full rounded-xl" />
                        </figure>
                        <div className='px-2'>
                            <div className='flex justify-between mt-3 '>
                                <p className='text-yellow-300'>
                                    Work The Travel
                                </p>
                                <p>
                                    18 September 2023
                                </p>
                            </div>
                            <h1 className='font-bold text-xl mb-4'>Embracing The Digital Nomad Lifestyle The Digital NOman Thr...</h1>
                            <hr />
                            <div className="mt-4 flex p-4 justify-between items-center">
                                <div className='flex items-center gap-2'>
                                    <img className='w-12 h-12 object-cover rounded-full' src={avater1} alt="" />
                                    <p>Ys Stafed</p>
                                </div>
                                <button className='text-yellow-500'>Read More >> </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card rounded-lg bg-base-100 shadow-xl mx-4 my-4">
                        <figure className="">
                            <img src={image2} alt="Shoes" className="w-full rounded-xl" />
                        </figure>
                        <div className='md:px-2'>
                            <div className='flex justify-between mt-3'>
                                <p className='text-yellow-300'>
                                    Work The Travel
                                </p>
                                <p>
                                    18 September 2023
                                </p>
                            </div>
                            <h1 className='font-bold text-xl mb-4'>Embracing The Digital Nomad Lifestyle The Digital NOman Thr...</h1>
                            <hr />
                            <div className="mt-4 flex justify-between items-center">
                                <div className='flex p-4 items-center gap-2'>
                                    <img className='w-12 h-12 object-cover rounded-full' src={avater2} alt="" />
                                    <p>Ys Stafed</p>
                                </div>
                                <button className='text-yellow-500'>Read More >> </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card rounded-lg bg-base-100 shadow-xl mx-4 my-4">
                        <figure className="">
                            <img src={image3} alt="Shoes" className="w-full rounded-xl" />
                        </figure>
                        <div className='px-2'>
                            <div className='flex justify-between mt-3'>
                                <p className='text-yellow-300'>
                                    Work The Travel
                                </p>
                                <p>
                                    18 September 2023
                                </p>
                            </div>
                            <h1 className='font-bold text-xl mb-4'>Embracing The Digital Nomad Lifestyle The Digital NOman Thr...</h1>
                            <hr />
                            <div className="mt-4 flex justify-between items-center">
                                <div className='flex p-4 items-center gap-2'>
                                    <img className='w-12 h-12 object-cover rounded-full' src={avater3} alt="" />
                                    <p>Ys Stafed</p>
                                </div>
                                <button className='text-yellow-500'>Read More >> </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card rounded-lg bg-base-100 shadow-xl mx-4 my-4">
                        <figure className="">
                            <img src={image2} alt="Shoes" className="w-full rounded-xl" />
                        </figure>
                        <div className='md:px-2'>
                            <div className='flex justify-between mt-3'>
                                <p className='text-yellow-300'>
                                    Work The Travel
                                </p>
                                <p>
                                    18 September 2023
                                </p>
                            </div>
                            <h1 className='font-bold text-xl mb-4'>Embracing The Digital Nomad Lifestyle The Digital NOman Thr...</h1>
                            <hr />
                            <div className="mt-4 flex justify-between items-center">
                                <div className='flex p-4 items-center gap-2'>
                                    <img className='w-12 h-12 object-cover rounded-full' src={avater2} alt="" />
                                    <p>Ys Stafed</p>
                                </div>
                                <button className='text-yellow-500'>Read More >> </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default TravelBlogs;