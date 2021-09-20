import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';

import { Button, Card } from 'react-bootstrap';
export const MovieCard = ({movies, handleNominate, text}) => {
  
  return (
    <div className='movie-card  row'>  
      {movies.map((movie, index) => (

        <Card key={index} style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.Poster} className='card-photo' />
  <Card.Body style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <Card.Title>{movie.Title}</Card.Title>
    <Card.Text>
     {movie.Year}
    </Card.Text>
            <Button className='button' variant="primary" onClick={() => handleNominate(movie)}>{text}</Button>
  </Card.Body>
</Card>
    
    ))}
    </div>
  );
}

