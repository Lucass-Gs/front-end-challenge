import React, {useState, useEffect} from 'react'
import Filter from '../components/Filter'
import api from '../services/Api'
import Card from '../components/Card'
import Pagination from '../components/Pagination'
import Loading from '../components/Loading'

const Home = () => {
  
  const [Genres, setGenres] = useState()  
  const [Results, setResults] = useState()  
  const [vm, setVm] = useState({
    totalPages: 500,
    totalResults: 0,
    loading: true,
  })
  const [page, setPage] = useState(1)
  const [selectedGenres, setSelectedGenres] = useState([])

  useEffect(() => {
    api.get('genre/movie/list?api_key=67ad6a2bd7e8260d565717be8efdc359&language=pt-BR')
      .then(response => {         
        setGenres(response.data.genres)                 
      }).catch(error => {
        console.log(error)
      })
      
      const data = localStorage.getItem('genresSaved')
      if(data){        
        api.get(`discover/movie?api_key=67ad6a2bd7e8260d565717be8efdc359&language=pt-BR&sort_by=popularity.desc&include_adult=true&include_video=false&page=${page}&with_genres=${JSON.parse(data)}`)
        .then(response => {
          setResults(response.data?.results)
          setVm({...vm, totalResults: response.data.total_results, loading: false})
        }) 
       return
      }
      api.get(`movie/popular?api_key=67ad6a2bd7e8260d565717be8efdc359&language=pt-BR&page=1`)      
      .then(response => {
          setResults(response.data.results)
          setVm({...vm, totalResults: response.data.total_results, loading: false})       
                     
      }).catch(error=>{
          console.log(error)
      })
  }, [page]) 

  const handlePageChange = (paginationData) => {
    const { currentPage, pageLimit, totalRecords } = paginationData
    const totalPages = Math.ceil(totalRecords / pageLimit)

    setVm({...vm, loading: true})
    api.get(`movie/popular?api_key=67ad6a2bd7e8260d565717be8efdc359&language=pt-BR&page=${paginationData.currentPage}`)
    .then(response => {
        setResults(response.data.results)        
        setVm({...vm, totalPages: totalPages, loading: false, totalResults: response.data.total_results})
    }).catch(error=>{
        console.log(error)
    })

    setPage(currentPage)
  }
  
  const handleGenreFilter = (genreValue) => {
    const alreadySelectedGenre = selectedGenres.find(genre => genre === genreValue)
    let genresArray = selectedGenres
    if (!alreadySelectedGenre) {
      genresArray.push(genreValue)
      setSelectedGenres([...selectedGenres, genreValue])
      
    } else {
      genresArray = genresArray.filter(g => g !== genreValue)
      setSelectedGenres(genresArray)
      
    }   
    api.get(`discover/movie?api_key=67ad6a2bd7e8260d565717be8efdc359&language=pt-BR&sort_by=popularity.desc&include_adult=true&include_video=false&page=${page}&with_genres=${genresArray}`)
    .then(response => {
      setResults(response.data?.results)        
      
    })      
    .catch(error => {
      console.log(error)
    })      
  }
  React.useEffect(()=>{
    if(!selectedGenres.length){return}
    localStorage.setItem('genresSaved',JSON.stringify(selectedGenres))        
  })
  React.useEffect(()=>{
    const data = localStorage.getItem('genresSaved')
    if(data){
      setSelectedGenres(JSON.parse(data))    
    }
  },[page])
  
  return (
    vm.loading ?
      <Loading />
    :
    
    <>
      
      <Filter Genres={Genres} selectGenre={handleGenreFilter} selectedGenres={selectedGenres}/>
      <Card Results={Results}/>
      <Pagination 
        onPageChanged={handlePageChange}
        pageNeighbours={2} 
        pageLimit={20} 
        currentPage={page} 
        totalRecords={10000}
        totalPages={vm.totalPages}
      />
    </>
  )
}

export default Home

