import { useParams } from "react-router";
import { useGetBookByIdQuery } from "../../redux/api/baseApi";

const BookDetails = () => {
    const { id } = useParams();
    const { data: book, isLoading, isError } = useGetBookByIdQuery(id);

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
                        <div className="border-2 border-amber-700 rounded-xl xl:p-14 lg:p-10 md:p-8 p-4 shadow-md bg-amber-100 xl:space-y-3.5 space-y-3 ">
                            <h1 className="lg:text-2xl md:text-[22px] text-xl font-bold mb-6">{book?.data?.title}</h1>
                            <p className="xl:text-lg md:text-base text-sm font-medium"><strong>Author:</strong> {book?.data?.author}</p>
                            <p className="xl:text-lg md:text-base text-sm font-medium"><strong>Genre:</strong> {book?.data?.genre}</p>
                            <p className="xl:text-lg md:text-base text-sm font-medium"><strong>ISBN:</strong> {book?.data?.isbn}</p>
                            <p className="xl:text-lg md:text-base text-sm font-medium"><strong>Description:</strong> {book?.data?.description}</p>
                            <p className="xl:text-lg md:text-base text-sm font-medium"><strong>Copies:</strong> {book?.data?.copies}</p>
                            <p className="xl:text-lg md:text-base text-sm font-medium"><strong>Available:</strong> {book?.data?.available ? 'Yes' : 'No'}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};
export default BookDetails;