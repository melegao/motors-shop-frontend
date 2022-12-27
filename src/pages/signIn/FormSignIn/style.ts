import styled from "styled-components";

export const StyledForm = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--whiteFixed);
  gap: 1.2rem;
  padding: 2rem 0rem;
  border-radius: 4px;

  .title--signIn,
  .subTitle {
    width: 70%;
    display: flex;
  }
  input,
  .label--input,
  .label--error {
    width: 70%;
  }
  input {
    color: var(--random13);
  }

  h1 {
    font-size: 1.5rem;
    padding: 1rem 0rem;
    font-family: "Lexend", sans-serif;
    background-color: var(--grey10);
  }
  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    text-align: left;
  }

  button {
    width: 70%;
    height: 48px;
  }

  .button--box {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 11px;
    .label--error {
      font-size: 0.875rem;
      color: var(--alert1);
      font-style: italic;
    }
  }

  .button--box > button {
    width: 34%;
  }

  .text--register {
    color: var(--grey2);
    font-size: 0.875rem;
    padding: 0.5rem 0rem;
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    width: 70%;

    label {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--black);
    }

    textarea {
      border: 0.12rem solid var(--grey7);
      resize: none;
      font-family: "Inter";
      font-size: 16px;
      padding: 0.6rem;
      height: 5rem;

      &:hover {
        background-color: var(--grey8);
        border: 0.1rem solid var(--grey8);
      }

      &:focus {
        outline: 0.1rem solid var(--brand2);
      }

      &::placeholder {
        font-size: 16px;
        font-family: "Inter";
        font-weight: 400;
        color: var(--grey3);
      }
    }

    .label--error > label > p {
      font-size: 0.875rem;
      color: var(--alert1);
      font-style: italic;
    }
  }

  @media (max-width: 425px) {
    width: 90%;
    .button--box > button {
      width: 32%;
      font-size: 14px;
    }
  }
`;
