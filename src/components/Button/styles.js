import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 4.8rem;
    border: none;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.COLORS.PINK};
`;