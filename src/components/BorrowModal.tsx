import { useState } from "react";
import { useBorrowBookMutation } from "../redux/api/baseApi";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { FaX } from "react-icons/fa6";

const BorrowModal = ({ bookId, availableCopies, onClose }) => {
    const [quantity, setQuantity] = useState<string | number>("1");
    const [dueDate, setDueDate] = useState("");
    const [borrowBook, { isLoading }] = useBorrowBookMutation();
    const navigate = useNavigate();
    const today = new Date().toISOString().split("T")[0];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (quantity === "" || Number(quantity) < 1 || Number(quantity) > availableCopies) {
            Swal.fire("Oops!", "Quantity must be between 1 and available copies", "warning");
            return;
        }

        try {
            const borrowingInfo = {
                book: bookId,
                quantity: Number(quantity),
                dueDate,
            };
            console.log(borrowingInfo);
            await borrowBook(borrowingInfo).unwrap();

            Swal.fire("Success", "Book borrowed successfully!", "success");
            onClose();
            navigate("/borrow-summary");
        } catch (error: any) {
            Swal.fire("Error", error?.data?.message || "Something went wrong", "error");
            console.log(error);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
            <div className="mx-auto bg-white rounded-xl md:max-w-md w-[80%] md:p-6 p-5 shadow-lg relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3"
                >
                    <FaX className="text-3xl text-white p-2 rounded-full bg-amber-700 hover:bg-amber-600" />
                </button>
                <h2 className="xl:text-[25px] lg:text-2xl text-xl font-bold text-amber-700 lg:mt-1 lg:mb-8 mb-7 text-center">Borrow Book</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="quantity" className="text-black font-medium">Quantity of Books</label>
                        <input
                            type="number"
                            min={1}
                            max={availableCopies}
                            value={quantity}
                            onChange={(e) => {
                                const val = e.target.value;
                                if (val === "") {
                                    setQuantity("");
                                } else if (!isNaN(Number(val))) {
                                    setQuantity(Number(val));
                                }
                            }}
                            placeholder="Quantity"
                            className="shadow-md px-3 md:py-2 py-[6px] rounded-xl border-2 border-amber-700"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="dueDate" className="text-black font-medium">Due Date</label>
                        <input
                            type="date"
                            min={today}
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                            className="shadow-md px-3 md:py-2 py-[6px] rounded-xl border-2 border-amber-700"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="shadow-md bg-amber-700 hover:bg-amber-600 text-white font-semibold xl:text-lg text-base rounded-xl hover:rounded-4xl px-4 md:py-2 py-[6px] mt-5 "
                    >
                        {isLoading ? "Processing..." : "Confirm Borrow"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BorrowModal;
