import React, {useEffect, useState} from "react"
import md5 from 'js-md5';
import Global from './components/Styled/Global'
import Home from "./components/Home";
import { Loading } from "./components/Loading";
import {ThemeProvider} from "styled-components"
import Theme from "./Theme/Theme"

export const App: React.FC =() => {

  const PUBLIC_KEY = '565166e6b894404cf2b66b82b8000d21'; 
  const PRIVATE_KEY = '9dbc18bf4a060f8c7a7b0a10d2bb1894589765ca'; 

  const [comicsData, setComicsData] = useState([]);
  useEffect(() => {
    const ts:number = Number(new Date());
    const hash:any = md5.create();
    hash.update(ts + PRIVATE_KEY + PUBLIC_KEY);
    fetch(`https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`)
    .then(res => res.json())
    .then(data => setComicsData(data.data.results)) 
  },[])

  if(comicsData.length == 0) {
    return(
      <ThemeProvider theme={Theme} >
        <Global/>
        <Loading/>
      </ThemeProvider>    
    )
  }

  return (
    <ThemeProvider theme={Theme} >
      <Global/>
      <Home comicsData={comicsData}/>
    </ThemeProvider>    
  );
}
