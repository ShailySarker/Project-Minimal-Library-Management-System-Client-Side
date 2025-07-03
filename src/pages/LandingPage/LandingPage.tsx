import Authors from "./Components/Authors";
import Banner from "./Components/Banner";
import Books from "./Components/Books";
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
            <Books/>
            <WhyChooseUs />
            <Newsletter />
            <FAQs/>
        </>
    );
};

export default LandingPage;