import React from 'react'
// import { ProductConsumer } from '../context/context'
import HeroPage from '../components/HeroPage'
import { Link } from 'react-router-dom'

export default function HomePage () {
  return (
    <>
      <HeroPage title='Awesome Gadgets' max='true'>
        <Link className='main-link' to='/products' style={{ margin: '2rem' }}>Our Products</Link>
      </HeroPage>
    </>
  )
}
