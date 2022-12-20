import { ReactNode } from "react";
import { Button } from "./style";

type ButtonProps = {
  type?: "button" | "reset" | "submit";
  children: ReactNode | string;
  onClick?: () => void;
  sizebutton?: "default" | "medium" | "login";
  colorbutton?: string;
  width?: string;
};

export const ButtonBase = ({
  children,
  type,
  onClick,
  sizebutton,
  colorbutton,
  width,
}: ButtonProps) => {
  return (
    <Button
      width={width}
      type={type}
      onClick={onClick}
      sizebutton={sizebutton}
      colorbutton={colorbutton}
    >
      {children}
    </Button>
  );
};
