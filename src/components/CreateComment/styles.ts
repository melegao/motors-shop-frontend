import styled from "styled-components";

export const Container = styled.form`
  background-color: var(--grey10);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  padding: 36px 28px;
  border-radius: 4px;
  height: 289px;

  header {
    display: flex;
    align-items: center;
    gap: 8px;

    .seller-photo {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--random10);
      width: 32px;
      height: 32px;
      border-radius: 50px;

      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 0px;
        color: #ffffff;
      }
    }
    h2 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: var(--grey-1);
    }
  }

  .text--comments {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    height: 128px;

    textarea {
      border: 1.5px solid #e9ecef;
      width: 100%;
      resize: none;
      padding: 16px;
      height: 90px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 26px;
    }
    button {
      width: 108px;
      height: 38px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 0px;
    }
  }

  .ready--comments {
    display: flex;
    gap: 8px;
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 24px;
      color: var(--grey3);

      background: var(--grey7);
      border-radius: 24px;

      padding: 0 12px;
      cursor: pointer;
    }
  }

  @media (min-width: 768px) {
    .text--comments {
      display: flex;
      flex-wrap: nowrap;
      border: 1.5px solid #e9ecef;
      align-items: flex-start;
      padding: 27px 11px 13px 28px;
      gap: 0px;

      textarea {
        padding: 0px;
        width: 100%;
        resize: none;
        border: none;
      }
      button {
        align-self: flex-end;
        width: 108px;
        height: 38px;
      }
    }
  }
`;
