import { useEffect, useState } from "react";
import {Row} from "../Styled/Row"
import {Header} from '../Header'
import {Comics} from "../Comics"
import {ErrorMessage} from "../errorMessage"
import {StyledComicSection, StyledButtonSection, Flex1, Flex2, StyledButton} from "./styles"

interface homeProps {
    comicsData: any;
}
export default function Home({comicsData}: homeProps) {
    const [sortedComicsData, setSortedComicsData] = useState(comicsData)
    const [currentPage, setCurrentPage] = useState(1) 

    const comicsPerPage:number = 10 

    const indexOfLastComic = currentPage * comicsPerPage
    const indexOfFirstComic =  indexOfLastComic - comicsPerPage

    const goToNextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const goToPreviousPage = () => {
        setCurrentPage(currentPage - 1)
    }

    const [searchText, setSearchText]= useState("")
    console.log(searchText)
    useEffect(()=> {
        if(searchText == "" ) {
            setSortedComicsData(comicsData) 
            orderByNewer()
        }
    }, [searchText])  

    const orderByNewer: ()=> void = ()=> {
        const newComicsData = comicsData.sort((a, b) => {
            return  parseInt(a.dates[0].date.substring(0,4)) - parseInt(b.dates[0].date.substring(0,4)) 
        }) 
        setSortedComicsData(newComicsData)
    }

    const onTextChange: ()=> void = (event: any)=> {
        setSearchText(event)
        if(searchText) {
            setSortedComicsData(comicsData.filter((item) => (
                !item.characters.items.length == 0 ? 
                    item.characters.items[0].name.toLowerCase().includes(searchText.toLocaleLowerCase()) ? item : ""
                : ""
              )
            ))
        }else{
            setSortedComicsData(comicsData)
        }
        console.log("sort", sortedComicsData)
    }

    

    return(
        <>
            <Header searchText={searchText} onTextChange={onTextChange}/>
            <Row>
                <StyledComicSection>
                    {
                        sortedComicsData.length== 0 ?
                            <ErrorMessage Text="Sem resultado"/>
                        :
                        sortedComicsData.slice(indexOfFirstComic, indexOfLastComic).map(comics=> (
                            <Comics
                                key={comics.id}
                                Comics={comics}
                            />                                                     
                        ))
                    }
                </StyledComicSection>
                <StyledButtonSection>
                    {
                        currentPage == 2 || sortedComicsData.length <= comicsPerPage ?
                            null
                        :
                        <Flex1>
                            <StyledButton onClick={goToNextPage}>Next Page</StyledButton>
                        </Flex1>
                    }
                    {
                        currentPage == 1 || sortedComicsData.length <= comicsPerPage ?
                            null
                        :
                        <Flex2>
                            <StyledButton onClick={goToPreviousPage}>Previous Page</StyledButton>
                        </Flex2>
                    }               
                </StyledButtonSection>
            </Row>
        </>
    )
}