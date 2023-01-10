import styled from "styled-components";

export const CommentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  .userInfo {
    display: flex;
    align-items: center;
    gap: 1rem;

    .sellerPhoto {
      background-color: var(--random10);
      color: var(--whiteFixed);

      display: flex;
      align-items: center;
      justify-content: center;

      width: 32px;
      height: 32px;

      border-radius: 50px;
    }

    .userName {
      font-family: Inter;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;

      color: var(--grey1);
    }

    .date {
      font-family: Inter;
      font-weight: 400;
      font-size: 12px;
      line-height: 24px;

      color: var(--grey3);
    }
  }

  .text {
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;

    color: var(--grey2);
  }
`;
