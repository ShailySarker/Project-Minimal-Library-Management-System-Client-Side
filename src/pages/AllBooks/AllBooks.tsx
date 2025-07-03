import { useState } from "react";
import { useDeleteBookMutation, useGetBooksQuery } from "../../redux/api/baseApi";
import { FaAngleLeft, FaAngleRight, FaAnglesLeft, FaBook } from "react-icons/fa6";
import type { IBook } from "../types";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

const genres = ["", "FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"];
const sortFields = ["createdAt", "title", "author"];

const AllBooks = () => {
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState("");
    const [sortBy, setSortBy] = useState("createdAt");
    const [sort, setSort] = useState<'asc' | 'desc'>("desc");

    const { data, isLoading, isError } = useGetBooksQuery({
        page, limit: 10, sort, sortBy, filter,
        pollingInterval: 30000, 
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true
    });
    const totalPages = data?.meta?.totalPages || 1;

    const [deleteBook] = useDeleteBookMutation();
    const navigate = useNavigate();
    const handleDelete = async (id: string) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await deleteBook(id);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    };

    return (
        <div className="xl:px-20 lg:px-16 md:px-12 px-6 xl:mt-6 lg:mt-5 md:mt-4 mt-3 xl:mb-24 lg:mb-20 md:mb-16 mb-14">
            <div>
                <h1 className="xl:text-4xl/normal md:text-3xl/normal text-2xl/normal font-bold text-center text-black">Lets Drive - World of Books</h1>
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
                                <div className="flex md:flex-row flex-col-reverse md:justify-between justify-center md:items-center items-end md:gap-0 gap-3 mb-6">
                                    {/* Filters */}
                                    <div className="flex flex-wrap xl:gap-4 gap-2">
                                        <select
                                            className="xl:w-44 w-[31%] px-2 xl:py-[10px] md:py-2 py-[7px] border-2 border-amber-700 text-black bg-white font-semibold rounded-xl"
                                            value={filter}
                                            onChange={(e) => {
                                                setFilter(e.target.value);
                                                setPage(1);
                                            }}
                                        >
                                            <option value="">All Genres</option>
                                            {genres?.map((g) => g && <option key={g} value={g}>{g}</option>)}
                                        </select>

                                        <select
                                            className="xl:w-44 w-[31%] px-2 xl:py-[10px] md:py-2 py-[7px] border-2 border-amber-700 text-black bg-white font-semibold rounded-xl"
                                            value={sortBy}
                                            onChange={(e) => {
                                                setSortBy(e.target.value);
                                                setPage(1);
                                            }}
                                        >
                                            {sortFields?.map((field) => (
                                                <option key={field} value={field}>{field}</option>
                                            ))}
                                        </select>

                                        <select
                                            className="xl:w-44 w-[31%] px-2 xl:py-[10px] md:py-2 py-[7px] border-2 border-amber-700 text-black bg-white font-semibold rounded-xl"
                                            value={sort}
                                            onChange={(e) => {
                                                setSort(e.target.value as 'asc' | 'desc');
                                                setPage(1);
                                            }}
                                        >
                                            <option value="desc">Descending</option>
                                            <option value="asc">Ascending</option>
                                        </select>
                                    </div>
                                    <Link to="/books" className="flex justify-center">
                                        <button className="xl:px-8 px-6 xl:py-[10px] md:py-2 py-[7px] bg-amber-700 text-white font-semibold rounded-xl hover:bg-amber-600 hover:rounded-4xl transition md:text-base text-sm flex items-center justify-center gap-2">Add Book <FaBook /></button>
                                    </Link>
                                </div>

                                {/* Book List */}
                                <div className="">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                                        {data?.data?.map((book: IBook) => (
                                            <div
                                                key={book?._id}
                                                className="border-2 border-amber-700 rounded-xl xl:p-4 lg:p-[14px] p-4 shadow-md bg-amber-100 flex flex-col justify-between gap-3"
                                            >
                                                <div className="space-y-1">
                                                    <h3 className="xl:text-xl md:text-lg font-bold text-amber-900">{book?.title}</h3>
                                                    <p className="text-black font-semibold mt-6">{book?.author}</p>
                                                    <p className="text-gray-600 text-sm italic font-medium">Genre: <span className="font-bold">{book?.genre}</span></p>
                                                    <p className="text-sm font-medium">
                                                        Available:{" "}
                                                        <span
                                                            className={`font-bold ${book?.available ? "text-green-600" : "text-yellow-500"
                                                                }`}
                                                        >
                                                            {book?.available ? "Yes" : "No"}
                                                        </span>
                                                    </p>
                                                </div>

                                                <div className="grid grid-cols-3 gap-2 font-bold xl:mt-5 mt-3">
                                                    <button onClick={() => navigate(`/books/${book?._id}`)} className="transition duration-300 py-1 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm xl:text-base">
                                                        View
                                                    </button>
                                                    <button onClick={() => navigate(`/edit-book/${book?._id}`)} className="transition duration-300 py-1 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-sm xl:text-base">
                                                        Edit
                                                    </button>
                                                    <button onClick={() => handleDelete(book?._id)} className="transition duration-300 py-1 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm xl:text-base">
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>

                                        ))}
                                    </div>

                                    {/* Pagination */}
                                    <div className="flex justify-center gap-4 xl:mt-10 lg:mt-8 md:mt-7 mt-6 items-center text-sm">
                                        <button
                                            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                                            disabled={page === 1}
                                        >
                                            <FaAngleLeft className="xl:w-10 lg:w-9 w-8 xl:h-10 lg:h-9 h-8 bg-amber-700 text-white p-2 rounded-full" />
                                        </button>

                                        <span className="px-3 py-1 font-semibold xl:text-lg text-base">
                                            Page {page} of {totalPages}
                                        </span>

                                        <button
                                            onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
                                            disabled={page === totalPages}
                                        >
                                            <FaAngleRight className="xl:w-10 lg:w-9 w-8 xl:h-10 lg:h-9 h-8 bg-amber-700 text-white p-2 rounded-full" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    )
                }

            </div>
        </div>
    );
};

export default AllBooks;