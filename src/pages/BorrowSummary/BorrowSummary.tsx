import { useGetBorrowSummaryQuery } from "../../redux/api/baseApi";
import type { IBorrowSummary } from "../../types";

const BorrowSummary = () => {
    const { data, isLoading, isError } = useGetBorrowSummaryQuery(undefined, {
        pollingInterval: 30000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true
    });

    return (
        <div className="xl:px-20 lg:px-16 md:px-12 px-6 xl:mt-6 lg:mt-5 md:mt-4 mt-3 xl:mb-24 lg:mb-20 md:mb-16 mb-14">
            <h1 className="xl:text-4xl/normal md:text-3xl/normal text-2xl/normal font-bold text-center text-amber-700">📘 Borrow Summary</h1>
            {
                isError ? (
                    <p className="xl:py-20 lg:py-16 md:py-14 py-12 xl:text-lg md:text-base text-sm font-semibold text-center">Something went wrong.</p>
                ) : isLoading ? (
                    <p className="xl:py-20 lg:py-16 md:py-14 py-12 xl:text-lg md:text-base text-sm font-semibold text-center">Loading...</p>
                ) : (
                    data?.data?.length === 0 ? (
                        <p className="xl:py-20 lg:py-16 md:py-14 py-12 xl:text-lg md:text-base text-sm font-semibold text-center">No book found!</p>
                    ) : (
                        <div className="overflow-x-auto shadow rounded-xl border-2 border-amber-700 bg-amber-700 xl:mt-10 lg:mt-8 md:mt-7 mt-5">
                            <table className="md:w-full w-[620px] table-auto text-left text-sm text-gray-700">
                                <thead className="bg-amber-700 text-white md:text-base text-[15px] font-semibold">
                                    <tr>
                                        <th className="px-6 md:py-4 py-3 w-[10%]">#</th>
                                        <th className="px-6 md:py-4 py-3 w-[30%]">Book Title</th>
                                        <th className="px-6 md:py-4 py-3 w-[20%]">ISBN</th>
                                        <th className="px-6 md:py-4 py-3 w-[20%] text-center">Total Quantity Borrowed</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.data?.map((entry: IBorrowSummary, index: number) => (
                                        <tr key={index} className={`${index % 2 === 0 ? "bg-white" : "bg-amber-100"}`}>
                                            <td className="px-6 py-4 w-[10%] font-semibold">{index + 1}</td>
                                            <td className="px-6 py-4 w-[30%] font-semibold">{entry?.book?.title}</td>
                                            <td className="px-6 py-4 w-[20%] font-medium">{entry?.book?.isbn}</td>
                                            <td className="px-6 py-4 w-[20%] text-center font-bold text-gray-700">{entry?.totalQuantity}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )
                )
            }
        </div>
    );
};

export default BorrowSummary;