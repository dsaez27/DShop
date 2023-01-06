import { useState } from "react";

const CollapsibleList = ({ children }) => {
    const [visible, setVisible] = useState(false);

    return (
        <Container>
            <Detail open={visible}>
                <Title onClick={() => setVisible(!visible)}>
                    <span>Detail</span>
                    <span>{visible ? "-" : "+"}</span>
                </Title>
                <Content>{children}</Content>
            </Detail>
        </Container>
    );
};
export default CollapsibleList;
