import React from 'react'
import {MovieHeader} from './heading'

export const Nominations = ({movieTitle}) => {
    return (
        <div>
            <MovieHeader
            text="Nominations"
            />
             <div className="results">
           
           <ul>
               <li>{movieTitle}</li>
           </ul>
           <input type="submit" value="Remove" className="nominate-button"></input>
       </div>
            
        </div>
    )
}

