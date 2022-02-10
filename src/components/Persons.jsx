import React from 'react';
import styled from 'styled-components';

// Estilização de componentes

const Container = styled.div`  
  height: 500px;
  margin-top: 38px;
  margin-left:16px;      
  margin-right:16px;      
`

const Text = styled.h1`
  font-weight: bold;
  font-size: 28px;
  line-height: 32px;  
  padding-top:28px;
  padding-bottom: 32px;
  display: flex;
  align-items: center;
  letter-spacing: -0.005em;
  color: #131313;
`
const CardsContainer = styled.div`
  background-color:white;    
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;	
  align-items: center;
  align-content: center;  
  overflow-x: hidden;
  overflow-x: scroll;  
`
const Cards = styled.div`
  min-width: 191px;
  width: 191px;
  height: 336px;
  display:flex;
  flex-direction:column;      
  margin-right: 16px;
  margin-bottom:26px;    
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;         
`
const Image = styled.img`
  width:175px;
  height:222px;
  margin: 8px 8px 16px 8px;
  border-radius: 4px;  
`
const Name = styled.div`
  width:174px;  
  margin-left: 8px;
  font-weight: bold;
  font-size: 16px;  
  color: #131313;  
`
const Character = styled.p`
  width: 174px;  
  margin-left: 8px;
  font-size: 16px;  
  
  color: #131313;
`

const Persons = ({Credits}) => {   
  
      /* foi utilizado um slice para limitar os resultados dos
      atores e participantes dos filmes em somente15 */
  return (
    <Container>         
      <Text>Elenco original</Text> 
      <CardsContainer>        
      {Credits?.slice(0, 15).map(cast=>(               
        <Cards key={cast.cast_id}>
          <Image src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${cast.profile_path}`}/>
          <Name>{cast.name}</Name>
          <Character>{cast.character}</Character>
        </Cards>
        ))}
        </CardsContainer>       
    </Container>
  )  
}

export default Persons;
