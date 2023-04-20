import styled from "styled-components";

export const Container = styled.button`
    font-size: 1.6rem;
    line-height: 2.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .8rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    background-color: transparent;
    border: none;
    /* margin: 0 auto; */
    >svg {
        font-size: 1.6rem;
    }
`;