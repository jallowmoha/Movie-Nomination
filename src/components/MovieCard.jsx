import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';

export const MovieCard = ({movies}) => {
  
  return (
    <div className='movie-card'>  
      {movies.map((movie, index) => (
    <MDBCard style={{ maxWidth: '22rem' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src= {movie.Poster} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{movie.Title}</MDBCardTitle>
        <MDBCardText>
          {movie.Year}
        </MDBCardText>
        <MDBBtn href='#'>Nominate</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    ))}
    </div>
  );
}

