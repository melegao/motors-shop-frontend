import styled from "styled-components";

export const ColorContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--grey5);
  .teste {
    height: 100vh;
  }
`;
export const LoginContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 10% auto;
  padding: 0.5rem;
  border-radius: 4px;

  @media (min-width: 500px) {
    margin: 5% auto;
    padding: 1rem;
  }

  @media (min-width: 900px) {
    max-width: 50%;
    max-width: 600px;
  }

  @media (min-width: 1300px) {
    margin: 3% auto;
    padding: 1rem;
    max-width: 700px;
  }
`;
