import React from 'react'
import styled from 'styled-components'
import mainBcg from '../images/mainBcg.jpeg'

export default function HeroPage ({ img, title, max, children }) {
  return (
    <HeroWrapper max={max}>
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


`
