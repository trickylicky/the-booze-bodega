import React from 'react'
import BlogArticle from './BlogArticle'

function Blog() {
  return (
    <div className='component blog'>
      <p className='first'>Our Blogs</p>
        <div className='article'>
          <BlogArticle />
        </div>
        <div className='article'>
          <BlogArticle />
        </div>
        
    </div>
  )
}

export default Blog