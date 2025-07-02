import Authors from "./Components/Authors";
import Banner from "./Components/Banner";
import Categories from "./Components/Categories";
import FAQs from "./Components/FAQ";
import Newsletter from "./Components/Newsletter";
import WhyChooseUs from "./Components/WhyChooseUs";

const LandingPage = () => {
    return (
        <>
            <Banner />
            <Categories />
            {/* <Authors /> */}
            <WhyChooseUs />
            <Newsletter />
            <FAQs/>
        </>
    );
};

export default LandingPage;