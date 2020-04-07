import React from 'react'
import { ProductConsumer } from '../context/context'

export default function HomePage () {
  return (
    <>
      <ProductConsumer>
        {value => <h1>{value}</h1>}
      </ProductConsumer>
    </>
  )
}
