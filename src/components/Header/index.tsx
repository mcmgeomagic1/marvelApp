import { useState } from 'react'
import {Row} from '../Styled/Row'
import {StyledHeader} from './styles'
import {SearchImput} from "../SearchImput"
import logo from "../../assets/images/marvel_logo.png"

interface HeaderPropos {
	searchText: string;
	onTextChange: ()=> void;
}

export const Header: React.FC<HeaderPropos> = ({searchText, onTextChange}) => {
	
	console.log(searchText)
	return (
		<StyledHeader>
			<Row>
				<nav>
					<img src={logo}/>
					<SearchImput onTextChange={onTextChange} searchText={searchText}/>
				</nav>
			</Row>
		</StyledHeader>
	)
}