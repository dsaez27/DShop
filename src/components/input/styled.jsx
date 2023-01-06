import styled from "styled-components";

const InputContainer = styled.div`
    width: 100%;
    position: relative;
`;

const Label = styled.label`
    position: absolute;
    left: 12px;
    top: 0.5rem;
    transition: all 0.3s;
    padding: 0 2px;
    color: #b3b3b3;
    font-size: 14px;
`;

const Input = styled.input`
    padding: 0 0.8rem;
    width: 100%;
    height: 2rem;
    border: 1px solid lightgray;
    border-radius: 10px;
    outline: none;
    transition: all 0.3s;
    background-color: transparent;
    
    &:focus {
        border: 2px solid teal;
    }

    &::placeholder {
        font-size: 14px;
        opacity: 0;
        transition: all 0.3s;
    }

    &:focus + label,
    &:valid + label {
        ${({ filled }) =>
            filled &&
            `top: -0.5rem; font-size: 13px; background: #fff; padding: 0 5px; border-radius: 5px;`}
    }
`;

export { InputContainer, Label, Input };
