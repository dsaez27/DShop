import { memo } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { tablet } from "../../utils/responsive";

const Wrapper = memo(() => {
    return (
        <Container>
            <Outlet />
        </Container>
    );
});

export default Wrapper;

const Container = styled.div`
    background-color: var(--quaternary-color);
    display: grid;
    grid-template-columns:
        1fr
        min(1200px, calc(100% - 2rem))
        1fr;
    grid-row-gap: 2rem;

    ${tablet({
        gridTemplateColumns: "1fr min(1200px, calc(100% - 2rem)) 1fr",
        gridColumnGap: "1rem",
    })}

    .full__bleed {
        width: 100%;
        grid-column: 1 / -1;
    }

    & > div {
        grid-column: 2;
    }
`;
