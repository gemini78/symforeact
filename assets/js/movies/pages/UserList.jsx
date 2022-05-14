import Header from '../components/Header';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '../components/Card';

const UserList = () => {

  const [listData, setListData] = useState([]);

  useEffect(() => {
    let moviesId = window.localStorage.movies ? localStorage.movies.split(",") : [];



    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(`https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=5b42eb8b4c6c0c09ce850bfafd6fbe55&language=fr-FR`)
        .then((res) => { setListData((listData) => [...listData, res.data]); });
    }


  }, [])

  return (
    <div className='user-list-page movies'>
      <Header title="React Movies" />
      <h2>Coup de coeur <span>💖</span></h2>
      <div className="result">
        {listData.length > 0 ? (
          listData.map((movie) => <Card movie={movie} key={movie.id} />)
        ) : (
          <h2>Aucun coup de coeur pour le moment</h2>
        )}
      </div>
    </div>
  )
}

export default UserList;