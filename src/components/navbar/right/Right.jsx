import { useComponentVisible } from "@/hooks/useComponentVisible";
import { useSelector } from "react-redux";
import HeartIcon from "@/assets/icons/heart.png";
import CartIcon from "@/assets/icons/cart.png";
import SearchIcon from "@/assets/icons/search.png";

import {
    Container,
    Account,
    Login,
    Cart,
    Heart,
    ProfileImage,
    Search,
} from "./styled";
import { Dropdown } from "@/components/portals/dropdown/Dropdown";
import { getAuth, getUser } from "@/features/user/userSlice";

const Right = () => {
    const { ref, isComponentVisible, setIsComponentVisible } =
        useComponentVisible();

    const items = [];
    const { userInfo } = useSelector(getUser);
    const auth = useSelector(getAuth);

    return (
        <Container>
            <Search to="/search">
                <img src={SearchIcon} alt="search" />
            </Search>
            {auth ? (
                <>
                    <Account ref={ref}>
                        <ProfileImage
                            src={userInfo.photoUrl}
                            alt="user"
                            onClick={() =>
                                setIsComponentVisible(!isComponentVisible)
                            }
                        />
                        <Dropdown isOpen={isComponentVisible} user={userInfo} />
                    </Account>
                    <Heart to="/wishlist">
                        <img src={HeartIcon} loading="lazy" alt="heart" />
                    </Heart>
                </>
            ) : (
                <Login to="/login">Login/Register</Login>
            )}
            <Cart to="/cart" data-cart-count={items?.length}>
                <img src={CartIcon} alt="cart" />
            </Cart>
        </Container>
    );
};

export default Right;
