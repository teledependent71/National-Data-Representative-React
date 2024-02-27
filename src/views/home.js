import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>National Data Representative</title>
        <meta property="og:title" content="National Data Representative" />
      </Helmet>
    </div>
  )
}

export default Home
