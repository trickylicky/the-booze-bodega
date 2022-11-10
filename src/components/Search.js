import React from 'react'


function Search( { handleSearch} ) {
   return (
     <div className="search">
    <input
      type="text"
      placeholder="Search..."
      onChange={(e) => handleSearch(e)}
    />
  </div>
  )
}

export default Search