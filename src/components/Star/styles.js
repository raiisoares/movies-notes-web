import styled from "styled-components";

export const Container = styled.div`
    
    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 1.6rem;
    }

    display: flex;
    flex-direction: row;
    align-items: center;
    height: fit-content;
    margin: 0;

    color: ${({ theme }) => theme.COLORS.PINK};

`;