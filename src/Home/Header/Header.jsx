import '../Header/Header.css'
import { CiSearch } from "react-icons/ci";

export default function Header() {
    return (
        <div>
            <img className="md:h-[80vh] w-full object-cover md:mt-10" src="https://cdn.jetphotos.com/full/5/29568_1612180809.jpg" alt="Header background image" />
            {/* For Title and Filter section */}
            <div >
                <h1 className="text-xl text-white">Welcome To <span className="text-2xl font-bold text-[#257DE0]">AirBook</span></h1>
                {/* Filter Section */}
                <div className='flex justify-between items-center'>
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
                            <select className='text-[#257de0] bg-[#d4e6f7]' name="travel" id="travel">
                                <option value="Traveler">1 Traveler</option>
                                <option value="Coming soon">Coming soon</option>
                                <option value="Coming soon">Coming soon</option>
                                <option value="Coming soon">Coming soon</option>
                            </select>
                        </div>
                        <div className=' flex items-center gap-2 rounded-lg px-4 py-2'>
                            <select className='text-[#257de0] bg-[#d4e6f7]' name="travel" id="travel">
                                <option value="Economy">Economy</option>
                                <option value="Coming soon">Coming soon</option>
                                <option value="Coming soon">Coming soon</option>
                                <option value="Coming soon">Coming soon</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* Input fiend and serch section */}
                <div>
                    {/* first one */}
                    <div className="flex gap-4 p-4 bg-black text-white">
                        <h1>DAC</h1>
                        <div>
                            <h1>Dhaka</h1>
                            <p>hazrat shahjalal international</p>
                        </div>
                    </div>
                    {/* Secound one */}
                    <div className="flex gap-4 p-4 bg-black text-white">
                        <h1>Cxb's</h1>
                        <div>
                            <h1>Dhaka</h1>
                            <p>Cox's bazar international</p>
                        </div>
                    </div>
                    {/* Third one */}
                    <div className="flex gap-4 p-4 bg-black text-white">
                        <h1>03</h1>
                        <div>
                            <h1>Octobee</h1>
                            <p>Thesday, 2023</p>
                        </div>
                    </div>
                    {/* Four one */}
                    <div className="flex gap-4 p-4 bg-black text-white">
                        <h1>05</h1>
                        <div>
                            <h1>Octobee</h1>
                            <p>Thesday, 2023</p>
                        </div>
                    </div>
                    <div>
                        <button>
                            <CiSearch></CiSearch>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}