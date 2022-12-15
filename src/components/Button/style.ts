import styled, { css } from "styled-components";

interface ButtonProps {
  sizebutton?: string;
  colorbutton?: string;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 600;
  font-family: "Inter", sans-serif;

  ${(props) => {
    switch (props.colorbutton) {
      case "Grey":
        return css`
          color: #ffffff;
          background-color: ${(props) => props.theme.colors.grey0};
          border: 1px solid ${(props) => props.theme.colors.grey0};

          &:hover {
            background-color: ${(props) => props.theme.colors.grey1};
            border: 1px solid #${(props) => props.theme.colors.grey1};
          }
        `;

      case "Negative":
        return css``;

      case "Disable":
        return css``;

      case "Brand":
        return css``;

      case "BrandOpacity":
        return css``;

      case "Light":
        return css``;

      case "OutlineBrand":
        return css``;

      case "Alert":
        return css``;

      case "Sucess":
        return css``;

      case "BrandDisable":
        return css``;

      default:
        return false;
    }
  }}
  ${(props) => {
    switch (props.sizebutton) {
      case "medium":
        return css`
          font-size: 0.875rem;
          padding: 0.25rem 0.7rem;
        `;

      default:
        return css`
          padding: 0.35rem 1rem;
          font-size: 1rem;
        `;
    }
  }};
`;
