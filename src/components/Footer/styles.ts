import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: var(--grey0);

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #ffffff;
  }

  .div-up-button {
    width: 53px;
    height: 50px;
    background: #212529;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .icon-up {
    font-weight: 900;
    font-size: 16px;
    line-height: 18px;
    color: #ffffff;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 45px 0px;
    gap: 45px;
  }

  @media (min-width: 800px) {
    display: flex;
    padding: 45px 59px;
    justify-content: space-between;
    align-items: center;
  }
`;
