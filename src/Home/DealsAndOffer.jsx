import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';


import image1 from '../assets/slider1.png';
import image2 from '../assets/slider2.png';
import image3 from '../assets/slider3.png';

const DealsAndOffer = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold">Deals And Offers</h1>
            <div className='px-4 py-2'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="hero min-h-screen bg-base-200">
                            <div className="md:flex items-center">
                                <img src={image1} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                                <div>
                                    <h1 className="text-2xl font-bold">With Bkash Payment Online !</h1>
                                    <p className="font-bold text-blue-600">Up to 14% Discount On The Base Fare Of Domestic Flights</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero min-h-screen bg-base-200">
                            <div className="md:flex items-center">
                                <img src={image2} alt='' />
                                <div>
                                    <h1 className="text-2xl font-bold">With Bkash Payment Online !</h1>
                                    <p className="font-bold text-blue-600">Up to 14% Discount On The Base Fare Of Domestic Flights</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero min-h-screen bg-base-200">
                            <div className="md:flex items-center">
                                <img src={image3} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                                <div>
                                    <h1 className="text-2xl font-bold">With Bkash Payment Online !</h1>
                                    <p className="font-bold text-blue-600">Up to 14% Discount On The Base Fare Of Domestic Flights</p>
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