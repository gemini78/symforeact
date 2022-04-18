import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card';

const Form = () => {

  const [moviesData, setMoviesData] = useState([])

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=5b42eb8b4c6c0c09ce850bfafd6fbe55&language=fr-FR&query=avenger').then(res => {
      setMoviesData(res.data.results);
    });
  }, []);

  return (
    <div className='form-component'>
      <div className='form-container'>
        <form action="">
          <input type="text" placeholder='Entrer le titre du film' id="search-input" />
          <input type="submit" value="Rechercher" />
        </form>
        <div className='btn-sort-container'>
          <div className="btn-sort" id="goodToBad">Top<span>&#8594;</span></div>
          <div className="btn-sort" id="badToGood">Flop<span>&#8594;</span></div>
        </div>
      </div>
      <div className='result'>
        {moviesData.slice(0, 12).map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Form