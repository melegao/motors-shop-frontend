import styled from "styled-components";

export {};

export const Container = styled.div`
  background-color: var(--grey10);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  padding: 36px 28px;
  border-radius: 4px;

  h2 {
    color: var(--grey1);
    font-family: "Lexend", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
  }
`;
