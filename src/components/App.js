import React from "react";
import { MDBBtn, MDBContainer, MDBIcon } from "mdb-react-ui-kit";
import {MovieCard} from './MovieCard';
import {Search} from './search'
import {MainHeader, Header} from './heading'

export const App = () => {
  const movies = [
    {
      "Title": "Starwars: Goretech",
      "Year": "2018",
      "imdbID": "tt9336300",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTI5OTBhMGYtNTZlNS00MjMzLTk5NTEtZDZkODM5YjYzYmE5XkEyXkFqcGdeQXVyMzU0OTU0MzY@._V1_SX300.jpg"
  },
  {
      "Title": "MeUndies x StarWars: The Dark Side",
      "Year": "2018",
      "imdbID": "tt9414858",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzg3ZDcwNDQtOTVlMC00ZjE0LThiYjktY2U2YTVjODU5MWY5XkEyXkFqcGdeQXVyNjg3MDM0MzE@._V1_SX300.jpg"
  },
  {
      "Title": "MeUndies x StarWars: The Force",
      "Year": "2018",
      "imdbID": "tt9414918",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZTdjYjM1YzgtYmViMS00ODFjLTgyM2EtMjRkNTFiNDEyMTU2XkEyXkFqcGdeQXVyNjg3MDM0MzE@._V1_SX300.jpg"
  },
  {
      "Title": "40 Years: StarWars & ILM",
      "Year": "2016",
      "imdbID": "tt5320598",
      "Type": "movie",
      "Poster": "N/A"
  },
  {
      "Title": "The StarWars Adventures",
      "Year": "2016–",
      "imdbID": "tt5814352",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNWNkOGIyN2ItNGEwYS00ZTM2LWIyMzgtNjUxMzJmMjViZTE4XkEyXkFqcGdeQXVyMzM4MTY3ODg@._V1_SX300.jpg"
  },
  {
      "Title": "The StarWars Adventures: Project Blackwing",
      "Year": "2016–",
      "imdbID": "tt5814452",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMmQyM2M3ZjItYjhiMy00YWM4LWFmZGMtNTI1NTYwYjZlOGJhXkEyXkFqcGdeQXVyMzM4MTY3ODg@._V1_SX300.jpg"
  }
  ]

  return (
    <div> 
      
    
    <MainHeader
    text="The Shoppies"
    
    />
    <Header
    text="Movie title"
    />

      <Search/>
      <MovieCard
      movies={movies}
      />
    
    </div>
  );
}


