import image1 from '../assets/BlogsImage/Rectangle1.png'
import image2 from '../assets/BlogsImage/Rectangle2.png'
import image3 from '../assets/BlogsImage/Rectangle3.png'

const Featured = () => {
    return (
        <div className='mt-[480px] md:mt-0 md:px-10'>
            <h1 className='text-xl md:text-3xl font-bold px-6'>Featured destination</h1>
            <div className="md:flex justify-center">
                {/* first card */}
                <div className="card rounded-lg p-6 bg-base-100 shadow-xl mx-4 my-4">
                    <figure className="px-10 pt-10">
                        <img src={image1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-base md:text-xl font-bold text-black">Stopover opportunity in Istanbul With Turkish Airlines</h2>
                        <button className='bg-yellow-500 text-black px-10 py-2 rounded-lg font-bold'>View More</button>
                    </div>
                </div>
                {/* Secound Card */}
                <div className="card rounded-lg p-6 bg-base-100 shadow-xl mx-4 my-4">
                    <figure className="px-10 pt-10">
                        <img src={image2} alt='' />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-base md:text-xl font-bold text-black">Discover The Timeless City With Touristanbul Of Turkish Airlines</h2>
                        <button className='bg-yellow-500 text-black px-10 py-2 rounded-lg font-bold'>View More</button>
                    </div>
                </div>
                {/* third Card */}
                <div className="card rounded-lg p-6 bg-base-100 shadow-xl mx-4 my-4">
                    <figure className="px-10 pt-10">
                        <img src={image3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-base md:text-xl font-bold text-black">The Best Of Abu Dhabi With Exclusive Etihad Airways!</h2>
                        <button className='bg-yellow-500 text-black px-10 py-2 rounded-lg font-bold'>View More</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Featured;