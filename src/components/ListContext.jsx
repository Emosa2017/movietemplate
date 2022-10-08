import React, { useEffect, useContext } from 'react'
import {MovieContext} from '../MovieContext'
import ItemContext from './ItemContext'

const ListContext = () => {
    const url = 'https://api.themoviedb.org/3/'
    const join ='/movie?api_key=ae09982e275170a6b3afb29af9fd7f32&query='
    const {movie, setMovie, searchKey, setSearchKey,selectMovie, setSelectMovie}=useContext(MovieContext)
    useEffect(()=>{
        const movieReview = async ()=>{
            const type = searchKey ? 'search' : 'discover'
            const response = await fetch (`${url}${type}${join}${searchKey}`)
            const movie = await response.json()
            setMovie(movie.results)
            console.log(movie.results)
            setSelectMovie(movie.results[0])
        }
        movieReview()
    },[setSelectMovie, setMovie, searchKey])
    if (!movie || movie.length === 0)
    return 'loading'

  return (
    <div className='list'>
        {movie.map((film)=>{
            return(
                <ItemContext key = {film.id} film = {film} />
            )
           
        })}
    </div>
  )
}

export default ListContext