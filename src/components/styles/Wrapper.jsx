import React from "react";
import styled from "styled-components";
import { tablet } from "../../helpers/responsive";

export const Wrapper = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
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

  * {
    grid-column: 2;
  }

  .full__bleed {
    width: 100%;
    grid-column: 1 / -1;
  }
`;
