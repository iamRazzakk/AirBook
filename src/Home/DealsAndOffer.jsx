
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import image1 from '../assets/slider1.png';
import image2 from '../assets/slider2.png';
import image3 from '../assets/slider3.png';

const DealsAndOffer = () => {
    return (
        <div className='px-4 md:px-10'>
            <h1 className="text-xl md:mb-10 md:mt-32 md:text-3xl font-bold">Deals And Offers</h1>
            <div className='px-4 py-2'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    modules={[Pagination]}
                    className="mySwiper"
                    breakpoints={{

                        640: {
                            slidesPerView: 1,
                        },

                        768: {
                            slidesPerView: 2,
                        },

                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className="hero min-h-screen bg-base-200">
                            <div className="lg:flex gap-4 items-center">
                                <div className='flex items-center justify-center'>
                                    <img src={image1} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                                </div>
                                <div className="space-y-2">
                                    <h1 className="text-sm font-bold">With Bkash Payment Online !</h1>
                                    <p className="text-base font-bold text-blue-600">Up to 14% Discount On The Base Fare Of Domestic Flights</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero min-h-screen bg-base-200">
                            <div className="lg:flex gap-4 items-center">
                                <div className='flex items-center justify-center'>
                                    <img src={image2} alt='' className="max-w-sm mb-4 md:mb-0 rounded-lg shadow-2xl" />
                                </div>
                                <div className="space-y-2">
                                    <h1 className="text-sm font-bold">With Bkash Payment Online !</h1>
                                    <p className="text-base font-bold text-blue-600">Up to 14% Discount On The Base Fare Of Domestic Flights</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero min-h-screen bg-base-200">
                            <div className="lg:flex gap-4 items-center">
                                <div className='flex items-center justify-center'>
                                    <img src={image3} className="max-w-sm mb-4 md:mb-0 rounded-lg shadow-2xl" alt='' />
                                </div>
                                <div className="space-y-2">
                                    <h1 className="text-sm font-bold">With Bkash Payment Online !</h1>
                                    <p className="text-base font-bold text-blue-600">Up to 14% Discount On The Base Fare Of Domestic Flights</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero min-h-screen bg-base-200">
                            <div className="lg:flex gap-4 items-center">
                                <div className='flex items-center justify-center'>
                                    <img src={image2} alt='' className="max-w-sm mb-4 md:mb-0 rounded-lg shadow-2xl" />
                                </div>
                                <div className="space-y-2">
                                    <h1 className="text-sm font-bold">With Bkash Payment Online !</h1>
                                    <p className="text-base font-bold text-blue-600">Up to 14% Discount On The Base Fare Of Domestic Flights</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div >
    );
};

export default DealsAndOffer;
