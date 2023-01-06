import { categories } from "@/utils/data";
import { useNavigate } from "react-router-dom";
import { Card, Container, Image, Info, Title } from "./styled";
import "react-lazy-load-image-component/src/effects/blur.css";

const Categories = () => {
    const navigate = useNavigate();

    return (
        <Container>
            {categories.map(({ id, img, title }) => (
                <Card key={id}>
                    <Image src={img} effect="blur" alt={title} title={title} />
                    <Info>
                        <Title onClick={() => navigate("/search?category=" + title)}>{title}</Title>
                    </Info>
                </Card>
            ))}
        </Container>
    );
};

export default Categories;
