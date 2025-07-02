import moment from "moment";
import { FaBook, FaDiscord, FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router";
import { useNotify } from "../hooks/useNotify";

const Footer = () => {
    return (
        <div>
            <div className=" bg-[#A21D3C] text-white xl:py-12 md:py-8 py-6 lg:flex lg:flex-row lg:justify-between grid md:grid-cols-2 grid-cols-1 lg:gap-0 md:gap-x-24 md:gap-y-14 gap-6 xl:px-14 lg:px-12 md:px-7 px-5">
                <div className="flex flex-col md:items-start items-center xl:w-[22%] lg:w-[25%]">
                    <Link to="/" className="text-white flex items-center xl:gap-3 gap-2">
                        <FaBook className="xl:text-4xl lg:text-3xl md:text-[29px] text-2xl" />
                        <p className="xl:text-2xl lg:text-xl md:text-lg text-[17px] font-bold">Book Hub</p>
                    </Link>
                    <div className="xl:mt-6 md:mt-5 mt-4">
                        <p className="xl:text-[15px] lg:text-[13px] text-sm/normal font-medium">Book Hub will allow users to view a list of books, perform CRUD operations, borrow books, and view a simple borrow summary—all without authentication, category filters, or payment integration..</p>
                    </div>
                </div>
                <div>
                    <h2 className="xl:text-2xl lg:text-xl md:text-lg text-[17px] font-bold">Quick Links</h2>
                    <div className="flex md:gap-20 gap-28 xl:mt-7 md:mt-5 mt-3">
                        <div className="flex flex-col xl:gap-3 md:gap-2 gap-[6px] xl:text-[17px] lg:text-[15px] md:text-base text-sm font-medium">
                            <Link to="/books"><ul>All Books</ul></Link>
                            <ul onClick={useNotify}>About Us</ul>
                            <ul onClick={useNotify}>Contact Us</ul>
                            <ul onClick={useNotify}>Help</ul>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="xl:text-2xl lg:text-xl md:text-lg text-[17px] font-bold">Reach Us</h2>
                    <div className="flex flex-col xl:gap-3 md:gap-2 gap-[6px] xl:text-[17px] lg:text-[15px] md:text-base text-sm xl:mt-7 md:mt-5 mt-3 font-medium">
                        <p className="flex items-center gap-2"><FaEnvelope />contact@bookhub.com</p>
                        <p className="flex items-center gap-2"><FaPhone /> +880 0000000000</p>
                        <p></p>
                    </div>
                    <div className="xl:mt-6 md:mt-4 mt-3 flex xl:gap-7 md:gap-6 gap-5">
                        <FaFacebook onClick={useNotify} className="xl:text-2xl text-xl" />
                        <FaInstagram onClick={useNotify} className="xl:text-2xl text-xl" />
                        <FaDiscord onClick={useNotify} className="xl:text-2xl text-xl" />
                        <FaYoutube onClick={useNotify} className="xl:text-2xl text-xl" />
                    </div>
                </div>
                <div>
                    <h2 className="xl:text-2xl lg:text-xl md:text-lg text-[17px] font-bold">Legal</h2>
                    <div className="flex flex-col xl:gap-3 md:gap-2 gap-[6px] xl:text-[17px] lg:text-[15px] md:text-base text-sm xl:mt-7 md:mt-5 mt-3 font-medium">
                        <ul onClick={useNotify} className="">Terms & Conditions</ul>
                        <ul onClick={useNotify} className="">Privacy Policy</ul>
                        <ul onClick={useNotify} className="">Cancellation & Refund Policy</ul>
                    </div>
                </div>
            </div>
            <div className='bg-black xl:py-4 md:py-3 py-2'>
                <p className='font-medium text-[#FFFFFF] text-center xl:text-base md:text-sm text-[13px] flex items-center gap-1 justify-center'>© <span>{moment().format('YYYY')}</span><span className='font-bold flex items-center gap-1'><FaBook />Book Hub</span>. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;