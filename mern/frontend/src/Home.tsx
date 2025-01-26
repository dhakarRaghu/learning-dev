import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <button   style={{ padding: '5px 10px' }}>
      <Link to="/shortUrl" style={{ textDecoration: 'none', color: 'inherit' }}>
         Shorten you URL
        </Link>
      </button>
    </div>
  )
}

export default Home
