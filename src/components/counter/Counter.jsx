import { memo, useState } from "react";
import { Container, CounterContainer, Minus, Plus, Qty } from "./styled";

const Counter = ({ quantity }) => {
    const [count, setCount] = useState(1);

    const handleCounter = (op) => {
        if (op === "+" && count < quantity) {
            setCount(count + 1);
        }
        if (op === "-" && count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <Container>
            <CounterContainer>
                <Minus onClick={() => handleCounter("-")}>-</Minus>
                <Qty>{count}</Qty>
                <Plus onClick={() => handleCounter("+")}>+</Plus>
            </CounterContainer>
        </Container>
    );
};

export default memo(Counter);
