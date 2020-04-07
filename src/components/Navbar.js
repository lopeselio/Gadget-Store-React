import React from 'react'
import { FaBars, FaCart } from 'react-icons/fa'
import styled from 'styled-components'
import { ProductConsumer } from '../context'
import logo from './../images/logo.svg'

export default function Navbar () {
  return (
    <ProductConsumer>
      {value => {
        const { cartItems, handleSidebar, handleCart = value }
        return <NavWrapper>
<div className='nav-center'>
<FaBars className='nav-icon' onClick={handleSidebar} />
<img src={logo} className alt='tech-store-logo' />
<div className='nav-cart'>
<FaCartPlus className='nav-icon' onClick={handleCart} />
<div className='crt-items'>{cartItems}</div>
</div>
</div>
      } 
      }
    </ProductConsumer>
  )
}

const NavWrapper = styled.nav`

`
