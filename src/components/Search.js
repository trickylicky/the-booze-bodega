import React, { useContext } from 'react'
import { AppContext } from '../services/app-context'


function Search() {
  const { handleSearch } = useContext(AppContext)

   return (
     <div className="search">
    <input
      type="text"
      placeholder="search liquor name..."
      onChange={(e) => handleSearch(e)}
    />
  </div>
  )
}

export default Search