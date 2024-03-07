import '../Header/Header.css'
import { CiSearch } from "react-icons/ci";

export default function Header() {
    return (
        <div>
            <img className="relative md:h-[80vh] w-full object-cover md:mt-10" src="https://cdn.jetphotos.com/full/5/29568_1612180809.jpg" alt="Header background image" />
            {/* For Title and Filter section */}
            <div className='absolute md:-mt-80 md:ml-40'>
                <h1 className="text-xl md:text-3xl font-bold text-white">Welcome To <span className="md:text-2xl font-bold text-[#257DE0]">AirBook</span></h1>
                {/* Filter Section */}
                <div className='mt-2 md:mt-6 md:flex justify-between items-center bg-white px-6 py-4'>
                    <div className="flex">
                        <div className=' flex items-center gap-2 rounded-lg px-4 py-2'>
                            <input
                                type="checkbox"
                                className="rounded-checkbox"
                                id="checkbox"
                            />
                            <label>One Way</label>
                        </div>
                        <div className='bg-[#257de0] flex items-center gap-2 rounded-lg px-4 py-2'>
                            <input
                                type="checkbox"
                                className="rounded-checkboxnd"
                                id="checkbox"
                            />
                            <label className='text-white'>One Way</label>
                        </div>
                    </div>

                    {/* traveler and  economy drawdown*/}
                    <div className="flex">
                        <div className=' flex items-center gap-2 rounded-lg px-4 py-2'>
                            <select className='text-[#257de0] bg-[#d4e6f7] py-1 px-2 rounded-lg' name="travel" id="travel">
                                <option value="Traveler">1 Traveler</option>
                                <option value="Coming soon">Coming soon</option>
                                <option value="Coming soon">Coming soon</option>
                                <option value="Coming soon">Coming soon</option>
                            </select>
                        </div>
                        <div className=' flex items-center gap-2 rounded-lg px-4 py-2'>
                            <select className='text-[#257de0] bg-[#d4e6f7] py-1 px-2 rounded-lg'  name="travel" id="travel">
                                <option value="Economy">Economy</option>
                                <option value="Coming soon">Coming soon</option>
                                <option value="Coming soon">Coming soon</option>
                                <option value="Coming soon">Coming soon</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* Input fiend and serch section */}
                <div className='flex flex-wrap items-center justify-center w-full'>
                    {/* first one */}
                    <div className="flex px-1 py-1  md:px-6 md:py-4 gap-4 items-center border border-gray-400 bg-white text-black">
                        <h1 className='font-bold '>DAC</h1>
                        <div>
                            <h1 className='font-bold'>Dhaka</h1>
                            <p>hazrat shahjalal international</p>
                        </div>
                    </div>
                    {/* Secound one */}
                    <div className="flex px-6 py-4 gap-4 items-center border border-gray-400 bg-white text-black">
                        <h1 className='font-semibold md:font-bold'>Cxb's</h1>
                        <div>
                            <h1 className='font-semibold md:font-bold'>Dhaka</h1>
                            <p>Cox's bazar international</p>
                        </div>
                    </div>
                    {/* Third one */}
                    <div className="flex px-6 py-4 gap-4 items-center border border-gray-400 bg-white text-black">
                        <h1 className='font-semibold md:font-bold'>03</h1>
                        <div>
                            <h1 className='font-semibold md:font-bold'>Octobee</h1>
                            <p>Thesday, 2023</p>
                        </div>
                    </div>
                    {/* Four one */}
                    <div className="flex px-6 py-4 gap-4 items-center border border-gray-400 bg-white text-black">
                        <h1 className='font-semibold md:font-bold'>05</h1>
                        <div>
                            <h1 className='font-semibold md:font-bold'>Octobee</h1>
                            <p>Thesday, 2023</p>
                        </div>
                    </div>
                    <div>
                        <button className='bg-yellow-400 p-4 text-white'>
                            <CiSearch className='text-5xl'></CiSearch>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}