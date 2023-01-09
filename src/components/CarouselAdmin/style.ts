import styled from "styled-components";

export const CarouselProductsContainer = styled.div`

    display: flex;
    gap: 12px;
    overflow-x: scroll;
    padding-bottom: 10px;

    @media (min-width: 800px) {
        gap: 48px;
        padding-bottom: 12px;
        overflow-x: auto;
        
    }

`