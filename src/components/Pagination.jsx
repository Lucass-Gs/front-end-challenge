import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import 'moment/locale/pt-br'
import { mobile, tablet, desktop } from '../responsive'

// Estilização de componentes

const PageButton = styled.a`    
    text-decoration: none;
    color: #5C16C5;
    font-weight: bold;
`

const PageButtonContainer = styled.li`
    ${mobile({
        padding:"6px"
    })}
    ${tablet({
        padding:"16px"
    })}
    ${desktop({
        padding:"16px"
    })}    
`
// range das paginas
const range = (from, to, step = 1) => {
    let i = from;
    const range = [];
  
    while (i <= to) {
      range.push(i);
      i += step;
    }
  
    return range;
}
  

const Pagination = ({ onPageChanged, pages = [1, 2, 3, 4, 5], currentPage = 1, pageLimit, totalPages = 10, totalRecords, pageNeighbours = 2 }) =>{    
    
    const LEFT_PAGE = 'LEFT'
    const RIGHT_PAGE = 'RIGHT'
  
    const [vm, setVm] = useState({pages: pages})
  
    const handleClick = page => event => {
      event.preventDefault()
      gotoPage(page)
    }

    const gotoPage = page => {
        const currentPage = Math.max(0, Math.min(page, totalPages))
        const paginationData = {
            currentPage,
            totalPages: totalPages,
            pageLimit: pageLimit,
            totalRecords: totalRecords
        }
        onPageChanged(paginationData)
    }

    const fetchPageNumbers = () => {
        const fetchTotalPages = totalPages
        const fetchCurrentPage = currentPage
        const fetchPageNeighbours = pageNeighbours

        /**
         * totalNumbers: o total de numero de paginas
         * totalBlocks: totalNumbers + 2 para cobrir os controles esquerda(<) e direita(>) 
         */
        const totalNumbers = (pageNeighbours * 2) + 3
        const totalBlocks = totalNumbers + 2

        if (fetchTotalPages > totalBlocks) {

            const startPage = Math.max(2, fetchCurrentPage - fetchPageNeighbours)
            const endPage = Math.min(fetchTotalPages - 1, fetchCurrentPage + fetchPageNeighbours)

            let pages = range(startPage, endPage)

            /**
             * hasLeftSpill: tem paginas ocultas a esquerda
             * hasRightSpill: tem paginas ocultas a direita
             * spillOffset: número de páginas ocultas à esquerda ou à direita
             */
            const hasLeftSpill = startPage > 2
            const hasRightSpill = (fetchTotalPages - endPage) > 1
            const spillOffset = totalNumbers - (pages.length + 1)

            switch (true) {
            // handle: (1) < {5 6} [7] {8 9} (10)
            case (hasLeftSpill && !hasRightSpill): {
                const extraPages = range(startPage - spillOffset, startPage - 1)
                pages = [LEFT_PAGE, ...extraPages, ...pages]
                break
            }

            // handle: (1) {2 3} [4] {5 6} > (10)
            case (!hasLeftSpill && hasRightSpill): {
                const extraPages = range(endPage + 1, endPage + spillOffset)
                pages = [...pages, ...extraPages, RIGHT_PAGE]
                break
            }

            // handle: (1) < {4 5} [6] {7 8} > (10)
            case (hasLeftSpill && hasRightSpill):
            default: {
                pages = [LEFT_PAGE, ...pages, RIGHT_PAGE]
                break
            }
            }
            return [1, ...pages, fetchTotalPages]

        }
        return range(1, fetchTotalPages)
    }

    const handleMoveLeft = event => {
        event.preventDefault()
        gotoPage(currentPage - (pageNeighbours * 2) - 1)
      }
      
      const handleMoveRight = event => {
        event.preventDefault()
        gotoPage(currentPage + (pageNeighbours * 2) + 1)
      }

    useEffect(() => {
        const pages = fetchPageNumbers()
        setVm({...vm, pages})
    }, [])

    return(            
        <nav className="d-flex justify-content-center" aria-label="Countries Pagination">
            <ul className="pagination">
                {vm.pages.map((page, index) => {
                    if (page === LEFT_PAGE) return (
                        <PageButtonContainer key={index} className="page-item">
                            <PageButton href="#" aria-label="Previous" onClick={handleMoveLeft}>
                                <span className="sr-only">{'<'}</span>
                            </PageButton>
                        </PageButtonContainer>
                    );

                    if (page === RIGHT_PAGE) return (
                        <PageButtonContainer key={index} className="page-item">
                            <PageButton href="#" aria-label="Next" onClick={handleMoveRight}>
                                <span className="sr-only">{'>'}</span>
                            </PageButton>
                        </PageButtonContainer>
                    )

                    return (
                        <PageButtonContainer key={index} className={`page-item${currentPage === page ? ' active' : ''}`}>
                            <PageButton href="#" onClick={handleClick(page)}>{page === totalPages ? 'Última' : page}</PageButton>
                        </PageButtonContainer>
                    )
                })}
            </ul>
        </nav>
    )
}
export default Pagination
