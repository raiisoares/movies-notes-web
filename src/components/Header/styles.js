import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;
    justify-content: space-between;
    width: 100%;
    height: 11.6rem;
    padding: 2.4rem 12.3rem;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_800}; 
    display: flex;

`;
