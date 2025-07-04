import { useNavigate, useParams } from "react-router";
import { useDeleteBookMutation, useGetBookByIdQuery } from "../../redux/api/baseApi";
import Swal from "sweetalert2";

const BookDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: book, isLoading, isError } = useGetBookByIdQuery(id);
    const [deleteBook] = useDeleteBookMutation();

    // delete work
    const handleDelete = async (id: string) => {
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
                navigate("/books");
            }
        });
    };

    // 

    return (
        <div className="xl:px-20 lg:px-16 md:px-12 px-6 xl:mt-6 lg:mt-5 md:mt-4 mt-3 xl:mb-24 lg:mb-20 md:mb-16 mb-14">
            <div>
                <h1 className="xl:text-4xl/normal md:text-3xl/normal text-2xl/normal font-bold text-center text-black">Book - <span className="text-amber-700 italic">{book?.data?.title}</span></h1>
            </div>
            <div className="xl:mt-14 lg:mt-12 md:mt-10 mt-8">
                {
                    isError ? (
                        <p className="xl:py-20 lg:py-16 md:py-14 py-12 xl:text-lg md:text-base text-sm font-semibold text-center">Something went wrong.</p>
                    ) : isLoading ? (
                        <p className="xl:py-20 lg:py-16 md:py-14 py-12 xl:text-lg md:text-base text-sm font-semibold text-center">Loading book details...</p>
                    ) : (
                        <div className="border-2 border-amber-700 rounded-xl xl:p-14 lg:p-9 md:p-8 p-4 shadow-md bg-amber-100 xl:space-y-3.5 space-y-3 ">
                            <h1 className="lg:text-2xl md:text-[22px] text-xl font-bold mb-6">{book?.data?.title}</h1>
                            <p className="xl:text-lg md:text-base text-sm font-medium"><strong>Author:</strong> {book?.data?.author}</p>
                            <p className="xl:text-lg md:text-base text-sm font-medium"><strong>Genre:</strong> {book?.data?.genre}</p>
                            <p className="xl:text-lg md:text-base text-sm font-medium"><strong>ISBN:</strong> {book?.data?.isbn}</p>
                            <p className="xl:text-lg md:text-base text-sm font-medium"><strong>Description:</strong> {book?.data?.description}</p>
                            <p className="xl:text-lg md:text-base text-sm font-medium"><strong>Copies:</strong> {book?.data?.copies}</p>
                            <p className="xl:text-lg md:text-base text-sm font-medium"><strong>Available:</strong> {book?.data?.available ? 'Yes' : 'No'}</p>
                            <div className="flex lg:gap-3 gap-2 justify-center xl:mt-14 lg:mt-10 md:mt-8 mt-7 font-semibold">
                                <button onClick={() => navigate(`/books/${book?.data?._id}`)} className={`transition duration-300 xl:px-8 px-6 xl:py-[10px] md:py-2 py-[7px] rounded-xl hover:rounded-4x text-white text-sm xl:text-base ${book?.data?.available ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"}`}>
                                    Borrow
                                </button>
                                <button onClick={() => navigate(`/edit-book/${book?.data?._id}`)} className="transition duration-300 xl:px-8 px-6 xl:py-[10px] md:py-2 py-[7px] rounded-xl hover:rounded-4xl bg-amber-500 hover:bg-amber-600 text-white text-sm xl:text-base ">
                                    Edit
                                </button>
                                <button onClick={() => handleDelete(book?.data?._id)} className="transition duration-300 xl:px-8 px-6 xl:py-[10px] md:py-2 py-[7px] rounded-xl hover:rounded-4xl bg-red-500 hover:bg-red-600 text-white text-sm xl:text-base ">
                                    Delete
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};
export default BookDetails;