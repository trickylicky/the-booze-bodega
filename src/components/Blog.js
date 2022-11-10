import React from 'react'
import BlogArticle from './BlogArticle'

function Blog() {
  return (
    <div className='blog'>
      <p className='first'>Blog</p>
        <div className='article'>
          <BlogArticle />
          <BlogArticle />
        </div>
        <div className='article'>
          <BlogArticle />
          <BlogArticle />
        </div>
        
    </div>
  )
}

export default Blog