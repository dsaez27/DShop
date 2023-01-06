import Newsletter from "@/components/newsletter/Newsletter";
import Brands from "./brands/Brands";
import Categories from "./categories/Categories";
import Slider from "./slider/Slider";
import { LastProducts } from "./lastProducts/LastProducts";

const Home = () => {
    return (
        <>
            <Slider />
            <Categories />
            <LastProducts />
            <Brands />
            <Newsletter />
        </>
    );
};

export default Home;
