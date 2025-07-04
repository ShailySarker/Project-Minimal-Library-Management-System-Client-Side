import Swal from "sweetalert2";

const Newsletter = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const email = formData.get("email")?.toString().trim();

        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !emailRegex.test(email)) {
            return Swal.fire({
                icon: "error",
                title: "Invalid Email",
                text: "Please enter a valid email address!",
            });
        }

        Swal.fire({
            icon: "success",
            title: "Submitted!",
            text: `Thank you! We'll get back to you at ${email}`,
        });

        form.reset();
    };

    return (
        <div className="lg:px-20 md:px-12 px-6 lg:mt-20 md:mt-16 mt-14 bg-amber-100 lg:py-12 md:py-8 py-6">
            <div>
                <h1 className="xl:text-4xl/normal md:text-3xl/normal text-2xl/normal font-bold text-center text-black">Get Newsletter</h1>
                <p className="text-center lg:w-[60%] md:w-[75%] w-[90%] mx-auto xl:text-xl lg:text-lg md:text-lg text-sm lg:mt-2 md:mt-[6px] mt-2 text-black">Stay ahead of the latest books and exclusive offers with our Book Hub Newsletter!</p>
            </div>
            <div className="lg:mt-16 md:mt-12 mt-8 flex justify-center">
                <form onSubmit={handleSubmit} className="shadow-lg rounded-xl flex">
                    <input
                        className="lg:py-3 md:py-[10px] py-2 lg:px-5 md:px-4 px-3 border-2 border-amber-700 rounded-l-xl bg-white lg:w-[400px] md:w-80 w-[224px]"
                        type="email"
                        name="email"
                        placeholder="Enter your email ..."
                        required
                    />
                    <button
                        className="lg:py-3 md:py-[10px] py-2 bg-gradient-to-r from-amber-600 to-amber-700 lg:w-36 md:w-32 w-[88px] rounded-r-xl md:text-lg text-white font-semibold md:border-0 border-r-2 border-y-2 border-amber-700"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;