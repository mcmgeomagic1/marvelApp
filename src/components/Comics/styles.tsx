import styled from "styled-components"

export const StyledComics = styled.div`  
    height: 100%;

    img {
        height: 280px;

        &:hover {
            cursor: pointer;
            transform: scale(0.955);
            transition: 0.3s ease-in-out all;
            border: 10px solid ${({theme})=> theme.colors.primary};
        }

        @media(max-width: ${({theme}) => theme.mobile}) {
            height: 95%;
            margin: 0 auto;
        }
    }
`