import React from 'react'

function Search( {searchFilter} ) {
 
  return (
     <div className="center search">
    <input
      type="text"
      placeholder="Search..."
      onChange={(e) => searchFilter(e)}
    />
  </div>
  )
}

export default Search