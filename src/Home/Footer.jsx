import LOgo from '../assets/logo/LOGO.png'
import FaceBookLOgo from '../assets/logo/Vector.png'
import YtLOgo from '../assets/logo/icon (1).png'
import INLOgo from '../assets/logo/Union.png'

const Footer = () => {
    return (
        <div className='bg-blue-600 text-white'>
            <footer className="flex p-20 md:h-[300px]">
                <nav className="flex-1">
                    <h6 className="footer-title">Adress</h6>
                    <ul>
                        <li>Hourse -75,ka <br /> main Rd, Dhaka 1216</li>
                        <li className="cursor-pointer mt-4">View On map</li>
                    </ul>
                </nav>
                <nav className="flex-1">
                    <h6 className="footer-title">Company</h6>
                    <ul>
                        <li>About us</li>
                        <li>Contact</li>
                        <li>Jobs</li>
                        <li>Press kit</li>
                    </ul>
                </nav>
                <nav className="flex-1">
                    <h6 className="footer-title">Legal</h6>
                    <ul>
                        <li>Terms of use</li>
                        <li>Privacy policy</li>
                        <li>Cookie policy</li>
                    </ul>
                </nav>
                <nav className="flex-1">
                    <h6 className="footer-title">Contact</h6>
                    <ul>
                        <li>+85413223</li>
                        <li>+681385431</li>
                        <li>AirBook@hotmail.com</li>
                    </ul>
                </nav>
            </footer>
            <hr className='bg-black' />
            <div className="flex md:h-[100px]">
                <div className='flex-1'>
                    <img className=' object-cover ' src={LOgo} alt="" />
                </div>
                {/* copywright */}
                <p className='flex-1 items-center flex'>Copyright AirBook</p>
                {/* icons */}
                <div className="flex gap-4 justify-center items-center flex-1">
                    <img className='h-6 w-6 cursor-pointer ' src={FaceBookLOgo} alt="" />
                    <img className='h-6 w-6 cursor-pointer ' src={YtLOgo} alt="" />
                    <img className='h-6 w-6 cursor-pointer ' src={INLOgo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;