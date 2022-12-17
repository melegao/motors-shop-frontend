import { ReactNode } from "react";
import { InputStyled, StyledDiv } from "./style";

interface InputProps {
  label?: string;
  children?: ReactNode | string;
  placeholder?: string;
  type?: string;
  register?: any;
  name?: string;
  error?: string;
  width: string;
}

export const InputBase = ({
  label,
  children,
  placeholder,
  type,
  register,
  name,
  error,
  width,
  ...rest
}: InputProps) => {
  return (
    <StyledDiv>
      <div>
        <label>
          <p>{label}</p>
        </label>
      </div>

      <InputStyled
        placeholder={placeholder}
        type={type}
        width={width}
        {...(register !== undefined && register(name))}
        {...rest}
      >
        {children}
      </InputStyled>

      {error !== undefined && (
        <div>
          <p>{error}</p>
        </div>
      )}
    </StyledDiv>
  );
};
