import styled, { keyframes } from "styled-components"

const fadeInAnimation = keyframes`
	0%{
		opacity: 0;
	}

	50%{
		opacity: 1;
	}
`

export const StyledComicSection = styled.section`	
	padding:0em 0;
    margin-top: 11.5em;
	display: grid;
	grid-gap: 1em;
	justify-content: space-between;
	grid-template-columns: repeat(5, 1fr);
    animation: ${fadeInAnimation} 1.8s ease-in-out;

	

	&::-webkit-scrollbar {
		width: 8px;
		margin-right: 2em;
	}
  
	&::-webkit-scrollbar-thumb {
		background: #e90200;
		border-radius: 15px;
	}

	@media(max-width: ${({theme}) => theme.tablet}) {
		grid-template-columns: repeat(3, 1fr);
	} 
	

	@media(max-width: ${({theme}) => theme.mobile}) {
		grid-template-columns: repeat(1, 1fr);
		
	}
	@media(max-width: ${({theme}) => theme.smallerDevices}) {
		
	}
`

export const StyledButtonSection = styled.div`
	padding: 2.5em 0;
	display: flex;

	@media(max-width: ${({theme}) => theme.mobile}) {
		flex-direction: column;	
	}
`
export const StyledButton = styled.button`  
    color: ${({theme})=> theme.colors.primary};
    padding: 0.5em 0.8em;
    text-transform: uppercase;
    background:#fff;
    border: 0;
    font-weight: bold;
    font-size: 110%;
    width: 190px;
    cursor: pointer;
	@media(max-width: ${({theme}) => theme.mobile}) {
		width: 100%;
	}

`
export const Flex1 = styled.div`  
	display: flex;
    flex: 50%;
	@media(max-width: ${({theme}) => theme.mobile}) {
		flex: 100%;
	}
`

export const Flex2 = styled.div`  
	flex: 50%;
	display: flex;
    justify-content: flex-end;
	@media(max-width: ${({theme}) => theme.mobile}) {
		flex: 100%;
	}
`