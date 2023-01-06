import Send from "@/assets/icons/send.png";
import {
    Button,
    Container,
    Desc,
    Input,
    InputContainer,
    Title,
} from "./styled";

const Newsletter = () => {
    return (
        <Container className="full__bleed">
            <Title>Newsletter</Title>
            <Desc>Find out about the latest news and promotions</Desc>
            <InputContainer>
                <Input placeholder="Your mail" />
                <Button type="submit">
                    <img src={Send} alt="Send" width="20px" />
                </Button>
            </InputContainer>
        </Container>
    );
};

export default Newsletter;
