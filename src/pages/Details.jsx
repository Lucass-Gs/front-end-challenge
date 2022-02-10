import React, {useState, useEffect} from 'react'
import api from '../services/Api'
import MovieContent from '../components/MovieContent'
import Persons from '../components/Persons'
import { useParams } from 'react-router'
import Trailer from '../components/Trailer'
import Recomendations from '../components/Recomendations'

const Details = () => {
    
    const [Movie, setMovie] = useState([])
    const [Age, setAge] = useState([])
    const {movie_id} = useParams();
    const [Credits, setCredits] = useState([])
    const[Crew, setCrew] = useState([])
    const [Video, setVideo] = useState([])
    const [Recommend, setRecommend] = useState([])
        
      
    useEffect(() => {
        api.get(`movie/${movie_id}?api_key=67ad6a2bd7e8260d565717be8efdc359&language=pt-BR`)
          .then(response => {
              const movie = response.data
              movie.runtime = Math.floor(movie.runtime / 60) + "h" + movie.runtime%60 + "m "
                 setMovie(response.data)                                                                   
          }).catch(error => {
            console.log(error)
          })
      },[movie_id])

      useEffect(() => {
        api.get(`movie/${movie_id}/release_dates?api_key=67ad6a2bd7e8260d565717be8efdc359`)
          .then(response => {      
                 setAge(response.data.results)                                                                   
          }).catch(error => {
            console.log(error)
          })
      },[movie_id])

      useEffect(() => {
        api.get(`movie/${movie_id}/credits?api_key=67ad6a2bd7e8260d565717be8efdc359&language=pt-BR`)
          .then(response => {      
            setCredits(response.data.cast)
            setCrew(response.data.crew)                                                                               
          }).catch(error => {
            console.log(error)
      })
      },[movie_id])
      
      useEffect(() => {
        api.get(`movie/${movie_id}/videos?api_key=67ad6a2bd7e8260d565717be8efdc359&language=pt-BR`)
          .then(response => {      
            setVideo(response.data.results)                                                                               
          }).catch(error => {
            console.log(error)
      })
      },[movie_id])
      
      useEffect(() => {
        api.get(`movie/${movie_id}/recommendations?api_key=67ad6a2bd7e8260d565717be8efdc359&language=pt-BR&page=1`)
          .then(response => {      
            setRecommend(response.data.results)                                                                               
          }).catch(error => {
            console.log(error)
      })
      },[movie_id])
            
    return (
        <>
          <MovieContent Movie={Movie} Age={Age} Crew={Crew}/>
          <Persons Credits={Credits}/>
          <Trailer Video={Video}/>
          <Recomendations Recommend={Recommend}/>
        </>
    )
}

export default Details
