import { Suspense } from "react";
import TitlePage from "@/components/TitlePage";
import { Cards, Container } from "./styled";
import Card from "@/components/cards/lastProducts/Card";
import { useLastProducts } from "@/hooks/useLastProducts";
import { LoadingIcon } from "@/shared/LoadingIcon";

export const LastProducts = () => {
    const { data: products } = useLastProducts();

    return (
        <Container>
            <TitlePage title={"Last Products"} position="left" />
            <Cards>
                <Suspense fallback={<LoadingIcon />}>
                    {products?.data.map((item) => (
                        <div key={item.id}>
                            <Card item={item} />
                        </div>
                    ))}
                </Suspense>
            </Cards>
        </Container>
    );
};
