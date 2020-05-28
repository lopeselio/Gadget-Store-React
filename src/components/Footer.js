import React from 'react'
import styled from 'styled-components'
import { ProductConsumer } from '../context'
import devELIOper from '../images/develioper-04.png'
export default function Footer () {
  return (
    <ProductConsumer>
      {value => {
        return <FooterWrapper>
          <div className='container py-3'>
            <div className='row'>
              <div className='col-md-4'>
                <p className='text-capitalize'>
                copyright &copy; Tech Store by devELIOper {new Date().getFullYear()}. all rights reserved{''}
                </p>
              </div>
              <div className='col-md-4 d-flex justify-content-around'>
                {value.socialIcons.map(item => (
                  <a href={item.path} key={item.id}>{item.icon}</a>
                ))}
              </div>
              <div className='col-md-4'>
                <a href='https://www.github.com/lopeselio'><img className='pic' src={devELIOper} /></a>
              </div>
            </div>
          </div>
               </FooterWrapper>
      }}
    </ProductConsumer>
  )
}

const FooterWrapper = styled.footer`
  background: var(--darkGrey);
  color: var(--mainWhite);
  .icon {
    font-size: 1.5rem;
    color: var(--mainWhite);
    transition: var(--mainTransition);
  }
  .icon:hover {
    color: var(--primaryColor);
  }
  .pic {
    height: 4rem;
  }
`
