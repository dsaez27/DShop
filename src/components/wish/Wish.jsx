import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, HeartButton } from "./styled";
import { addWish, removeWish } from "@/features/wishlist/wishlistSlice";

const Wish = ({ id }) => {
    const dispatch = useDispatch();
    const [active, setActive] = useState(false);
    const wishes = useSelector((state) => state.wishlist.wishes);

    useEffect(() => {
        const check = wishes.find((wish) => wish === (id || _id));
        !!check && setActive(true);
    }, [wishes]);

    const handleClick = () => {
        !active ? dispatch(addWish(id)) : dispatch(removeWish(id));
        setActive(!active);
    };

    return (
        <Container>
            <HeartButton
                isActive={active}
                inactiveColor="#555"
                onClick={handleClick}
            />
        </Container>
    );
};

export default memo(Wish);
