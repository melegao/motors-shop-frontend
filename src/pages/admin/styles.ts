import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  background-color: var(--grey8);

  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  .auction {
    padding: 38px 12px;
    display: flex;
    flex-direction: column;
    gap: 37px;

    h3 {
      font-family: "Lexend", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
    }
  }

  .cars {
    padding: 38px 12px;
    display: flex;
    flex-direction: column;
    gap: 37px;

    h3 {
      font-family: "Lexend", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
    }
  }

  .motorcycles {
    padding: 38px 12px;
    display: flex;
    flex-direction: column;
    gap: 37px;

    h3 {
      font-family: "Lexend", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
    }
  }

  @media (min-width: 800px) {
    .auction {
      padding: 38px 60px;
      display: flex;
      flex-direction: column;
      gap: 37px;

      h3 {
        font-family: "Lexend", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 30px;
      }
    }

    .cars {
      padding: 38px 0 0 60px;
      display: flex;
      flex-direction: column;
      gap: 37px;

      h3 {
        font-family: "Lexend", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 30px;
      }
    }

    .motorcycles {
      padding: 38px 0 0 60px;
      display: flex;
      flex-direction: column;
      gap: 37px;
      

      h3 {
        font-family: "Lexend", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 30px;
      }
    }
  }
`;

export const BlueDiv = styled.div`
  background-color: var(--brand1);
  width: 100%;
  height: 15rem;

  position: absolute;
  top: 0px;
  left: 0px;
`;

export const UserDiv = styled.div`
  background-color: var(--grey8);
  width: 100%;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  .userInfo {
    z-index: 5;

    width: 85%;
    height: 23rem;

    margin-top: 4rem;
    padding: 2rem;

    background-color: var(--whiteFixed);

    border-radius: 4px;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    .photo {
      background-color: var(--brand1);

      border-radius: 50%;

      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 36px;
      padding: 2rem;
      font-weight: 500;
      color: var(--whiteFixed);
    }

    .nameTitle {
      font-size: 20px;
      color: var(--grey1);

      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0.5rem;

      span {
        background-color: var(--brand4);

        border-radius: 4px;

        color: var(--brand1);
        font-size: 14px;
        font-weight: 500;

        padding: 0.5rem;
      }
    }

    .description {
      color: var(--grey2);
      font-size: 16px;
      font-weight: 400;
    }

    .addVehicle {
      background-color: var(--grey10);

      border: 1px solid var(--brand1);
      border-radius: 4px;

      color: var(--brand1);
      font-size: 16px;
      font-weight: 600;

      width: 166px;

      padding: 12px 28px;
    }
  }
`;
