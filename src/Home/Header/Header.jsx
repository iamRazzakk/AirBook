import '../Header/Header.css';
import { CiSearch } from "react-icons/ci";
import HeroImg from '../../assets/hero.png'
export default function Header() {
    return (
        <div>
            <img className="relative min-h-screen lg:h-[80vh] w-full object-cover lg:mt-10" src={HeroImg} alt="Header background image" />
            {/* For Title and Filter section */}
            <div className='absolute -mt-[500px] lg:-mt-96  lg:ml-40 md:-mt-36 md:ml-0'>
                <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-white ">Welcome To <span className="font-bold text-[#257DE0]">AirBook</span></h1>
                <div className='md:bg-white lg:mt-10 px-2 md:py-3 rounded-lg p-6'>
                    <div className=' rounded-t-lg   flex flex-col md:flex-row gap-6 justify-between lg:w-[1120px] md:bg-white px-4 md:py-4'>
                        <div className="flex  items-center px-4 md:py-2">
                            <div className=' flex items-center gap-2 rounded-lg px-4 py-2'>
                                <input
                                    type="checkbox"
                                    className="rounded-checkbox "
                                    id="checkbox"
                                />
                                <label>One Way</label>
                            </div>
                            <div className='bg-[#257de0] flex items-center md:gap-2 rounded-lg px-4 py-2'>
                                <input
                                    type="checkbox"
                                    className="rounded-checkboxnd"
                                    id="checkbox"
                                />
                                <label className='text-white'>One Way</label>
                            </div>
                        </div>

                        {/* traveler and  economy drawdown*/}
                        <div className="flex ">
                            <div className=' flex items-center md:gap-2 rounded-lg px-4 py-2'>
                                <select className='text-[#257de0] md:bg-[#d4e6f7] py-1 px-2 rounded-lg' name="travel" id="travel">
                                    <option value="Traveler">1 Traveler</option>
                                    <option value="Coming soon">Coming soon</option>
                                    <option value="Coming soon">Coming soon</option>
                                    <option value="Coming soon">Coming soon</option>
                                </select>
                            </div>
                            <div className=' flex items-center gap-2 rounded-lg px-4 py-2'>
                                <select className='text-[#257de0] md:bg-[#d4e6f7] py-1 px-2 rounded-lg' name="travel" id="travel">
                                    <option value="Economy">Economy</option>
                                    <option value="Coming soon">Coming soon</option>
                                    <option value="Coming soon">Coming soon</option>
                                    <option value="Coming soon">Coming soon</option>
                                </select>
                            </div>
                        </div>
                    </div>



                    {/* Filter Section */}

                    <div className=' p-2 flex items-center flex-wrap justify-around gap-3 lg:w-[1120px] '>
                        {/* first one */}
                        <div className="flex  px-1 py-1   gap-4 items-center border border-gray-200 rounded-lg md:bg-white text-white lg:text-black justify-between lg:px-4 lg:py-4">
                            <h1 className='font-bold '>DAC</h1>
                            <div>
                                <h1 className='font-bold'>Dhaka</h1>
                                <p>hazrat shahjalal international</p>
                            </div>
                        </div>
                        {/* Second one */}
                        <div className="flex lg:px-4 lg:py-4  gap-4 items-center border border-gray-200 rounded-lg text-white md:bg-white md:text-black">
                            <h1 className='font-semibold lg:font-bold'>Cxb's</h1>
                            <div>
                                <h1 className='font-semibold lg:font-bold'>Dhaka</h1>
                                <p>Cox's bazar international</p>
                            </div>
                        </div>
                        {/* Third one */}
                        <div className="flex lg:px-4 lg:py-4 gap-4 items-center border border-gray-200 rounded-lg text-white md:bg-white md:text-black">
                            <h1 className='font-semibold lg:font-bold'>03</h1>
                            <div>
                                <h1 className='font-semibold lg:font-bold'>October</h1>
                                <p>Tuesday, 2023</p>
                            </div>
                        </div>
                        {/* Fourth one */}
                        <div className="flex lg:px-4 lg:py-4 gap-4 items-center border border-gray-200 rounded-lg text-white md:bg-white md:text-black">
                            <h1 className='font-semibold lg:font-bold'>05</h1>
                            <div>
                                <h1 className='font-semibold lg:font-bold'>October</h1>
                                <p>Thursday, 2023</p>
                            </div>
                        </div>
                        <div>
                            <button className='bg-yellow-400 rounded-lg p-4 text-white'>
                                <CiSearch className='text-2xl md:text-3xl lg:text-4xl '></CiSearch>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Input field and search section */}
            </div>
        </div>
    )
}