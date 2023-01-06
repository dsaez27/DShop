import { useEffect } from "react";
import { useState } from "react";
import { Input, InputContainer, Label } from "./styled";

export const FloatingLabelTextInput = ({
    name,
    type,
    id,
    autoComplete,
    placeholder,
    required,
    value,
    onChange,
    onBlur,
}) => {
    const [filled, setFilled] = useState(false);

    useEffect(() => {
        if (value) {
            setFilled(true);
        } else {
            setFilled(false);
        }
    }, [value]);

    return (
        <InputContainer>
            <Input
                id={id}
                name={name}
                type={type}
                autoComplete={autoComplete}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                required={required}
                filled={filled}
            />
            <Label htmlFor={id}>{placeholder}</Label>
        </InputContainer>
    );
};
