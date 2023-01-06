import { memo, useEffect, useState } from "react";
import { Container, SizeContainer, SizeItem, Title } from "./styled";

const Size = ({ sizes }) => {
    const [sizeSelected, setSizeSelected] = useState();

    useEffect(() => {
        //select first size
        setSizeSelected(sizes[0]);

        return () => {
            setSizeSelected(null);
        };
    }, [sizes]);

    return (
        <Container>
            <Title>Size:</Title>
            <SizeContainer>
                {sizes?.map((size) => (
                    <SizeItem
                        key={size}
                        onClick={() => setSizeSelected(size)}
                        selected={sizeSelected === size}
                    >
                        {size}
                    </SizeItem>
                ))}
            </SizeContainer>
        </Container>
    );
};

export default memo(Size);
