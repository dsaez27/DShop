import React, { memo } from "react";
import styled from "styled-components";

export const Color = memo(({ color, setColor }) => {
  return (
    <>
      <FilterColor>
        {["red", "blue", "green", "yellow"].map((item, index) => (
          <div key={index}>
            <InputColor
              type="radio"
              name="color"
              id={item}
              color={item}
              onChange={() => setColor({ color: item })}
              {...(index === 0 && { defaultChecked: true })}
            />
            <ColorLabel htmlFor={item} color={item}>
              <span />
            </ColorLabel>
          </div>
        ))}
      </FilterColor>
    </>
  );
});

const FilterColor = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

const InputColor = styled.input`
  display: none;
  &:checked {
    + label {
      span {
        background-color: ${({ color }) => color};
        transform: scale(1.25);

        &:after {
          width: 10px;
          background: #fff;
          transition: width 150ms ease 100ms;
        }

        &:before {
          width: 5px;
          background: #fff;
          transition: width 150ms ease 100ms;
        }
      }

      &:hover {
        span {
          background-color: ${({ color }) => color};
          transform: scale(1.25);

          &:after {
            width: 10px;
            background: #fff;
            transition: width 150ms ease 100ms;
          }

          &:before {
            width: 5px;
            background: #fff;
            transition: width 150ms ease 100ms;
          }
        }
      }
    }
  }
`;

const ColorLabel = styled.label`
  span {
    display: flex;
    gap: 2px;
    background-color: ${({ color }) => color};
    width: 25px;
    height: 25px;

    border: 2px solid #fff;
    border-radius: 50%;
    transition: background-color 150ms 200ms,
      transform 350ms cubic-bezier(0.78, -1.22, 0.17, 1.89);

    &:before {
      content: "";
      width: 0px;
      height: 2px;
      border-radius: 2px;
      background: #fff;
      position: absolute;
      transform: rotate(45deg);
      top: 12px;
      left: 6.5px;
      transition: width 50ms ease 50ms;
      transform-origin: 0% 0%;
    }

    &:after {
      content: "";
      width: 0;
      height: 2px;
      border-radius: 2px;
      background: #fff;
      position: absolute;
      transform: rotate(305deg);
      top: 15px;
      left: 8px;
      transition: width 50ms ease;
      transform-origin: 0% 0%;
    }
  }

  &:hover {
    span {
      &:before {
        width: 5px;
        transition: width 100ms ease;
      }

      &:after {
        width: 10px;
        transition: width 150ms ease 100ms;
      }
    }
  }
`;
