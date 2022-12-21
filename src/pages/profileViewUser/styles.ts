import styled from "styled-components";


export const ProfileContainer = styled.div `

    position: relative;

    display: flex;
    flex-direction: column;
    background-color: var(--grey8);

    @media (max-width: 800px) {

        padding-left: 2rem;
        padding-bottom: 2rem;
        gap: 2rem;

        .background-blue {
            background-color: var(--brand1);
            width: 100%;
            height: 14rem;
            position: absolute;
            left: 0px;
            top: 0px;
            z-index: 0;
        }

        .userInfo {
            z-index: 5;
            margin-top: 4rem;
            margin-right: 2rem;
            padding: 2rem;
            background-color: var(--whiteFixed);
            border-radius: 4px;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .photo {
        background-color: var(--brand1);
        border-radius: 50%;
        width: 5rem;
        height: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 36px;
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

        .cars {
        padding: 10px 0px;
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
            padding: 10px 0px;
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

  @media (min-width: 800px) {

    padding-left: 2rem;
    padding-bottom: 2rem;
    gap: 2rem;

    .background-blue {
        background-color: var(--brand1);
        width: 100%;
        height: 14rem;
        position: absolute;
        left: 0px;
        top: 0px;
        z-index: 0;
    }

    .userInfo {
        z-index: 5;
        height: 18rem;
        margin-top: 4rem;
        margin-right: 5rem;
        margin-left: 3rem;
        padding: 2rem;
        background-color: var(--whiteFixed);
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .photo {
    background-color: var(--brand1);
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
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

    .cars {

        padding: 38px 0px 0px 60px;
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
        padding: 38px 0px 0px 60px;
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

`