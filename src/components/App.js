import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import {MovieCard} from './MovieCard';
import {Search} from './search'
import {MainHeader, Header, MovieHeader} from './heading'

export const App = () => {
  const [movies, setMovies] = useState([]);
  
  const [nominate, setNominate] = useState([]);

  const [searchMovie, setSearchMovie] = useState('Avengers');

  const getMovie = async (searchMovie) => {
    const url = ` http://www.omdbapi.com/?s=${searchMovie}&apikey=4eb88178`;

    const response = await fetch(url);
    const responseJson = await response.json();
   
    if (responseJson.Search){
    setMovies(responseJson.Search);}
  };

  useEffect(() => {
    getMovie(searchMovie);
  }, [searchMovie]);


  useEffect(() => {
    const nominatedStorage = JSON.parse(localStorage.getItem('nominated-movies'));

    setNominate(nominatedStorage);
  }, []);

  

  const saveLocalStorage = (items) => {
    localStorage.setItem('nominated-movies', JSON.stringify(items))
  };
const newNominate =  []
  const addNominate = (movie) => {
    

      if (nominate.includes(movie)) {
        alert("Movie already Nominated")
          console.log(newNominate.includes(movie))
   
    }
   
   
    else {
   const newNominate = [...nominate, movie];
  
  setNominate(newNominate);
  saveLocalStorage(newNominate);

}
   
    
  };

  const removeNominate = (movie) => {
    const newNominate = nominate.filter(
      nominate => nominate.imdbID != movie.imdbID
    );
    setNominate(newNominate);
    saveLocalStorage(newNominate);
  }

  return (
    <div className= 'container-fluid'> 
      
    
    <MainHeader
    text="The Shoppies"
    
    />
    <Header
    text="Movie title"
      />
      

      <Search
        searchMovie={searchMovie}
        setSearchMovie={setSearchMovie}
      />
      <MovieHeader
        text={searchMovie}
      />
      
      
      
      <div className='movie-app'>
        <MovieCard
          movies={movies}
          handleNominate={addNominate}
          text="Nominate"
      />


      </div>
      
      <Header
    text="Nominated Movies"
      />

      <div className='movie-app'>
        <MovieCard
          movies={nominate}
          handleNominate={removeNominate}
          text="Remove"
      />


      </div>
             
 


   
 
      
    </div>
  );
}


