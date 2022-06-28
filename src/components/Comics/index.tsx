import {StyledComics} from "./styles"

interface ComicsProps {
    Comics: any;
}

export const Comics: React.FC<ComicsProps> =({Comics})=> {
    return(
        <StyledComics key={Comics.id}>
            <img src={`${Comics.thumbnail.path}.${Comics.thumbnail.extension}`}/>                                
        </StyledComics>       
    )
}