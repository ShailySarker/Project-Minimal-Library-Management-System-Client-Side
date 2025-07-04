import { useNavigate, useParams } from "react-router";
import { useGetBookByIdQuery, useUpdateBookMutation } from "../../redux/api/baseApi";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const EditBook = () => {
    const genres = ["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"];

    const { id } = useParams();
    const navigate = useNavigate();

    const { data: bookData, isLoading: isFetching, isError } = useGetBookByIdQuery(id);
    const [updateBook, { isLoading }] = useUpdateBookMutation();

    const [formState, setFormState] = useState({
        title: "",
        author: "",
        genre: "",
        isbn: "",
        description: "",
        copies: "" as string | number,
    });

    useEffect(() => {
        if (bookData?.data) {
            const book = bookData.data;
            setFormState({
                title: book.title,
                author: book.author,
                genre: book.genre,
                isbn: book.isbn,
                description: book.description || "",
                copies: book.copies,
            });
        }
    }, [bookData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormState(prev => ({
            ...prev,
            [name]: name === "copies" ? (value === "" ? "" : Number(value)) : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formState.title || !formState.author || !formState.genre || formState.genre === "Select Genre" || !formState.isbn || !formState.description || isNaN(Number(formState.copies)) || Number(formState.copies) < 0) {
            return Swal.fire("Validation Error", "Please fill all fields correctly.", "warning");
        }

        try {
            await updateBook({
                id,
                updatedData: {
                    ...formState,
                    available: formState.copies > 0,
                },
            }).unwrap();

            Swal.fire({
                icon: "success",
                title: "Book updated successfully!",
                showConfirmButton: false,
                timer: 1500,
            });

            navigate("/books");
        } catch (error: any) {
            Swal.fire("Error", error?.data?.message || "Update failed", "error");
        }
    };

    return (
        <div className="xl:px-20 lg:px-16 md:px-12 px-6 xl:mt-6 lg:mt-5 md:mt-4 mt-3 xl:mb-24 lg:mb-20 md:mb-16 mb-14">
            <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center">Update Book</h1>
            {
                isError ? (
                    <p className="xl:py-20 lg:py-16 md:py-14 py-12 xl:text-lg md:text-base text-sm font-semibold text-center">Something went wrong.</p>
                ) : isFetching ? (
                    <p className="xl:py-20 lg:py-16 md:py-14 py-12 xl:text-lg md:text-base text-sm font-semibold text-center">Loading book details...</p>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        className="lg:w-[60%] md:w-[70%] w-full flex flex-col justify-center mx-auto gap-3 border-2 border-amber-700 rounded-2xl xl:p-14 lg:p-9 md:p-8 p-4 shadow-md bg-amber-100 xl:mt-10 lg:mt-8 md:mt-7 mt-5"
                    >
                        <input
                            name="title"
                            value={formState.title}
                            onChange={handleChange}
                            placeholder="Title"
                            required
                            className="py-2 px-3 rounded-xl border-2 border-amber-700 bg-white font-medium placeholder:text-gray-500"
                        />

                        <input
                            name="author"
                            value={formState.author}
                            onChange={handleChange}
                            placeholder="Author"
                            required
                            className="py-2 px-3 rounded-xl border-2 border-amber-700 bg-white font-medium placeholder:text-gray-500"
                        />

                        <select
                            name="genre"
                            value={formState.genre}
                            onChange={handleChange}
                            required
                            className="py-2 px-3 rounded-xl border-2 border-amber-700 bg-white font-medium text-gray-700"
                        >
                            <option value="">Select Genre</option>
                            {genres.map(genre => (
                                <option key={genre} value={genre}>{genre}</option>
                            ))}
                        </select>

                        <input
                            name="isbn"
                            value={formState.isbn}
                            onChange={handleChange}
                            placeholder="ISBN"
                            required
                            className="py-2 px-3 rounded-xl border-2 border-amber-700 bg-white font-medium placeholder:text-gray-500"
                        />

                        <textarea
                            name="description"
                            value={formState.description}
                            onChange={handleChange}
                            placeholder="Description"
                            required
                            className="py-2 px-3 rounded-xl border-2 border-amber-700 bg-white font-medium placeholder:text-gray-500"
                        />

                        <input
                            name="copies"
                            type="number"
                            min={0}
                            value={formState.copies}
                            onChange={handleChange}
                            placeholder="Copies"
                            required
                            className="py-2 px-3 rounded-xl border-2 border-amber-700 bg-white font-medium placeholder:text-gray-500"
                        />

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full bg-amber-700 text-white py-2 rounded-xl font-semibold xl:text-lg text-base mt-5 transition-colors duration-300 ${isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-amber-600"}`}
                        >
                            {isLoading ? "Updating Book..." : "Update Book"}
                        </button>
                    </form>
                )
            }
        </div>
    );
};

export default EditBook;