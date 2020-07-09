import React from 'react'
import Title from '../Title'
import CartColumns from './CartColumns'
// import CartItem from './CartItem'
import CartTotals from './CartTotals'
import CartList from './CartList'

export default function Cart () {
  return (
    <section className='py-5'>
      <div className='container'>
        <Title title= 'Your Cart Items' center />
      </div>
      <CartColumns />
      <CartList />
      <CartTotals />
    </section>
  )
}
