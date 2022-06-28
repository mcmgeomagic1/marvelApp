
import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`

	@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
	
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body,html {
		width: 100%;
		height: 100vh;
		background: ${({theme}) => theme.colors.background};
		color: #000;
		font-size: 17px;
		font-family: 'Roboto', sans-serif;
		overflow-x: hidden;
	}

	section{	
		padding: 6em 0;
		display: flex;
		flex-direction: column;
		grid-gap: 8em;

		
	}

	img{
		width: 100%;
		object-fit: cover;
	}

	p {
		opacity: 0.7
	}

`

export default GlobalStyles