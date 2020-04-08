import React from 'react'
import { ProductConsumer } from './context'
import styled from 'styled-components'

export default function SideCart () {
  return (
    <ProductConsumer>
      {value => {
        const { cartOpen, closeCart, cart } = value
        return (
          <CartWrapper show={cartOpen} onClick={closeCart}>
            <p> cart items </p>
          </CartWrapper>
        )
      }}
    </ProductConsumer>
  )
}

const CartWrapper = styled.div`

`
