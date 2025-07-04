import { useNavigate } from "react-router";
import { useCreateBookMutation } from "../../redux/api/baseApi";
import Swal from "sweetalert2";

const AddBook = () => {
    // const [createBook, { data, isLoading, isError }] = useCreateBookMutation();
    // const navigate = useNavigate();

    const genres = ["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"];

    const [createBook, { data, isLoading, isError }] = useCreateBookMutation();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const title = formData.get("title")?.toString().trim();
        const author = formData.get("author")?.toString().trim();
        const genre = formData.get("genre")?.toString();
        const isbn = formData.get("isbn")?.toString().trim();
        const description = formData.get("description")?.toString().trim();
        const copies = Number(formData.get("copies"));


        if (
            !title || !author || !genre || genre === "Select Genre" ||
            !isbn || !description || isNaN(copies) || copies < 0
        ) {
            return alert("Please fill out all fields correctly. Copies must be 0 or greater.");
        }


        const bookData = {
            title,
            author,
            genre,
            isbn,
            description,
            copies,
            available: copies > 0,
        };


        try {
            await createBook(bookData).unwrap();
            Swal.fire({
                icon: "success",
                title: "Book added successfully!",
                showConfirmButton: false,
                timer: 1500
            });
            form.reset();
            navigate("/books");

        } catch (error: any) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `Error found: ${error?.data?.message}`,
                // text: "Something went wrong!",
            });
            console.error("Failed to add book", error?.data?.message);
        }
    };

    return (
        <div className="xl:px-20 lg:px-16 md:px-12 px-6 xl:mt-6 lg:mt-5 md:mt-4 mt-3 xl:mb-24 lg:mb-20 md:mb-16 mb-14">
            <div>
                <h1 className="xl:text-4xl/normal md:text-3xl/normal text-2xl/normal font-bold text-center text-black">Add New Book</h1>
            </div>

            <div className="xl:mt-14 lg:mt-12 md:mt-10 mt-8">
                <form
                    onSubmit={handleSubmit}
                    className="lg:w-[60%] md:w-[70%] w-full flex flex-col justify-center mx-auto gap-3 border-2 border-amber-700 rounded-2xl xl:p-14 lg:p-9 md:p-8 p-4 shadow-md bg-amber-100"
                >
                    <input
                        name="title"
                        placeholder="Title"
                        required
                        className="py-2 xl:px-4 px-3 rounded-xl border-2 border-amber-700 bg-white font-medium placeholder:text-gray-500"
                    />

                    <input
                        name="author"
                        placeholder="Author"
                        required
                        className="py-2 xl:px-4 px-3 rounded-xl border-2 border-amber-700 bg-white font-medium placeholder:text-gray-500"
                    />

                    <select
                        name="genre"
                        required
                        className="py-2 xl:px-4 px-3 rounded-xl border-2 border-amber-700 bg-white font-medium placeholder:text-gray-500 text-gray-500 placeholder:font-medium"
                    >
                        <option>Select Genre</option>
                        {genres?.map(genre => (
                            <option key={genre} value={genre}>{genre}</option>
                        ))}
                    </select>

                    <input
                        name="isbn"
                        placeholder="ISBN"
                        required
                        className="py-2 xl:px-4 px-3 rounded-xl border-2 border-amber-700 bg-white font-medium placeholder:text-gray-500"
                    />

                    <textarea
                        name="description"
                        placeholder="Description"
                        required
                        className="py-2 xl:px-4 px-3 rounded-xl border-2 border-amber-700 bg-white font-medium placeholder:text-gray-500"
                    />

                    <input
                        name="copies"
                        type="number"
                        min={0}
                        placeholder="Copies"
                        required
                        className="py-2 xl:px-4 px-3 rounded-xl border-2 border-amber-700 bg-white font-medium placeholder:text-gray-500"
                    />

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full bg-amber-700 text-white py-2 rounded-xl font-semibold xl:text-lg text-base mt-5 transition-colors duration-300 ${isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-amber-600"
                            }`}
                    >
                        {isLoading ? "Adding Book..." : "Add Book"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddBook;