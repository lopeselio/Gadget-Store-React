/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'
import linkData from './linkData'

const ProductContext = React.createContext()

class ProductProvider extends Component {
  state =  {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 0,
    links: linkData,
    cart: []
  }
  // handle sidebar
  handleSidebar = () => {
    this.setState({sidebarOpen:!this.state.sidebarOpen})
  }
  // handle cart
  handleCart = () => {
    this.setState({cartOpen: !this.state.cartOpen})
  }
  // close Cart
  closeCart = () => {
    this.setState({cartOpen: false})
  }
  // open Cart
  openCart = () => {
    this.setState({cartOpen: true})
  }
  render () {
    return (
      <ProductContext.Provider value={
        {
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart,
          openCart: this.openCart,
          closeCart: this.closeCart
        }
      }>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer

export { ProductConsumer, ProductProvider }
