import styled from "styled-components"

export const StyledInput = styled.input`
    padding: 1em;
    width: 440px;
    border-radius: 5px;
    border: 0;
    font-size: 70%;
    font-style: italic;

    @media(max-width: ${({theme}) => theme.mobile}) {
		width: 85%;
	} 
	
`
