import React from 'react'

const imgpath ='https://image.tmdb.org/t/p/w500/'
const unavailable='https://www.shutterstock.com/image-vector/unavailable-red-rubber-stamp-vector-isolated-1433120663'

const ItemContext = ({film}) => {
  return (
    <div className='Item'>
        <img src={film.poster_path ? `${imgpath}${film.poster_path}`: unavailable} alt="" />
        <main>

            
                <p className='title'>{film.original_title}</p>
                <nav>
                <p>{film.vote_average}</p>
                <p>{film.original_language}</p>
                </nav>                
                <p>{film.release_date}</p>



            
        </main>


    </div>
  )
}

export default ItemContext