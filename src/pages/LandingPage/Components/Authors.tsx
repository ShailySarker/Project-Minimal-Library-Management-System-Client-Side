import React from 'react';

const Authors = () => {
    return (
        <div className="xl:px-20 lg:px-16 md:px-12 px-6 xl:mt-20 lg:mt-16 md:mt-14 mt-10">
            <div>
                <h1 className="xl:text-4xl/normal md:text-3xl/normal text-2xl/normal font-bold text-center text-black">Famous Authors</h1>
                <p className="text-center lg:w-[60%] md:w-[75%] w-[90%] mx-auto xl:text-xl md:text-lg text-sm lg:mt-2 md:mt-[6px] mt-2 text-black">Discover the minds behind your favorite author books</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 xl:gap-6 lg:gap-4 md:gap-5 gap-4 xl:mt-14 lg:mt-12 md:mt-10 mt-8">

            </div>
        </div>
    );
};

export default Authors;