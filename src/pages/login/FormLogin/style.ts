import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--whiteFixed);
  gap: 1.2rem;
  padding: 2rem 0rem;
  border-radius: 4px;

  .title--login {
    width: 50%;
    display: flex;
  }

  h1 {
    font-size: 1.5rem;
    padding: 1rem 0rem;
    font-family: "Lexend", sans-serif;
    background-color: var(--grey10);
  }

  .text--register {
    color: var(--grey2);
    font-size: 0.875rem;
    padding: 0.5rem 0rem;
  }
`;
