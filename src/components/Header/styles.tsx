import styled, { ThemeConsumer } from 'styled-components'
import { keyframes } from 'styled-components'

const animate = keyframes`


`
const animateMobile = keyframes`


`
export const StyledHeader = styled.header`
	height: 150px;
	width: 100%;
	background: rgba(216, 34, 36, 0.9500);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: bottom;
	display: flex;
	align-items: center;
	position: relactive;
	position: fixed;
	z-index: 1;
	top: 0;
	animation: ${animate} 20s ease-in-out infinite;

	nav {
		display: flex;
		flex-direction: column;
		align-items: center;
		grid-gap: 1em;
		justify-content: center;
	}

	img {
		width: auto;
		height: 50px;
	}

	@media(max-width: ${({theme}) => theme.mobile}) {
		animation: ${animateMobile} 20s ease-in-out infinite;
	}

	

`