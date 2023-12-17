import React from 'react'

const BlogList = ({ blogs }) => {
  return (
    <div className='blog-list'>
      
      {
          blogs.map(item => (
            <div className='blog-container' key={ item.id }>
              <h2>{ item.title }</h2>
              <p>{ item.body }</p>
              <span>Created by: { item.author }</span><hr />
            </div>
          ))
        }

    </div>
  )
}

export default BlogList
