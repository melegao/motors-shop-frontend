import { ReactNode } from "react";
import { Button } from "./style";

type ButtonProps = {
  type: "button" | "reset" | "submit";
  children: ReactNode | string;
  onClick?: () => void;
  sizebutton?: "default" | "medium";
  colorbutton?: string;
};

export const ButtonBase = ({
  children,
  type,
  onClick,
  sizebutton,
  colorbutton,
}: ButtonProps) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      sizebutton={sizebutton}
      colorbutton={colorbutton}
    >
      {children}
    </Button>
  );
};
