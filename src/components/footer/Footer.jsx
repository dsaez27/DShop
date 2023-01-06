import { LazyLoadImage } from "react-lazy-load-image-component";
import Facebook from "@/assets/icons/facebook.png";
import Instagram from "@/assets/icons/instagram.png";
import Twitter from "@/assets/icons/twitter.png";
import Placeholder from "@/assets/icons/placeholder.png";
import Telephone from "@/assets/icons/telephone.png";
import Mail from "@/assets/icons/mail.png";
import PaymentLogos from "@/assets/icons/payment.png";
import { usefulLinks } from "@/utils/data";
import {
    Center,
    ContactItem,
    Container,
    Content,
    Desc,
    Left,
    Li,
    List,
    ListItem,
    Logo,
    Payment,
    Right,
    SocialContainer,
    SocialIcon,
} from "./styled";
import "react-lazy-load-image-component/src/effects/blur.css";

const Footer = () => {
    return (
        <Container>
            <Content>
                <Left>
                    <Logo to="/">DS</Logo>
                    <Desc>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable.
                    </Desc>
                    <SocialContainer>
                        <SocialIcon color="0D8AF0">
                            <LazyLoadImage
                                src={Facebook}
                                loading="lazy"
                                alt="Facebook"
                                width="16px"
                                effect="blur"
                            />
                        </SocialIcon>
                        <SocialIcon color="C72560">
                            <LazyLoadImage
                                src={Instagram}
                                loading="lazy"
                                alt="Instagram"
                                width="16px"
                                effect="blur"
                            />
                        </SocialIcon>
                        <SocialIcon color="00ACEE">
                            <LazyLoadImage
                                src={Twitter}
                                alt="Twitter"
                                width="16px"
                                effect="blur"
                            />
                        </SocialIcon>
                    </SocialContainer>
                </Left>
                <Center>
                    <h3>Useful Links</h3>
                    <List>
                        {usefulLinks.map((item) => (
                            <ListItem key={item.id}>
                                <Li to={item.route}>{item.name}</Li>
                            </ListItem>
                        ))}
                    </List>
                </Center>
                <Right>
                    <h3>Contact</h3>
                    <ContactItem>
                        <img src={Placeholder} alt="Placeholder" />
                        <span>Arauco 2407, El Salvador, Chile</span>
                    </ContactItem>
                    <ContactItem>
                        <img src={Telephone} alt="Telephone" />
                        <span>+56 9 45178244</span>
                    </ContactItem>
                    <ContactItem>
                        <img src={Mail} alt="Mail" />
                        <span>dssh24@gmail.com</span>
                    </ContactItem>
                    <Payment src={PaymentLogos} title="payment" />
                </Right>
            </Content>
        </Container>
    );
};

export default Footer;
