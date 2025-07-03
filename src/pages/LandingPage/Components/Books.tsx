import { useGetBooksQuery } from "../../../redux/api/baseApi";

const Books = () => {
    const {data} = useGetBooksQuery(undefined);
    console.log(data);
    return (
        <div className="xl:px-20 lg:px-16 md:px-12 px-6 xl:mt-20 lg:mt-16 md:mt-14 mt-10">
            <div>
                <h1 className="xl:text-4xl/normal md:text-3xl/normal text-2xl/normal font-bold text-center text-black">World of Books</h1>
                <p className="text-center lg:w-[60%] md:w-[75%] w-[90%] mx-auto xl:text-xl md:text-lg text-sm lg:mt-2 md:mt-[6px] mt-2 text-black">Explore endless stories, timeless knowledge, and the authors behind them.</p>
            </div>

            <div className="overflow-x-auto min-w-full l:mt-14 lg:mt-12 md:mt-10 mt-8">
                <table className="table border-2 w-full">
                    <thead className="min-w-full">
                        <tr className="text-sm py-3 text-[#0C1116] bg-[#EEEEEE] flex items-center justify-between min-w-full">
                            <th className='pl-2 font-semibold w-[15%] text-left'>Transaction ID</th>
                            <th className='pl-2 font-semibold w-[15%] text-left'>User</th>
                            <th className='pl-2 font-semibold w-[14%] text-left'>Date</th>
                            <th className='pl-2 font-semibold w-[15%] text-left'>Amount</th>
                            <th className='pl-2 font-semibold w-[16%] text-left'>Payment Method</th>
                            <th className='pl-2 font-semibold w-[14%] text-left'>Status</th>
                            <th className='pl-2 font-semibold w-[11%] text-left'>Action</th>
                        </tr>
                    </thead>
                    {
                        data === 1 &&
                        <tbody>
                            <tr className="py-2 border-t-2 border-[#E3EBF6] text-[#0C1116] flex items-center justify-between min-w-full">
                                <th className='pl-2 w-[15%] text-sm font-normal text-left'>TN457893561</th>
                                <th className='pl-2 w-[15%] text-sm font-normal text-left'>Aria Couture</th>
                                <th className='pl-2 w-[14%] text-sm font-normal text-left'>02/11/2024</th>
                                <th className='pl-2 w-[15%] text-sm font-normal text-left'>₹15,000.00</th>
                                <th className='pl-2 w-[16%] text-sm font-normal text-left'>Bank Transfer</th>
                                <th className='pl-2 w-[14%] text-sm font-medium text-left text-[#008000]'>Successful</th>
                                <th className='px-2 w-[11%] text-sm font-medium'>
                                    <Link to="/singleTransactionDetails">
                                        <button className="px-3 py-1 rounded-lg w-full bg-[#025195] text-[13px] text-white">View</button>
                                    </Link>
                                </th>
                            </tr>
                        </tbody>
                    }
                </table>

            </div>
        </div>
    );
};

export default Books;