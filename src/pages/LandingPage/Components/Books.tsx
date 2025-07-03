import { Link } from "react-router";
import { useGetBooksQuery } from "../../../redux/api/baseApi";
import { FaBook } from "react-icons/fa6";
import type { IBook } from "../../types";

const Books = () => {
    const { data, isLoading, isError } = useGetBooksQuery(undefined);
    console.log(data);
    return (
        <div className="xl:px-20 lg:px-16 md:px-12 px-6 xl:mt-20 lg:mt-16 md:mt-14 mt-10">
            <div>
                <h1 className="xl:text-4xl/normal md:text-3xl/normal text-2xl/normal font-bold text-center text-black">World of Books</h1>
                <p className="text-center lg:w-[60%] md:w-[75%] w-[90%] mx-auto xl:text-xl md:text-lg text-sm lg:mt-2 md:mt-[6px] mt-2 text-black">Explore endless stories, timeless knowledge, and the authors behind them.</p>
            </div>

            <div className="xl:mt-14 lg:mt-12 md:mt-10 mt-8">
                {
                    isError ? (
                        <p className="xl:py-20 lg:py-16 md:py-14 py-12 xl:text-lg md:text-base text-sm font-semibold text-center">Something went wrong.</p>
                    ) : isLoading ? (
                        <p className="xl:py-20 lg:py-16 md:py-14 py-12 xl:text-lg md:text-base text-sm font-semibold text-center">Loading...</p>
                    ) : (
                        data?.data?.length === 0 ? (
                            <p className="xl:py-20 lg:py-16 md:py-14 py-12 xl:text-lg md:text-base text-sm font-semibold text-center">No book found!</p>
                        ) : (
                            <div>
                                <div className="w-full overflow-x-auto">
                                    <table className="table border-2 border-amber-700 md:min-w-full min-w-[500px]">
                                        <thead className="min-w-full">
                                            <tr className="xl:text-lg md:text-base text-[15px] py-3 bg-amber-700 text-white flex items-center justify-between min-w-full">
                                                <th className='pl-2 font-semibold w-[8%] text-left'>ID</th>
                                                <th className='pl-2 font-semibold lg:w-[32%] w-[37%] text-left'>Title</th>
                                                <th className='pl-2 font-semibold lg:w-[20%] w-[25%] text-left'>Author</th>
                                                <th className='pl-2 font-semibold w-[15%] text-left'>Genre</th>
                                                <th className='pl-2 font-semibold lg:w-[25%] w-[15%] text-left'>Actions</th>
                                            </tr>
                                        </thead >
                                        {
                                            data?.data
                                                ?.filter((book: IBook) => book?.available === true)
                                                ?.slice(-5)
                                                ?.map((book: IBook, index: number) =>
                                                    <tbody key={book?._id}>
                                                        <tr className={`py-2 border-t-2 border-amber-700 flex items-center justify-between min-w-full ${index % 2 === 0 ? 'bg-amber-100' : ''
                                                            }`}>
                                                            <th className='pl-2 w-[8%] xl:text-base text-sm font-bold text-left'>{index + 1}</th>
                                                            <th className='pl-2 lg:w-[32%] w-[37%] xl:text-base md:text-sm text-[13px] font-medium text-left'>{book?.title}</th>
                                                            <th className='pl-2 lg:w-[20%] w-[25%] xl:text-base md:text-sm text-[13px] font-medium text-left'>{book?.author}</th>
                                                            <th className='pl-2 w-[15%] xl:text-base md:text-sm text-[13px] font-medium text-left'>{book?.genre}</th>
                                                            <th className='px-2 lg:w-[25%] w-[15%] xl:text-base md:text-sm text-[13px] font-medium flex lg:flex-row flex-col items-center gap-2'>
                                                                <button className="transition-transform duration-500 transform hover:scale-105 px-3 py-1 rounded-lg w-full bg-green-500 xl:text-base text-sm text-white">View</button>
                                                                <button className="transition-transform duration-500 transform hover:scale-105 px-3 py-1 rounded-lg w-full bg-amber-500 xl:text-base text-sm text-white">Edit</button>
                                                                <button className="transition-transform duration-500 transform hover:scale-105 px-3 py-1 rounded-lg w-full bg-red-500 xl:text-base text-sm text-white">Delete</button>
                                                            </th>
                                                        </tr>
                                                    </tbody>
                                                )
                                        }
                                    </table >
                                </div >
                                <Link to="/books" className="flex justify-center xl:mt-12 lg:mt-10 md:mt-8 mt-6">
                                    <button className="xl:px-8 px-6 xl:py-[10px] md:py-2 py-[7px] bg-amber-700 text-white font-semibold rounded-xl hover:bg-amber-600 hover:rounded-4xl transition md:text-base text-sm flex items-center justify-center gap-2">Explore More <FaBook /></button>
                                </Link>
                            </div >
                        )
                    )
                }
            </div >
        </div >
    );
};

export default Books;
