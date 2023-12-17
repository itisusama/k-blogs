import React, { useState } from 'react'
import BlogList from './BlogList'

const HomePage = () => {

  const[blogs, srtBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'Usama', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Hassan', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Ali', id: 3 }
  ])

  return (
    <div className='home-page'>
      <BlogList blogs={ blogs }/>
    </div>
  )
}

export default HomePage
