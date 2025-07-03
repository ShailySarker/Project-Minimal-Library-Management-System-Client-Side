import { Link } from "react-router";
import coverPhoto from "../../../assets/images/LandingPage/Banner_coverPhoto.jpg";

const Banner = () => {
    return (
        <div className="relative">
            <img className="w-full md:h-auto h-[350px]" src={coverPhoto} alt="coverPhoto" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
                <h1 className="text-white xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold">Welcome to Book Hub</h1>
                <p className="md:w-full w-[70%] text-center text-white xl:text-xl lg:text-[17px] md:text-base text-sm xl:mt-3 lg:mt-2 mt-[6px] xl:mb-10 lg:mb-7 md:mb-6 mb-5">
                    Discover, borrow, and manage your favorite books all in one place.
                </p>
                <Link to="/books">
                    <button className="xl:px-8 px-6 xl:py-[10px] md:py-2 py-[7px] bg-white text-black font-semibold rounded-xl hover:bg-gray-200 hover:rounded-4xl transition md:text-base text-sm">
                        Explore Library
                    </button>
                </Link>
            </div>
        </div>

    );
};

export default Banner;