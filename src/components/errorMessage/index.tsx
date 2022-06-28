import {StyledErrorMessage} from "./styles"

interface ErrorMessageProps {
    Text: any;
}

export const ErrorMessage: React.FC<ErrorMessageProps> =({Text})=> {
    return(
        <StyledErrorMessage>
             <p>{Text}</p>                        
        </StyledErrorMessage>       
    )
}