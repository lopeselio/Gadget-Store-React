import React from 'react'

export default function CartColumns () {
  return (
    <div className='container-fluid text-center d-none d-lg-block my-5'>
      <div className='row'>
        <div className='col-lg-2'>
          <p className='text-uppercase'>products</p>
        </div>
        <div className='col-lg-2'>
          <p className='text-uppercase'>name of the product</p>
        </div>
        <div className='col-lg-2'>
          <p className='text-uppercase'>price</p>
        </div>
        <div className='col-lg-2'>
          <p className='text-uppercase'>quantity</p>
        </div>
        <div className='col-lg-2'>
          <p className='text-uppercase'>remove</p>
        </div>
        <div className='col-lg-2'>
          <p className='text-uppercase'>TOTAL</p>
        </div>
      </div>
    </div>
  )
}
