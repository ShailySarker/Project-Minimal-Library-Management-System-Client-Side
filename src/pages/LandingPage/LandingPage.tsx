import Authors from "./Components/Authors";
import Banner from "./Components/Banner";
import Categories from "./Components/Categories";
import WhyChooseUs from "./Components/WhyChooseUs";

const LandingPage = () => {
    return (
        <>
            <Banner />
            <Categories />
            {/* <Authors /> */}
            <WhyChooseUs/>
        </>
    );
};

export default LandingPage;