import React from 'react'
import Info from '../components/AboutPage/Info'
import HeroPage from '../components/HeroPage'
import aboutBcg from '../images/aboutBcg.jpeg'
export default function AboutPage () {
  return (
    <>
      <HeroPage img={aboutBcg} />
      <Info />
    </>
  )
}
