import styled from "styled-components";

interface InputProps {
  width: string;
}

export const InputStyled = styled.input<InputProps>`
  width: ${(props) => props.width};
  padding: 0.6rem;
  background-color: var(--whiteFixed);
  color: var(--grey-0);
  border: 0.1rem solid var(--grey8);
  border-radius: 0.2rem;

  &:hover {
    background-color: var(--grey8);
    border: 0.1rem solid var(--grey8);
  }

  &:focus {
    outline: 0.1rem solid var(--brand2);
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 20px;
  width: 100%;
  gap: 0.5rem;

  div {
    width: 90%;
    display: flex;
    align-items: flex-start;
  }

  div > label > p {
    font-size: 0.875rem;
  }

  div > p {
    font-size: 0.875rem;
    color: var(--alert1);
  }
`;
