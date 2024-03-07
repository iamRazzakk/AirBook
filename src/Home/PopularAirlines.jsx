import { CiStar } from "react-icons/ci";
import BBA from '../assets/Icons/BBA.png'
import american from '../assets/Icons/american.png'
import Emirates from '../assets/Icons/Emirates.png'
import Malaysia1 from '../assets/Icons/Malaysia-1.png'
import Malaysia from '../assets/Icons/Malaysia.png'
import Singapore from '../assets/Icons/Singapore Airlines.png'
import Turkish from '../assets/Icons/Turkish Airlines.png'
const PopularAirlines = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold">Popular Airlines</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* BBA */}
                <div className="flex">
                    <img className="w-12 h-12 rounded-full" src={BBA} alt="BBA" />
                    <div>
                        <h3 className="text-base font-bold">Biman Bangladesh Airlines</h3>
                        <div className="flex items-center">
                            <CiStar className=" w-4 h-4 rounded-full text-yellow-600 text-2xl"></CiStar>
                            <p>0.1</p>
                            <p>(783 Review)</p>
                        </div>
                    </div>
                </div>
                {/* American */}
                <div className="flex">
                    <img className="w-12 h-12 rounded-full" src={american} alt="BBA" />
                    <div>
                        <h3 className="text-base font-bold">American Airlines</h3>
                        <div className="flex items-center">
                            <CiStar className=" w-4 h-4 rounded-full text-yellow-600 text-2xl"></CiStar>
                            <p>5</p>
                            <p>(783 Review)</p>
                        </div>
                    </div>
                </div>
                {/* Emirates */}
                <div className="flex">
                    <img className="w-12 h-12 rounded-full" src={Emirates} alt="BBA" />
                    <div>
                        <h3 className="text-base font-bold">Emirates Airlines</h3>
                        <div className="flex items-center">
                            <CiStar className=" w-4 h-4 rounded-full text-yellow-600 text-2xl"></CiStar>
                            <p>5</p>
                            <p>(783 Review)</p>
                        </div>
                    </div>
                </div>
                {/* Malaysia1 */}
                <div className="flex">
                    <img className="w-12 h-12 rounded-full" src={Malaysia1} alt="BBA" />
                    <div>
                        <h3 className="text-base font-bold">Malaysia1 Airlines</h3>
                        <div className="flex items-center">
                            <CiStar className=" w-4 h-4 rounded-full text-yellow-600 text-2xl"></CiStar>
                            <p>4</p>
                            <p>(783 Review)</p>
                        </div>
                    </div>
                </div>
                {/* Malaysia */}
                <div className="flex">
                    <img className="w-12 h-12 rounded-full" src={Malaysia} alt="BBA" />
                    <div>
                        <h3 className="text-base font-bold">Malaysia1 Airlines</h3>
                        <div className="flex items-center">
                            <CiStar className=" w-4 h-4 rounded-full text-yellow-600 text-2xl"></CiStar>
                            <p>5</p>
                            <p>(783 Review)</p>
                        </div>
                    </div>
                </div>
                {/* Singapore */}
                <div className="flex">
                    <img className="w-12 h-12 rounded-full" src={Singapore} alt="BBA" />
                    <div>
                        <h3 className="text-base font-bold">Singapore Airlines</h3>
                        <div className="flex items-center">
                            <CiStar className=" w-4 h-4 rounded-full text-yellow-600 text-2xl"></CiStar>
                            <p>4</p>
                            <p>(783 Review)</p>
                        </div>
                    </div>
                </div>
                {/* Turkish */}
                <div className="flex">
                    <img className="w-12 h-12 rounded-full" src={Turkish} alt="BBA" />
                    <div>
                        <h3 className="text-base font-bold">Turkish Airlines</h3>
                        <div className="flex items-center justify-center">
                            <CiStar className=" w-4 h-4 rounded-full text-yellow-600 text-2xl"></CiStar>
                            <p>5</p>
                            <p>(783 Review)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularAirlines;