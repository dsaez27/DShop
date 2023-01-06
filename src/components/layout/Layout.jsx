import { Outlet } from "react-router-dom";
import Announcement from "../announcement/Announcement";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Wrapper from "./Wrapper";

const Layout = () => {
    return (
        <>
            <Announcement />
            <Navbar />
            <Wrapper>
                <Outlet />
            </Wrapper>
            <Footer />
        </>
    );
};

export default Layout;
