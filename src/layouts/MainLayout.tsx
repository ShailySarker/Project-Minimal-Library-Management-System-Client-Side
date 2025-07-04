import { Outlet, useLocation } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

const MainLayout = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayout;