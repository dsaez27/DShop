import TitlePage from "@/components/TitlePage";
import { useState } from "react";
import { Container, RangeContainer, RangeInput, RangeOutput } from "./styled";

const Range = ({ minPrice, maxPrice }) => {
    const [minValue, setMinValue] = useState(minPrice);
    const [maxValue, setMaxValue] = useState(maxPrice);

    return (
        <Container>
            <TitlePage>Range</TitlePage>
            <RangeContainer>
                <RangeOutput htmlFor="minRange">{minPrice}</RangeOutput>
                <RangeInput
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    step={1}
                    value={minValue}
                    id="minRange"
                    onChange={(e) => setMinValue(e.target.value)}
                />
                <RangeInput
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    step={1}
                    value={maxValue}
                    id="maxRange"
                    onChange={(e) => setMaxValue(e.target.value)}
                />
                <RangeOutput htmlFor="maxRange">{maxPrice}</RangeOutput>
            </RangeContainer>
        </Container>
    );
};
export default Range;
