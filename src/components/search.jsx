import React from 'react'

export const Search = ({value, setSearchMovie}) => {
    return (
        <div className="form-group input-container" >
    
      <input
        type="text"
        className='input'
        id="formGroupExampleInput"
        placeholder="Search movie title"
          value={value}
          onChange={text =>setSearchMovie(text.target.value)}
      />
    </div>
    )
}
