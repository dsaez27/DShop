import { memo } from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Buttom, Container, Email, Hr, Left, Right, Top, User } from "./styled";
import { logout } from "@/features/user/userSlice";

export const Dropdown = ({ isOpen, user }) => {
    const dispatch = useDispatch();

    return ReactDom.createPortal(
        <Container isOpen={isOpen}>
            <Top>
                <Left>
                    <img src={user.photoUrl} alt="user" loading="lazy" />
                </Left>
                <Right>
                    <User>
                        <Link to="/profile" title="Profile">
                            {user?.firstname} {user?.lastname}
                        </Link>
                    </User>
                    <Email>{user?.email}</Email>
                </Right>
            </Top>
            <Hr />
            <Buttom
                onClick={() => {
                    dispatch(logout());
                }}
            >
                Logout
            </Buttom>
        </Container>,
        document.getElementById("portal")
    );
};
