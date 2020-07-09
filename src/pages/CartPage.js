import React from 'react'
import CartSection from '../components/CartPage'
import HeroPage from '../components/HeroPage'
import cartBcg from '../images/storeBcg.jpeg'
export default function CartPage () {
  return (
    <>
      <HeroPage img={cartBcg} />
      <CartSection />
    </>
  )
}
