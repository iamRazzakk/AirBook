
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import image from '../assets/Avater/Rectangle11.png'
import image1 from '../assets/Avater/Rectangle22.png'
import image2 from '../assets/Avater/Rectangle33.png'
const Testimonials = () => {

    return (

        <div className='mt-10 md:mt-32 md:px-10'>
            <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className='md:flex'>
                    <img className='rounded-xl h-96 w-40 object-cover flex-1' src={image} alt="" />
                    <div className='p-10'>
                        <h1>Unforgettable journeys with john And Sarah! Their Travel Expentise Turned Our Dreams Into Reality.<br /> Can't Wait To Explore With Them Again</h1>
                        <h2 className='text-xl mt-4 md:mt-10 font-bold'>Emily</h2>
                        <p className='mt-4 md:mt-8'>Adventure Enthusiast</p>
                        <div className='flex items-center'>
                            <img className="w-4 h-4" src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /><img className="w-4 h-4" src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /><img className="w-4 h-4" src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /><img className="w-4 h-4" src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='md:flex'>
                    <img className='rounded-xl h-96 w-40 object-cover flex-1' src={image1} alt="" />
                    <div className='p-10'>
                        <h1>Unforgettable journeys with john And Sarah! Their Travel Expentise Turned Our Dreams Into Reality.<br /> Can't Wait To Explore With Them Again</h1>
                        <h2 className='text-xl mt-4 md:mt-10 font-bold'>Emily</h2>
                        <p className='mt-4 md:mt-8'>Adventure Enthusiast</p>
                        <div className='flex items-center'>
                            <img className="w-4 h-4" src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /><img className="w-4 h-4" src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /><img className="w-4 h-4" src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /><img className="w-4 h-4" src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='md:flex'>
                    <img className='rounded-xl h-96 w-40 object-cover flex-1' src={image2} alt="" />
                    <div className='p-10'>
                        <h1>Unforgettable journeys with john And Sarah! Their Travel Expentise Turned Our Dreams Into Reality.<br /> Can't Wait To Explore With Them Again</h1>
                        <h2 className='text-xl mt-4 md:mt-10 font-bold'>Emily</h2>
                        <p className='mt-4 md:mt-8'>Adventure Enthusiast</p>
                        <div className='flex items-center'>
                            <img className="w-4 h-4" src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /><img className="w-4 h-4" src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /><img className="w-4 h-4" src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /><img className="w-4 h-4" src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
        </div>
    );
};

export default Testimonials;