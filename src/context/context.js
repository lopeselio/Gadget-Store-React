/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'

const ProductContext = React.createContext()

class ProductProvider extends Component {
  render () {
    <ProductContext.Provider value='Hello from Product Context'>
      {this.props.children}
    </ProductContext.Provider>
    return {

    }
  }
}

const ProductConsumer = ProductContext.Consumer

export { ProductConsumer, ProductProvider }
