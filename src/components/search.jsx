import React from 'react'

export const Search = ({value}) => {
    return (
        <div className="form-group" >
      <label htmlFor="formGroupExampleInput"></label>
      <input
        type="text"
        className="form-control input"
        id="formGroupExampleInput"
        placeholder="Enter movie title"
        value={value}
      />
    </div>
    )
}
