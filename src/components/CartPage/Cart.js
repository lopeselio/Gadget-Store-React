import React from 'react'
import Title from '../Title'
import CartColumns from './CartColumns'
// import CartItem from './CartItem'
import CartTotals from './CartTotals'
import CartList from './CartList'

export default function Cart() {
  return (
    <div>
      <CartColumns />
      <CartList />
      <CartTotals />
    </div>
  )
}
