
import {StyledInput} from './styles'

interface SearchImputProps {
	searchText: string;
	onTextChange: ()=> void;
}

export const SearchImput: React.FC<SearchImputProps> = ({searchText, onTextChange}) => {
	
	return (
		<StyledInput
			type="text"
			onChange={(e) => onTextChange(e.target.value)}
			value={searchText}
			placeholder="Type the name of a Character"
		/>
	)
}