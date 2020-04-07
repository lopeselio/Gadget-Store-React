/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'

const ProductContext = React.createContext()

class ProductProvider extends Component {
  render () {
    return (
      <ProductContext.Provider value='Hello from Context'>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer

export { ProductConsumer, ProductProvider }
