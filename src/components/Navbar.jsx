import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile, tablet, desktop } from '../responsive'

// Estilização de componentes

const Container = styled.div`
    width: 100%;
    height:56px;   
    background-color: #5C16C5;
    display: flex;
    flex-direction: row;
    align-items: center;  
    justify-content: space-between;     
`
const Left = styled.div`    
    flex: 1;
    display: flex;        
    align-items: center;
        
    ${mobile({justifyContent:"center"})}
    ${tablet({ marginLeft:"70px" })}
    ${desktop({ marginLeft:"8%" })}
      
`
const LogoName = styled.div`
    font-weight: bold;
    font-size: 32px;
    color: #FFFFFF;
    letter-spacing: 6px;  
`
const Logo = styled.div`
    margin-left: 5px;
    width: 65px;
    height: 24px;
    border-radius: 12px;
    background-color: #FFFFFF;
`
const Navbar = () => {
    return (
        
    <Container> 
             
        <Left>
        <Link to="/" style={{textDecoration:"none"}}> 
        <LogoName>TMDB</LogoName>
        </Link>
         <Link to="/" style={{textDecoration:"none"}}>                              
          <Logo/>
          </Link> 
        </Left>             
    </Container>
    
    )
  }
  
  export default Navbar;