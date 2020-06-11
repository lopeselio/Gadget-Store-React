import React, { Component } from 'react'
import { linkData } from '../context/linkData'
import { socialData } from '../context/socialData'
import { items } from "./data/productData"

const ProductContext = React.createContext();

//Provider
//Consumer
class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 0,
    links: linkData,
    socialIcons: socialData, 
    cart: [], 
    cartItems: 0, 
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    storeProduct:[],
    filteredProducts: [],
    singleProduct: {},
    loading: true
  };
  componentDidMount() {
    this.setProducts(items)
  }

  setProducts = (products) => {
    let storeProducts = products.map(item =>{
      const {id} = item.sys
      const product = {id, ...item.fields}
      return product
    })
    console.log(storeProducts)
  }
  // handle sidebar
  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };
  // hanldle sart
  handleCart = () => {
    this.setState({ cartOpen: !this.state.sidebarOpen });
  };
  //close cart
  closeCart = () => {
    this.setState({ cartOpen: false });
  };
  // open
  openCart = () => {
    this.setState({ cartOpen: true });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart,
          closeCart: this.closeCart,
          openCart: this.openCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
