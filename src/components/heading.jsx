import React from 'react'


export const Header = ({text}) => {
    return (
        <div className='heading'>
            <h3>{text}</h3>
        </div>
    )
}


export const MainHeader = ({text}) => {
    return (
        <header>
            <h1>{text}</h1>
        </header>
    )
}

export const MovieHeader = ({text}) => {
    return (
        <div className="movie-header">
             <h4> Results for {text}</h4>

        </div>
       
    )
}
