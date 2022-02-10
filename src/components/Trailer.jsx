import React from 'react'
import styled from 'styled-components'

// Estilização de componentes

const Container = styled.div`  
  margin-top: 46px;      
  margin-bottom: 60px;
  margin-left: 16px;          
`
const Text = styled.h1`
  margin-bottom:24px;
  font-weight: bold;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: -0.005em;
  color: #131313;
`

const Trailer = ({Video}) => {
    
  return (
    
  <Container>
    <Text>Trailer</Text>    
    <iframe width="300" height="300" src={`https://www.youtube.com/embed/${Video[0]?.key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  </Container>)
  
}

export default Trailer;
