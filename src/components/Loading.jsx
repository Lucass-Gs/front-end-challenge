import React from 'react'
import styled from 'styled-components'

// Estilização de componentes

const LoadingContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
`
// Um loading durante o carregamento no render do conteudo da Api em caso de demora no carregamento

const Loading = () => (
    <LoadingContainer className="spinner-border" role="status" />
)

export default Loading
