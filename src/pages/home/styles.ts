import styled from "styled-components";

export const HomeContainer = styled.div`

    position: relative;


    @media (max-width: 800px) {

        .div-initial-information{
            background-color: var(--brand2);
            height: 36rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0px 17.5px;
            gap: 52px;


            h2 {
                font-family: 'Lexend', sans-serif;
                font-style: normal;
                font-weight: 600;
                font-size: 32px;
                line-height: 40px;
                text-align: center;
                color: var(--grey10);
            }

            h3 {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 28px;
                text-align: center;
                color: var(--grey9)
            }

            div {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 21px;
                width: 100%;
            }
        }

        .div-leilao{

            padding: 38px 12px;
            display: flex;
            flex-direction: column;
            gap: 37px;


            h3 {
                font-family: 'Lexend', sans-serif;
                font-style: normal;
                font-weight: 600;
                font-size: 24px;
                line-height: 30px;
            }
        }

        .div-leilao{

            padding: 38px 12px;
            display: flex;
            flex-direction: column;
            gap: 37px;


            h3 {
                font-family: 'Lexend', sans-serif;
                font-style: normal;
                font-weight: 600;
                font-size: 24px;
                line-height: 30px;
            }
        }

        .div-carros{

            padding: 38px 12px;
            display: flex;
            flex-direction: column;
            gap: 37px;


            h3 {
                font-family: 'Lexend', sans-serif;
                font-style: normal;
                font-weight: 600;
                font-size: 24px;
                line-height: 30px;
            }
        }

        .div-motos{

            padding: 38px 12px;
            display: flex;
            flex-direction: column;
            gap: 37px;


            h3 {
                font-family: 'Lexend', sans-serif;
                font-style: normal;
                font-weight: 600;
                font-size: 24px;
                line-height: 30px;
            }
        }
        
    }

    @media (min-width: 800px) {

        .div-initial-information{
            background-color: var(--brand2);
            height: 30rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0px 17.5px;
            gap: 52px;


            h2 {
                font-family: 'Lexend', sans-serif;
                font-style: normal;
                font-weight: 600;
                font-size: 32px;
                line-height: 40px;
                text-align: center;
                color: var(--grey10);
            }

            h3 {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 28px;
                text-align: center;
                color: var(--grey9)
            }

            div {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                gap: 21px;
                width: 100%;
            }
                    
        }

        .div-leilao{

            padding: 38px 60px;
            display: flex;
            flex-direction: column;
            gap: 37px;


            h3 {
                font-family: 'Lexend', sans-serif;
                font-style: normal;
                font-weight: 600;
                font-size: 24px;
                line-height: 30px;
            }
        }

        .div-carros{

            padding: 38px 0px 0px 60px;
            display: flex;
            flex-direction: column;
            gap: 37px;


            h3 {
                font-family: 'Lexend', sans-serif;
                font-style: normal;
                font-weight: 600;
                font-size: 24px;
                line-height: 30px;
            }
        }

        .div-motos{

            padding: 38px 0px 0px 60px;
            display: flex;
            flex-direction: column;
            gap: 37px;


            h3 {
                font-family: 'Lexend', sans-serif;
                font-style: normal;
                font-weight: 600;
                font-size: 24px;
                line-height: 30px;
            }
        }
    }




`