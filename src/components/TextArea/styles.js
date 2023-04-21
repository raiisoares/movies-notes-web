import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 27.4rem;
    border: none;
    border-radius: 1rem;
    padding: 1.9rem 1.6rem;
    font-size: 1.6rem;
    line-height: 1.9rem;
    overflow-y: auto;
    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
    color: ${({ theme }) => theme.COLORS.GRAY_100}
`;