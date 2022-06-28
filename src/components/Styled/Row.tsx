import styled from 'styled-components'

export const Row = styled.div`
	width: 1000px;
	margin: 0 auto;

	@media(max-width: ${({theme}) => theme.tablet}) {
		width: 80%;
	}

	@media(max-width: ${({theme}) => theme.mobile}) {
		width: 85%;
	}
`