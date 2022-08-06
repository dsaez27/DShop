import React from "react";
import styled from "styled-components";
import { tablet } from "../helpers/responsive";

export const Menu = ({ open, setOpen }) => {
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Ul open={open} onClick={handleClick}>
        <li>Inicio</li>
        <li>Sobre mí</li>
        <li>Proyectos</li>
        <li>Skills</li>
        <li>Contacto</li>
      </Ul>
    </>
  );
};

const Ul = styled.ul`
  display: none;
  list-style: none;
  align-items: center;
  background-color: #fff;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  transition: all 0.6s ease-in;
  opacity: ${({ open }) => (open ? 1 : 0)};
  z-index: 999;
  ${tablet({ display: "flex" })}
`;

const Li = styled.li`
  padding: 1rem;

  transition: all 0.3s ease-in-out;

  &:hover {
    color: #fb4855;
    background-color: #000;
  }
`;
