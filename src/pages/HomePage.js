import React from 'react'
import { ProductConsumer } from '../context/context'
import HeroPage from '../components/HeroPage'
import { Link } from 'react-router-dom'

export default function HomePage () {
  return (
    <>
      <HeroPage>
        <Link to='/products'>Our Products</Link>
      </HeroPage>
    </>
  )
}
