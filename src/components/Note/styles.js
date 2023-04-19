import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 22.2rem;
    padding: 3.2rem;
    margin-bottom: 2.4rem;
    border-radius: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    >h2 {
        font-size: 2.4rem;
        margin-bottom: .8rem;
    }

    div:nth-child(2) {
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    div:nth-child(3) {
        height: 4.2rem;
        overflow-y: hidden;
    }

    div:nth-child(4) {
        display: flex;
        margin-top: 1.6rem;
        gap: .8rem;
    }

`;