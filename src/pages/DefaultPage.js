import React from 'react'
import HeroPage from '../components/HeroPage'
import defaultBcg from '../images/defaultBcg.jpeg'
import { Link } from 'react-router-dom'

export default function DefaultPage () {
  return (
    <>
      <HeroPage img={defaultBcg} title={404} max>
        <h2 className='text-uppercase'> Page Not Found</h2>
        <Link to='/' className='main-link' style={{ marginTop: '2rem' }}>Return Home</Link>
      </HeroPage>
    </>
  )
}
