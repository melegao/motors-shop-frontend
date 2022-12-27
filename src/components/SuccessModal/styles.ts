import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  z-index: 1001;
  position: fixed;
  inset: 0;

  .success--modal {
    max-width: 347px;
    @media (max-width: 320px) {
      height: 320px;
    }
    width: 95%;
    height: 287px;
    background-color: var(--whiteFixed);
    position: absolute;

    border-radius: 8px;
    inset: 0;
    margin: 1rem auto;
    animation: fadeInModalChat 1s ease-in-out backwards;

    padding: 16px 24px;

    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 58px;
    margin-top: 95px;
    section {
      display: flex;
      flex-wrap: wrap;
      align-content: space-between;
      gap: 18px;
      h2 {
        font-family: "Lexend";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
      }
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        color: var(--grey2);
      }
      button {
        height: 38px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 0px;
      }
    }
  }

  @keyframes fadeInModalChat {
    from {
      opacity: 0;
      transform: translateY(-30%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    /* margin: 24 auto; */

    h2 {
      font-family: "Lexend";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 0px;
    }

    svg {
      font-size: 24px;
      color: var(--grey4);
      cursor: pointer;

      &:hover {
        color: var(--grey3);
      }
    }
  }

  @media (min-width: 768px) {
    .success--modal {
      max-width: 520px;
    }
  }
`;
