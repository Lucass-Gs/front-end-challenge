import React from 'react'
import styled from 'styled-components'
import Moment from 'react-moment'
import 'moment/locale/pt-br'
import { Link } from 'react-router-dom'
import { mobile, tablet, desktop } from '../responsive'

// Estilização de componentes

const Container = styled.div`
    padding-top: 19px;              
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    ${mobile({
        marginLeft:"2px",
        marginRight:"2px",
         justifyContent:"space-around"
})}
    ${tablet({
        marginLeft:"16px",            
        marginRight:"16px",            
        justifyContent:"space-around"
    })}
    ${desktop({
        marginLeft:"22.3%",            
        marginRight:"16%",       
    })}      
`
const CardContainer = styled.div`    
    width: 176px;
    height: 264px;        
    margin-bottom: 104px;
    ${desktop({                    
        marginRight:"12px",       
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
const Card = ({Results}) =>{    
    
    return(
        
        // Container dos cards exibidos na Home
        <Container>
            {Results?.map(results=>(
                
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
    )
}
export default Card
