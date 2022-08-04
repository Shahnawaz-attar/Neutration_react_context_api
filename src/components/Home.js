import React from 'react'
import Banner from './Banner'
import Food from './Food'

const Home = () => {
  return (
      <>
      <Banner/>
      <hr />
      <h1 className="text-center">Diet Food</h1>
      <Food/>


      </>
  )
}

export default Home