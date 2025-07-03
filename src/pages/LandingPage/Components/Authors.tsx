import author1 from "../../../assets/images/LandingPage/Authors_stephenPhoto.jpg";
import author2 from "../../../assets/images/LandingPage/Authors_georgePhoto.jpg";
import author3 from "../../../assets/images/LandingPage//Authors_harperPhoto.jpg";
import author4 from "../../../assets/images/LandingPage/Authors_richardPhoto.jpg";
import author5 from "../../../assets/images/LandingPage/Authors_yuvalPhoto.jpg";

const authorData = [
    {
        id: 1,
        name: "Stephen Hawking",
        photo: author1,
    },
    {
        id: 2,
        name: "George Orwell",
        photo: author2,
    },
    {
        id: 3,
        name: "Harper Lee",
        photo: author3,
    },
    {
        id: 4,
        name: "Richard Dawkins",
        photo: author4,
    },
    {
        id: 5,
        name: "Yuval Noah Harari",
        photo: author5,
    },
]
const Authors = () => {
    return (
        <div className="xl:px-20 lg:px-16 md:px-12 px-6 xl:mt-20 lg:mt-16 md:mt-14 mt-10">
            <div>
                <h1 className="xl:text-4xl/normal md:text-3xl/normal text-2xl/normal font-bold text-center text-black">Famous Authors</h1>
                <p className="text-center lg:w-[60%] md:w-[75%] w-[90%] mx-auto xl:text-xl md:text-lg text-sm lg:mt-2 md:mt-[6px] mt-2 text-black">Discover the minds behind your favorite author books</p>
            </div>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 xl:gap-6 lg:gap-4 md:gap-5 gap-4 xl:mt-14 lg:mt-12 md:mt-10 mt-8">
                {
                    authorData?.map(author => (
                        <div key={author?.id} className="flex flex-col xl:gap-8 lg:gap-6 md:gap-5 gap-4 justify-center items-center border-2 border-amber-700 bg-amber-100 rounded-xl shadow-md xl:px-4 lg:px-3 px-2 xl:py-6 lg:py-5 md:py-4 py-3">
                            <img className="rounded-full xl:h-40 xl:w-40 md:h-32 md:w-32 w-28 h-28 transition-transform duration-500 transform hover:scale-105" src={author?.photo} alt={author?.name} />
                            <h3 className="xl:text-xl lg:text-[17px] md:text-lg text-base font-semibold">{author?.name}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Authors;