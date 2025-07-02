import fictionBook from "../../../assets/images/LandingPage/Categories_fictionBook.png";
import nonfictionBook from "../../../assets/images/LandingPage/Categories_nonfictionBook.jpg";
import scienceBook from "../../../assets/images/LandingPage/Categories_scienceBook.png";
import historyBook from "../../../assets/images/LandingPage/Categories_historyBook.jpg";
import biographyBook from "../../../assets/images/LandingPage/Categories_biographyBook.jpg";
import fantasyBook from "../../../assets/images/LandingPage/Categories_fantasyBook.jpg";
const Categories = () => {
    return (
        <div className="xl:px-20 lg:px-16 md:px-12 px-6 xl:mt-20 lg:mt-16 md:mt-14 mt-10">
            <div>
                <h1 className="xl:text-4xl/normal md:text-3xl/normal text-2xl/normal font-bold text-center text-black">Categories of Books</h1>
                <p className="text-center lg:w-[60%] md:w-[75%] w-[90%] mx-auto xl:text-xl md:text-lg text-sm lg:mt-2 md:mt-[6px] mt-2 text-black">Dive into your favorite genres and discover something new in every category.</p>
            </div>
            <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 xl:gap-6 lg:gap-4 md:gap-5 gap-4 xl:mt-14 lg:mt-12 md:mt-10 mt-8">
                <div className="rounded-2xl relative transition-transform duration-500 transform hover:scale-105 shadow-lg">
                    <img src={fictionBook} alt="fictionBook" className="w-full h-auto rounded-2xl" />
                    <div className="rounded-2xl absolute inset-0 flex flex-col items-center justify-end md:pb-4 pb-3 lg:gap-6 md:gap-5 gap-4 bg-black/40">
                        <h2 className="text-white xl:text-xl lg:text-lg md:text-xl text-lg font-bold">FICTION</h2>
                    </div>
                </div>
                <div className="rounded-2xl relative transition-transform duration-500 transform hover:scale-105 shadow-lg">
                    <img src={nonfictionBook} alt="nonfictionBook" className="w-full h-auto rounded-2xl" />
                    <div className="rounded-2xl absolute inset-0 flex flex-col items-center justify-end md:pb-4 pb-3 lg:gap-6 md:gap-5 gap-4 bg-black/40">
                        <h2 className="text-white xl:text-xl lg:text-lg md:text-xl text-lg font-bold">NON-FICTION</h2>
                    </div>
                </div>
                <div className="rounded-2xl relative transition-transform duration-500 transform hover:scale-105 shadow-lg">
                    <img src={scienceBook} alt="scienceBook" className="w-full h-full rounded-2xl" />
                    <div className="rounded-2xl absolute inset-0 flex flex-col items-center justify-end md:pb-4 pb-3 lg:gap-6 md:gap-5 gap-4 bg-black/40">
                        <h2 className="text-white xl:text-xl lg:text-lg md:text-xl text-lg font-bold">SCIENCE</h2>
                    </div>
                </div>
                <div className="rounded-2xl relative transition-transform duration-500 transform hover:scale-105 shadow-lg">
                    <img src={historyBook} alt="historyBook" className="w-full h-full rounded-2xl" />
                    <div className="rounded-2xl absolute inset-0 flex flex-col items-center justify-end md:pb-4 pb-3 lg:gap-6 md:gap-5 gap-4 bg-black/40">
                        <h2 className="text-white xl:text-xl lg:text-lg md:text-xl text-lg font-bold">HISTORY</h2>
                    </div>
                </div>
                <div className="rounded-2xl relative transition-transform duration-500 transform hover:scale-105 shadow-lg">
                    <img src={biographyBook} alt="biographyBook" className="w-full h-full rounded-2xl" />
                    <div className="rounded-2xl absolute inset-0 flex flex-col items-center justify-end md:pb-4 pb-3 lg:gap-6 md:gap-5 gap-4 bg-black/40">
                        <h2 className="text-white xl:text-xl lg:text-lg md:text-xl text-lg font-bold">BIOGRAPHY</h2>
                    </div>
                </div>
                <div className="rounded-2xl relative transition-transform duration-500 transform hover:scale-105 shadow-lg">
                    <img src={fantasyBook} alt="fantasyBook" className="w-full h-full rounded-2xl" />
                    <div className="rounded-2xl absolute inset-0 flex flex-col items-center justify-end md:pb-4 pb-3 lg:gap-6 md:gap-5 gap-4 bg-black/40">
                        <h2 className="text-white xl:text-xl lg:text-lg md:text-xl text-lg font-bold">FANTASY</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;