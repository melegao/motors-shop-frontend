import styled from "styled-components";

export const ContainerHeader = styled.div`
  .header-logo {
    cursor: pointer;
  }

  .text-decoration {
    a {
      font-family: Inter;
      font-weight: 600;
      font-size: 16px;
      line-height: 28px;

      color: var(--grey2);
    }
  }

  .login-area {
    span {
      display: flex;
      justify-content: center;
      align-items: center;

      background-color: var(--brand1);
      width: 40px;
      height: 40px;
      border-radius: 50%;

      color: var(--whiteFixed);
    }
  }

  @media (min-width: 800px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 60px;
    height: 80px;
    background-color: var(--grey10);
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    color: var(--grey2);

    h1 {
      font-family: "Inter", sans-serif;
    }

    .mobile-menu {
      display: none;
    }

    .header-menu {
      display: flex;
      align-items: center;
      height: 100%;
    }

    .header-menu-active {
      display: flex;
      align-items: center;
      height: 100%;
    }

    .login-area {
      display: flex;
      align-items: center;
      gap: 15px;
      padding-left: 44px;
      cursor: pointer;

      p {
        cursor: pointer;
      }
    }

    .logged-menu-disable {
      display: none;
    }

    .logged-menu {
      background-color: white;
      position: absolute;
      right: 0.5rem;
      top: 5rem;
      width: 14rem;

      display: flex;
      flex-direction: column;
      z-index: 40;

      ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0.6rem 0.6rem;
        gap: 1rem;
      }

      li {
        cursor: pointer;
      }
    }

    ul {
      display: flex;
      align-items: center;
      gap: 44px;
      padding-right: 44px;
      border-right: 1px solid var(--grey6);
      height: 100%;
    }
  }

  @media (max-width: 800px) {
    display: flex;
    justify-content: space-between;
    padding: 26px 16px;
    background-color: var(--grey10);
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    color: var(--grey2);

    .mobile-menu {
      cursor: pointer;
    }

    .mobile-menu div {
      width: 32px;
      height: 2px;
      background-color: #000;
      margin: 8px;
    }

    .header-menu {
      display: none;
    }

    .header-menu-active {
      z-index: 10;
      position: absolute;
      top: 12vh;
      right: 0;
      width: 100vw;
      background-color: var(--grey10);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;
      gap: 44px;
      padding-top: 32px;
      padding-bottom: 32px;
    }

    .header-menu-active ul {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 44px;
      padding-bottom: 44px;
      padding-left: 16px;
      border-bottom: 1px solid var(--grey6);
    }

    .login-area {
      display: flex;
      flex-direction: column;
      gap: 44px;
      padding-left: 16px;
    }
  }
`;
