import styled from "styled-components";

export const LiContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  min-width: 328px;
  width: 90%;

  position: relative;

  background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);

  .coverImage {
    position: absolute;
    width: 100%;

    opacity: 0.5;

    img {
      display: flex;
      align-items: center;
      width: 100%;

      margin-left: 0.6rem;
    }
  }

  .button {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem 2rem 1rem 1.5rem;

    background-color: var(--brand1);

    font-family: "Inter";
    font-size: 16px;
    font-weight: 600;

    color: var(--whiteFixed);

    cursor: pointer;

    span {
      svg {
        font-size: 25px;
      }
    }

    &:hover {
      background-color: var(--brand3);
    }
  }

  @media (min-width: 650px) {
    width: 735px;

    .coverImage {
      opacity: 0.4;

      img {
        max-width: 550px;
        margin: 0 auto;

        margin-bottom: 3rem;
      }
    }
  }
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  height: 435px;

  padding: 2.4rem 1.5rem 0 1.5rem;

  z-index: 5;

  .time {
    background-color: var(--whiteFixed);

    border-radius: 32px;

    display: flex;
    align-items: center;

    width: 123px;

    padding: 0.5rem;

    font-family: "Lexend";
    font-weight: 500;
    font-size: 16px;

    span {
      display: flex;
      align-items: center;

      margin-right: 0.7rem;

      svg {
        font-size: 20px;
        color: var(--brand1);
      }
    }
  }

  h2 {
    font-family: "Lexend";
    font-weight: 600;
    font-size: 20px;
    color: var(--grey10);
  }

  .description {
    font-family: "Inter";
    font-weight: 400;
    font-size: 16px;
    color: var(--grey5);
  }

  .owner {
    display: flex;
    align-items: center;
    gap: 1rem;

    font-family: "Inter";
    font-weight: 400;
    font-size: 14px;
    color: var(--whiteFixed);

    span {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 2rem;
      height: 2rem;

      border-radius: 50%;

      background-color: var(--brand1);
    }
  }

  .carInfo {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .carNumbers {
      display: flex;
      gap: 1rem;

      span {
        background-color: var(--brand4);
        border-radius: 4px;

        padding: 0.5rem;

        font-family: "Inter";
        font-weight: 500;
        font-size: 14px;
        color: var(--brand1);
      }
    }

    .price {
      margin-top: 0.5rem;

      font-family: "Lexend";
      font-weight: 500;
      font-size: 16px;
      color: var(--whiteFixed);
    }
  }

  @media (min-width: 650px) {
    height: 326px;

    gap: 0px;
    justify-content: space-around;

    padding: 0.5rem 3rem 0rem 2rem;

    .carInfo {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
