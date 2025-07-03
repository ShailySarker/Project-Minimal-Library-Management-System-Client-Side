import { Link } from "react-router";
import banner from "../../assets/images/NotFound/NotFound_banner.jpg";
const NotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <img className="xl:w-[40%] lg:w-[35%] md:w-[50%] w-[70%]" src={banner} alt="banner" />
            <h3 className="xl:text-3xl lg:text-2xl md:text-[22px] text-xl font-medium text-black xl:mt-5 lg:mt-4 md:mt-5 mt-4">Something went wrong.</h3>
            <p className="text-black xl:text-lg md:text-base text-sm lg:mt-2 mt-[6px]">Sorry, We can’t find the page you’re looking for.</p>
            <Link to='/'>
                <button className="lg:text-lg md:text-base text-sm font-semibold text-white bg-amber-700 xl:px-8 px-6 xl:py-[10px] md:py-2 py-[7px] rounded-xl lg:mt-8 mt-6 shadow-md">Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;