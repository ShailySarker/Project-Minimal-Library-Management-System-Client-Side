import Lottie from "lottie-react";
import lazyLoaderAnimation from "../../BookLazyLoader.json";
const LazyLoader = () => {
    return (
        <div className="flex items-center justify-center h-auto">
            <div className='xl:w-[550px] lg:w-[450px] md:w-[420px] w-[350px]'>
                <Lottie loop={true} animationData={lazyLoaderAnimation} />
            </div>
        </div>
    );
};

export default LazyLoader;