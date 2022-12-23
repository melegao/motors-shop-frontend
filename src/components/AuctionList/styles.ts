import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  row-gap: 45px;
  column-gap: 20px;

  overflow: scroll;
  scrollbar-width: none;

  @media (min-width: 650px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    overflow: hidden;

    max-width: 100%;
    height: auto;
  }
`;
