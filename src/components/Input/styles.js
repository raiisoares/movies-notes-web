import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
    color: ${({ theme }) => theme.COLORS.GRAY};

    margin: .3rem 0;
    border-radius: 1rem;

    >input {
        width: 100%;
        height: 5.6rem;
        padding: 1.9rem 2.4rem;
        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.WHITE};
        border: none;
    }

    &:placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY};
    }

    >svg {
        margin-left: 1.6rem;
    }
`;

