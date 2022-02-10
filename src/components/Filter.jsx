import React from 'react'
import styled from 'styled-components'
import {CloseCircle} from '@styled-icons/ionicons-sharp/CloseCircle'
import { mobile, tablet, desktop } from '../responsive'

// Estilização de componentes

const Container = styled.div`    
    width: 100%;
    background: #2D0C5E;
    padding-top: 5%;
    padding-bottom: 40px;    
`
const Desc = styled.h1`
    display: flex;    
    flex-direction: row;   
    margin-left:16px;    
    margin-right: 25%;
    margin-bottom: 3%;
    color: #FFFFFF;       
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;   
    letter-spacing: -0.005em;
    ${mobile({marginTop:"40px", fontSize:"24px", lineHeight:"28px" })}
    ${tablet({margin:"50px 100px 20px 100px", textAlign:"center"})}
    ${desktop({margin:"20px 30% 40px 30%",justifyContent:"center", textAlign:"center"})}
`
const FilterText = styled.p`
    text-align:center;      
    color: #FFFFFF;
    font-family: Roboto;    
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    ${mobile({ marginLeft:"16px", marginTop:"36px", textAlign:"left" })}
    ${tablet({ marginLeft:"16px", marginTop:"36px", textAlign:"center" })}
`
const FButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;    
    align-items: center;
    align-content: center;    
    ${mobile({ marginLeft:"16px" })}
    ${tablet({ marginTop:"36px", justifyContent:"center" })}           
    ${desktop({marginLeft:"20%",marginRight:"20%",justifyContent:"center" })}           
`
const SelectedButtonFilter = styled.button`
    height: 40px;   
    padding: 8px 16px;
    border:none;
    border-radius: 4px;
    align-items: center;
    margin: 6px 6px;    
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;   
    background-color: #D18000;
    color:white;    
`
const CloseButton = styled(CloseCircle)`
    margin-left: 10px;
    width:20px;
    height:20px;   
`
const ButtonFilter = styled.button`    
    height: 40px;   
    background: #FFFFFF;
    padding: 8px 16px;
    border:none;
    border-radius: 4px;
    align-items: center;
    margin: 6px 6px;    
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;   
    color: #323232;
    &:hover {
        transition: 0.5s;
        background-color: #AAAAAA;
    }
    &:focus{
        background-color: #D18000;
        color:white;
    }
`
// Construção do container e componente de filtro de gêneros da pagina Home

const Filter = ({Genres, selectGenre, selectedGenres}) => {
  return (
    <Container>        
        <Desc>Milhões de filmes, séries e pessoas para descobrir. Explore já.</Desc>       
        <FilterText>FILTRE POR: </FilterText>      
        <FButtonContainer>        
            {Genres?.map(genre => (selectedGenres.find(genreId => genreId === genre.id) ?
                    <SelectedButtonFilter key={genre.id} onClick={() => selectGenre(genre.id)}>{genre.name}<CloseButton></CloseButton> </SelectedButtonFilter>
                :
                    <ButtonFilter key={genre.id} onClick={() => selectGenre(genre.id)}>{genre.name}</ButtonFilter>
                )
            )}        
        </FButtonContainer>    
    </Container>
  )
}
export default Filter;