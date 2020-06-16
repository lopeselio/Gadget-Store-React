import React from 'react'
import { ProductConsumer } from '../../context'
import Title from '../Title'
import Product from '../Product'

export default function Products () {
  return (
    <ProductConsumer>
      {value => {
        const { filteredProducts } = value
        return (
          <section className='py-5'>
            <div className='container'>
              {/* title */}
              <Title center title='Our Products' />
              {/* products */}
              <div className='row py-5'>
                {filteredProducts.map(product => {
                  return <Product key={product.id} product={product} />
                })}
              </div>
            </div>
          </section>
        )
      }}
    </ProductConsumer>
  )
}
