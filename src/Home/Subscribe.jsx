import SubscribeImg from '../assets/Isolation_Mode.png'
const Subscribe = () => {
    return (
        <div className="md:flex md:mt-32 mt-6">
            <div className="flex-1">
                <img className='p-14' src={SubscribeImg} alt="" />
            </div>
            <div className="flex-1 p-14">
                <h1 className="font-bold md:text-3xl lg:text-5xl">
                    Subscribe To Our Newsletter!
                </h1>
                <h3 className='md:text-xl lg:text-2xl mt-3 mb-3 text-blue-600'>
                    Subscribe To Our Newsletter And Stay <br /> Updated.
                </h3>
                <input className='px-6 py-4 border border-blue-600 text-blue-600 rounded-xl w-3/4' type="search" name="" placeholder="Your Email" id="" />
                <br />
                <button className='px-6 py-4 border bg-yellow-500 mt-4 rounded-xl w-3/4'>Subscribe</button>
            </div>
        </div>
    );
};

export default Subscribe;