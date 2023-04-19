import styled from "styled-components";

export const Container = styled.span`
    width: fit-content;
    height: 2.4rem;
    font-size: 1.2rem;
    line-height: 1.4rem;
    text-align: center;
    border-radius: .8rem;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    color: ${({ theme }) => theme.COLORS.GRAY_SPAN};
    padding: .5rem 1.6rem;
`;