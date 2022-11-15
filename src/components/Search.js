import React, { useContext } from 'react'
import { AppContext } from '../services/app-context'


function Search() {
  const { handleSearch } = useContext(AppContext)

   return (
     <div className="search">
      <label> Filter Products : &nbsp;
        <input
          type="text"
          placeholder="liquor name..."
          onChange={(e) => handleSearch(e)}
        />
      </label>
  </div>
  )
}

export default Search