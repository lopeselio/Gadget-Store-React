import React from 'react'
import styled from 'styled-components'
import mainBcg from '../images/mainBcg.jpeg'

export default function HeroPage ({ img, title, max, children }) {
  return (
    <HeroWrapper max={max} img={img}>
      <div className='banner'>
        <h1 className='title'>{title}</h1>
        {children}
      </div>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${props => (props.max ? '100vh' : '60vh')};
  color: var(--mainwhite);
  background: linear-gradient(var(--primaryRGBA),var(--primaryRGBA)), url(${props => props => props.img}) center/cover no-repeat;
  .title {
    padding-top: 2rem;
    font-size: 3.5rem;
    text-shadow: 4px 2px 2px rgba(0, 0, 0, 0.3);
    color: #fff;
    text-transform: uppercase;
    letter-spacing: var(--mainSpacing)
  }

`
HeroPage.defaultProps = {
  img: mainBcg
}
