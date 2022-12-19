import styled from "styled-components";

export const ProductContainer = styled.div`

    position: relative;

    .background-blue {
        background-color: var(--brand1);
        width: 100%;
        height: 22rem;
        position: absolute;
        left: 0px;
        top: 0px;
    }

    @media (max-width: 800px) {

        display: flex;
        flex-direction: column;
        /* padding: 45px 12px; */
        gap: 30px;
        background-color: var(--grey8);

        .div-aside-desktop{
            display: none;
        }

        .div-container-desktop {
            display: flex;
            flex-direction: column;
            padding: 45px 12px;
            gap: 30px;
            background-color: var(--grey8);
        }

        h2 {
            color: var(--grey1);
            font-family: 'Lexend', sans-serif;
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 25px;
        }

        .div-cover-photo {
            z-index: 5;
            background-color: var(--grey10);
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
        }


        .div-resume {
            z-index: 5;
            background-color: var(--grey10);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding: 28px;
            gap: 24px;
            border-radius: 4px;
        }

        .div-resume-feat {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;


            span {
                padding: 4px 8px;
                background-color: var(--brand4);
                font-family: 'Inter', sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 24px;
                color: var(--brand1);
            }
        }

        .p-price {
                font-family: 'Lexend', sans-serif;
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 20px;
                color: var(--grey1);
            }


        .div-description {
            background-color: var(--grey10);
            display: flex;
            flex-direction: column;
            gap: 32px;
            padding: 36px 28px;
            border-radius: 4px;

            p {
                font-family: 'Inter', sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 28px;
                color: var(--grey2);
            }
        }

        .div-photos {
            background-color: var(--grey10);
            display: flex;
            flex-direction: column;
            gap: 32px;
            padding: 36px 44px;
            border-radius: 4px;


            div {
                display: flex;
                flex-wrap: wrap;
                gap: 5.5px;
            }
        }

        .div-seller {
            background-color: var(--grey10);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 28px;
            padding: 40px 28px;
            border-radius: 4px;

            .seller-photo {
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: var(--brand1);
                width: 77px;
                height: 77px;
                border-radius: 50px;


                p {
                    color: #FFFFFF;
                    font-family: 'Inter', sans-serif;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 26.6538px;
                    line-height: 39px;
                }
            }

            p {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 25px;
                text-align: center;
                color: var(--grey2);
            }
        }
    
    }

    @media (min-width: 800px) {

        

        background-color: var(--grey8);
        display: flex;
        flex-direction: row;
        padding: 40px 180px;
        gap: 46px;

        .div-container-desktop {
            display: flex;
            flex-direction: column;
            gap: 16px;
            background-color: var(--grey8);
        }

        .div-cover-photo {
            z-index: 5;
            background-color: var(--grey10);
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
        }

        .div-resume {
            z-index: 5;
            background-color: var(--grey10);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding: 28px;
            gap: 24px;
            border-radius: 4px;
        }

        .div-description {
/* 
            position: absolute;
            width: 751px;
            height: 213px;
            left: 182px;
            top: 770px; */
            
            background-color: var(--grey10);
            display: flex;
            flex-direction: column;
            gap: 32px;
            padding: 36px 28px;
            border-radius: 4px;

            p {
                font-family: 'Inter', sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 28px;
                color: var(--grey2);
            }
        }

        .div-aside-desktop {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        .div-photos {
            display: none;
        }

        .div-photos-desktop {

            /* position: absolute;
            width: 440px;
            height: 377px;
            left: 979px;
            top: 120px; */

            z-index: 5;
            background-color: var(--grey10);
            display: flex;
            flex-direction: column;
            gap: 32px;
            padding: 36px 44px;
            border-radius: 4px;


            div {
                display: flex;
                flex-wrap: wrap;
                gap: 5.5px;
            }
        }

        .div-seller {
            display: none;
        }


        .div-seller-desktop {

            /* position: absolute;
            width: 440px;
            height: 426px;
            left: 979px;
            top: 531px; */

            z-index: 5;

            background-color: var(--grey10);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 28px;
            padding: 40px 28px;
            border-radius: 4px;



            .seller-photo {
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: var(--brand1);
                width: 77px;
                height: 77px;
                border-radius: 50px;


                p {
                    color: #FFFFFF;
                    font-family: 'Inter', sans-serif;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 26.6538px;
                    line-height: 39px;
                }
            }

            p {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 25px;
                text-align: center;
                color: var(--grey2);
            }
        }


        
    }
`