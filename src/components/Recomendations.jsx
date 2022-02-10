import React from 'react'
import styled from 'styled-components'
import Moment from 'react-moment'
import 'moment/locale/pt-br'
import { Link } from 'react-router-dom'
import { mobile, tablet, desktop } from '../responsive'

// Estilização de componentes

const Text = styled.h1`
  font-weight: bold;
  font-size: 28px;
  line-height: 32px;    
  padding-bottom: 32px;
  margin-left:16px;  
  letter-spacing: -0.005em;
  color: #131313;  
`
const Container = styled.div`
    padding-top: 19px;              
    display: flex;
    flex-wrap:wrap;
    ${mobile({      
      justifyContent:"space-around"      
})}    
`
const CardContainer = styled.div`    
    width: 176px;
    height: 264px;        
    margin-bottom: 104px;    
    ${tablet({      
      marginLeft:"22px"      
})}
  ${desktop({      
      marginLeft:"32px"      
  })}         
    
`
const Image= styled.img`
    width: 176px;
    height: 264px;    
    border-radius: 4px;
    cursor:pointer;
    &:hover {
        transition: 0.5s;        
        opacity:0.7;        
    }
`
const Title= styled.p`
    margin-top:8px;             
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #000000;
    line-height: 24px;
    cursor:pointer;
    &:hover {
        transition: 0.2s;
        color: gray;
    }    
`
const Date = styled.p`
    margin-top: -15px ;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    color: #646464;
    line-height: 24px;
    cursor:default;            
`

const Recomendations = ({Recommend}) => {
  return (
    //container e componentes dos cards de recomendações abaixo do trailer dos filmes na pagina details
    //foi utilizado um slice para limitar os resultados dos filmes recomendados em somente 6
  <> 
    <Text>Recomendações</Text>
    <Container>
    {Recommend?.slice(0,6).map(results=>(
      <CardContainer key={results.id}>
        <Link to={`/details/${results.id}`} style={{ textDecoration: 'none' }}>
        <Image src={`https://image.tmdb.org/t/p/w500/${results.poster_path}`}></Image>
        </Link>
        <Link to="/details" style={{ textDecoration: 'none' }}>
        <Title>{results.title}</Title>
        </Link>
        <Date>
          <Moment locale='pt-br' format="DD MMM YYYY" >{results.release_date}</Moment>
        </Date>
      </CardContainer>
      ))}
    </Container>
  </>
  )
}

export default Recomendations;
